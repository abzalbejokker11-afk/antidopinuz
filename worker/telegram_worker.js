/**
 * Cloudflare Worker for Telegram Notifications & Test Results
 * Endpoint: https://antidoni-tg.abzalbejokker11.workers.dev
 */

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // CORS Headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (request.method === 'POST') {
    try {
      const data = await request.json();
      
      // Ma'lumotlarni Telegram botga yuborish
      const BOT_TOKEN = typeof TELEGRAM_BOT_TOKEN !== 'undefined' ? TELEGRAM_BOT_TOKEN : '';
      const CHAT_ID = typeof TELEGRAM_CHAT_ID !== 'undefined' ? TELEGRAM_CHAT_ID : '';

      let message = `🛡️ Yangi Antidoping Natijasi:\n\n`;
      if (data.name) message += `👤 F.I.Sh: ${data.name}\n`;
      if (data.role) message += `💼 Roli: ${data.role}\n`;
      if (data.score) message += `📊 Natija: ${data.score} ball\n`;
      if (data.module) message += `📚 Modul: ${data.module}\n`;
      message += `⏱️ Vaqt: ${new Date().toISOString()}`;

      if (BOT_TOKEN && CHAT_ID) {
        const tgUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
        await fetch(tgUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: 'HTML'
          })
        });
      }

      return new Response(JSON.stringify({ ok: true, status: 'received' }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    } catch (err) {
      return new Response(JSON.stringify({ ok: false, error: err.message }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
  }

  return new Response(JSON.stringify({ ok: true, message: 'Antidoping Telegram Worker Active' }), {
    status: 200,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
  });
}
