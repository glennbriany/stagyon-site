/* ==========================================================================
   STAGYON — SITE CONFIG
   Edit these constants and the whole site updates.
   ========================================================================== */

const STAGYON_CONFIG = {
  whatsappNumber: "256752624582",
  businessName: "Stagyon",
  city: "Kampala, Uganda",
  instagram: "https://instagram.com/stagyon",
  tiktok: "https://tiktok.com/@stagyon",
  facebook: "https://facebook.com/stagyon",
};

/** Builds a wa.me deep link with a pre-filled message. */
function waLink(message) {
  const base = `https://wa.me/${STAGYON_CONFIG.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

function formatPrice(ugx) {
  return "USh " + Number(ugx).toLocaleString("en-US");
}
