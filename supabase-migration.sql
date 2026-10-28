-- ============================================================
-- CRM Profesional — Migration SQL
-- Ejecutar en Supabase SQL Editor (https://supabase.com/dashboard)
-- ============================================================

-- 1. Nuevas columnas en la tabla leads
ALTER TABLE leads ADD COLUMN IF NOT EXISTS idioma_preferido text DEFAULT 'es';
ALTER TABLE leads ADD COLUMN IF NOT EXISTS fuente text;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS aseguradora_actual text;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS fecha_vencimiento_poliza date;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS motivo_perdida text;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS valor_estimado numeric;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS primer_contacto_at timestamptz;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS ultimo_contacto_at timestamptz;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS proximo_seguimiento timestamptz;

-- 2. Tabla de seguimientos (follow-ups / tasks)
CREATE TABLE IF NOT EXISTS seguimientos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id uuid NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  tipo text NOT NULL DEFAULT 'otro',
  fecha_programada timestamptz NOT NULL,
  fecha_completada timestamptz,
  descripcion text,
  completado boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_seguimientos_lead ON seguimientos(lead_id);
CREATE INDEX IF NOT EXISTS idx_seguimientos_fecha ON seguimientos(fecha_programada);
CREATE INDEX IF NOT EXISTS idx_seguimientos_pendientes ON seguimientos(completado, fecha_programada) WHERE completado = false;

-- 3. Tabla de actividades (activity log)
CREATE TABLE IF NOT EXISTS actividades (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id uuid NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  tipo text NOT NULL DEFAULT 'nota',
  descripcion text NOT NULL,
  metadata jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_actividades_lead ON actividades(lead_id);

-- 4. RLS (Row Level Security) — desactivado para service_role key
-- Si usas supabaseAdmin (service_role), no necesitas RLS.
-- Si quieres habilitar RLS en el futuro, agrega policies aquí.
