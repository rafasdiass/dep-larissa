/**
 * Vercel Serverless Function — api/volunteer.js
 * Processa formulários de voluntariado e apoio da campanha Larissa DeLucca (15888 MDB).
 */
export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method Not Allowed',
      message: 'Apenas requisições POST são aceitas.',
    });
  }

  try {
    const { name, email, whatsapp, city, interest, message, consent, website, honeypot } = req.body || {};

    // Honeypot anti-spam check: se preenchido por robô, responde 200 silenciosamente sem processar
    if (website || honeypot) {
      return res.status(200).json({
        success: true,
        message: 'Cadastro recebido com sucesso!',
      });
    }

    // Validação obrigatória
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'Nome completo é obrigatório (mínimo de 2 caracteres).',
      });
    }

    if (!whatsapp || typeof whatsapp !== 'string' || whatsapp.replace(/\D/g, '').length < 10) {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'WhatsApp válido com DDD é obrigatório.',
      });
    }

    if (consent !== true) {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'O consentimento com a política de privacidade (LGPD) é obrigatório.',
      });
    }

    const payload = {
      name: name.trim().slice(0, 150),
      whatsapp: whatsapp.replace(/\D/g, '').slice(0, 15),
      city: (city || 'Não informado').trim().slice(0, 100),
      email: (email || '').trim().toLowerCase().slice(0, 120),
      interest: (interest || 'voluntariado').slice(0, 50),
      message: (message || '').trim().slice(0, 500),
      timestamp: new Date().toISOString(),
      source: 'website_oficial_larissa_delucca',
    };

    // Do not report a registration as saved if no destination received it.
    if (!process.env.VOLUNTEER_WEBHOOK_URL) {
      return res.status(503).json({
        success: false,
        message: 'O cadastro está temporariamente indisponível. Fale com a equipe pelo WhatsApp.',
      });
    }
    try {
      const forwarded = await fetch(process.env.VOLUNTEER_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(10000),
      });
      if (!forwarded.ok) throw new Error('Delivery failed');
    } catch {
      return res.status(502).json({
        success: false,
        message: 'Não foi possível enviar seu cadastro. Tente novamente ou fale com a equipe pelo WhatsApp.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Cadastro recebido com sucesso! A coordenação entrará em contato.',
      receivedAt: payload.timestamp,
    });
  } catch (error) {
    console.error('Erro ao processar volunteer API:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
      message: 'Falha no processamento interno do cadastro.',
    });
  }
}
