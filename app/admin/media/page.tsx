'use client';

import { useState, useEffect, useRef, useCallback, DragEvent, ChangeEvent } from 'react';
import { Upload, Copy, Trash2, Check, Image as ImageIcon, AlertCircle, RefreshCw, X } from 'lucide-react';

interface MediaFile {
  name: string;
  url: string;
  size: number;
  created_at: string;
}

function fmtSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function CopiedCheck() {
  return <Check className="w-3.5 h-3.5" />;
}

function ImageCard({ file, onDelete }: { file: MediaFile; onDelete: (name: string) => void }) {
  const [copied, setCopied] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(file.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  async function handleDelete() {
    setDeleting(true);
    await fetch('/api/admin/media', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: file.name }),
    });
    onDelete(file.name);
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden group">
      {/* Thumbnail */}
      <div className="relative aspect-video bg-slate-100 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={file.url}
          alt={file.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="px-3 py-2.5">
        <p className="text-xs text-slate-600 truncate font-medium" title={file.name}>
          {file.name}
        </p>
        {file.size > 0 && (
          <p className="text-[10px] text-slate-400 mt-0.5">{fmtSize(file.size)}</p>
        )}

        <div className="flex items-center gap-1.5 mt-2">
          <button
            onClick={handleCopy}
            className={`flex items-center gap-1.5 flex-1 justify-center py-1.5 rounded-lg text-xs font-semibold transition-all ${
              copied
                ? 'bg-emerald-100 text-emerald-700'
                : 'bg-slate-800 text-white hover:bg-slate-700'
            }`}
          >
            {copied ? <CopiedCheck /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copiado' : 'Copiar link'}
          </button>

          {confirmDelete ? (
            <div className="flex gap-1">
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="px-2 py-1.5 rounded-lg bg-red-600 text-white text-xs font-semibold hover:bg-red-700 disabled:opacity-50"
              >
                {deleting ? '…' : 'Sí'}
              </button>
              <button
                onClick={() => setConfirmDelete(false)}
                className="px-2 py-1.5 rounded-lg bg-slate-100 text-slate-600 text-xs font-semibold hover:bg-slate-200"
              >
                No
              </button>
            </div>
          ) : (
            <button
              onClick={() => setConfirmDelete(true)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function MediaPage() {
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadErrors, setUploadErrors] = useState<string[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function fetchFiles() {
    try {
      const res = await fetch('/api/admin/media');
      if (!res.ok) throw new Error('Error al cargar archivos');
      const data = await res.json();
      setFiles(data.files ?? []);
    } catch {
      setError('No se pudieron cargar las imágenes. Verifica que el bucket "media" existe en Supabase.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useEffect(() => { fetchFiles(); }, []);

  async function handleRefresh() {
    setRefreshing(true);
    await fetchFiles();
  }

  const uploadFiles = useCallback(async (fileList: File[]) => {
    if (fileList.length === 0) return;
    setUploading(true);
    setUploadErrors([]);
    const errs: string[] = [];
    const newFiles: MediaFile[] = [];

    for (const file of fileList) {
      const form = new FormData();
      form.append('file', file);
      try {
        const res = await fetch('/api/admin/media/upload', { method: 'POST', body: form });
        const data = await res.json();
        if (!res.ok) {
          errs.push(`${file.name}: ${data.error}`);
        } else {
          newFiles.push({ name: data.name, url: data.url, size: file.size, created_at: new Date().toISOString() });
        }
      } catch {
        errs.push(`${file.name}: Error de red`);
      }
    }

    setFiles(prev => [...newFiles, ...prev]);
    setUploadErrors(errs);
    setUploading(false);
  }, []);

  function onDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragging(false);
    const fileList = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
    uploadFiles(fileList);
  }

  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    const fileList = Array.from(e.target.files ?? []);
    uploadFiles(fileList);
    e.target.value = '';
  }

  function handleDelete(name: string) {
    setFiles(prev => prev.filter(f => f.name !== name));
  }

  return (
    <div className="px-6 py-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
        <div>
          <h1 className="text-xl font-bold text-slate-800">Media</h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Sube imágenes y copia el link directo para usar en el sitio, blog o redes.
          </p>
        </div>
        <button
          onClick={handleRefresh}
          disabled={refreshing}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin' : ''}`} />
          Actualizar
        </button>
      </div>

      {/* Drop zone */}
      <div
        onDragOver={e => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        onClick={() => !uploading && inputRef.current?.click()}
        className={`relative border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center text-center cursor-pointer transition-all mb-6 ${
          dragging
            ? 'border-slate-500 bg-slate-100'
            : uploading
            ? 'border-slate-300 bg-slate-50 cursor-not-allowed'
            : 'border-slate-300 bg-white hover:border-slate-400 hover:bg-slate-50'
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif,image/svg+xml"
          multiple
          className="hidden"
          onChange={onInputChange}
          disabled={uploading}
        />
        {uploading ? (
          <>
            <div className="w-8 h-8 border-2 border-slate-300 border-t-slate-700 rounded-full animate-spin mb-3" />
            <p className="text-sm font-medium text-slate-600">Subiendo imágenes…</p>
          </>
        ) : (
          <>
            <Upload className="w-8 h-8 text-slate-400 mb-3" />
            <p className="text-sm font-semibold text-slate-600">
              {dragging ? 'Suelta las imágenes aquí' : 'Arrastra imágenes aquí'}
            </p>
            <p className="text-xs text-slate-400 mt-1">o haz clic para seleccionar · JPG, PNG, WebP, GIF, SVG · máx. 10 MB</p>
          </>
        )}
      </div>

      {/* Upload errors */}
      {uploadErrors.length > 0 && (
        <div className="mb-5 bg-red-50 border border-red-200 rounded-xl p-4">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-red-700 mb-1">Errores al subir:</p>
                {uploadErrors.map((e, i) => (
                  <p key={i} className="text-xs text-red-600">{e}</p>
                ))}
              </div>
            </div>
            <button onClick={() => setUploadErrors([])} className="text-red-400 hover:text-red-600">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="mb-5 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm text-amber-700">
          {error}
        </div>
      )}

      {/* Grid */}
      {loading ? (
        <div className="flex items-center justify-center py-16">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-2 border-slate-300 border-t-slate-700 rounded-full animate-spin" />
            <p className="text-sm text-slate-500">Cargando imágenes…</p>
          </div>
        </div>
      ) : files.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <ImageIcon className="w-10 h-10 text-slate-300 mb-3" />
          <p className="text-slate-500 font-medium">No hay imágenes todavía</p>
          <p className="text-slate-400 text-sm mt-1">Sube tu primera imagen usando la zona de arriba</p>
        </div>
      ) : (
        <>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
            {files.length} {files.length === 1 ? 'imagen' : 'imágenes'}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {files.map(file => (
              <ImageCard key={file.name} file={file} onDelete={handleDelete} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
