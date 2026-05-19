const PIXEL_ID = '1427256302496443';
const ACCESS_TOKEN =
  'EAAUFUGhl0pcBRXZAhQY4VVJ4amaVw6hPPnq3NSfsixgLyFS0SNmxHojnKT5BNzSpUt3D5beTZBizVERaW1OuzV4h8oycodXMYhIczbgxvL731sZCnLgrwQQdjZAJp5Atr18wzUE1jiptYv6jHFfyt766qNgAQYPyZBO5wQU8LeCSG2NZAGC9mNjMRKCcevBQZDZD';

function getCookies() {
  return document.cookie.split(';').reduce((acc, c) => {
    const [k, v] = c.trim().split('=');
    if (k) acc[k.trim()] = v;
    return acc;
  }, {});
}

// Dispara evento no pixel do browser E na Conversions API (deduplicado pelo eventId)
export function trackFbEvent(eventName) {
  const eventId = crypto.randomUUID();

  // Browser pixel
  if (window.fbq) {
    window.fbq('track', eventName, {}, { eventID: eventId });
  }

  // Conversions API (server-side via fetch no browser)
  const cookies = getCookies();
  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        action_source: 'website',
        event_source_url: window.location.href,
        user_data: {
          client_user_agent: navigator.userAgent,
          ...(cookies['_fbp'] && { fbp: cookies['_fbp'] }),
          ...(cookies['_fbc'] && { fbc: cookies['_fbc'] }),
        },
      },
    ],
  };

  fetch(
    `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }
  ).catch(() => {});
}
