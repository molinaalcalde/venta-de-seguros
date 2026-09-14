import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, email, telefono, tipo_seguro, nivel_proteccion } = body;

    // Basic validation
    if (!nombre || typeof nombre !== 'string' || nombre.trim().length === 0) {
      return NextResponse.json(
        { error: 'El nombre es requerido.' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || email.trim().length === 0) {
      return NextResponse.json(
        { error: 'El correo electrónico es requerido.' },
        { status: 400 }
      );
    }

    // Simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: 'Por favor ingresa un correo electrónico válido.' },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { data, error } = await supabaseAdmin
      .from('leads')
      .insert([
        {
          nombre: nombre.trim(),
          email: email.trim().toLowerCase(),
          telefono: telefono ? telefono.trim() : null,
          tipo_seguro: tipo_seguro || null,
          nivel_proteccion: nivel_proteccion || null,
          created_at: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json(
        { error: 'Error al guardar la información. Por favor inténtalo de nuevo.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Cotización recibida exitosamente.', id: data?.id },
      { status: 201 }
    );
  } catch (err) {
    console.error('API route error:', err);
    return NextResponse.json(
      { error: 'Error interno del servidor.' },
      { status: 500 }
    );
  }
}
