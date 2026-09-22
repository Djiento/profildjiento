import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const recipient = 'abangadj@gmail.com';

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  budget?: unknown;
  timeline?: unknown;
};

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function getText(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'Le service email n’est pas configuré.' },
      { status: 500 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: 'Données invalides.' }, { status: 400 });
  }

  const name = getText(payload.name);
  const email = getText(payload.email);
  const subject = getText(payload.subject);
  const message = getText(payload.message);
  const budget = getText(payload.budget);
  const timeline = getText(payload.timeline);

  if (!name || !subject || !message || !email) {
    return NextResponse.json(
      { error: 'Les champs nom, email, sujet et message sont obligatoires.' },
      { status: 400 },
    );
  }

  if (name.length > 120 || subject.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: 'Un ou plusieurs champs sont trop longs.' }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'L’adresse email est invalide.' }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>',
    to: [recipient],
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: [
      `Nom : ${name}`,
      `Email : ${email}`,
      `Budget : ${budget || 'Non précisé'}`,
      `Délai : ${timeline || 'Non précisé'}`,
      '',
      message,
    ].join('\n'),
    html: `
      <h2>Nouveau message depuis le portfolio</h2>
      <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
      <p><strong>Email :</strong> ${escapeHtml(email)}</p>
      <p><strong>Budget :</strong> ${escapeHtml(budget || 'Non précisé')}</p>
      <p><strong>Délai :</strong> ${escapeHtml(timeline || 'Non précisé')}</p>
      <hr />
      <p>${escapeHtml(message).replaceAll('\n', '<br />')}</p>
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Impossible d’envoyer le message.' }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}