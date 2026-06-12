const AW_ID = "AW-336890751";
const AW_CONVERSION = `${AW_ID}/wtIPCNz7jd0CEP-W0qAB`;

const AW_EVENTS = new Set(["clique_whatsapp", "envio_formulario"]);

let awConfigured = false;

function ensureAwConfig() {
  if (typeof window === "undefined" || !(window as any).gtag) return;
  if (awConfigured) return;
  (window as any).gtag("config", AW_ID);
  awConfigured = true;
}

function trackAwConversion() {
  if (typeof window === "undefined" || !(window as any).gtag) return;
  ensureAwConfig();
  (window as any).gtag("event", "conversion", { send_to: AW_CONVERSION });
}

export function trackEvent(nome: string, params: Record<string, any> = {}) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", nome, params);
    if (AW_EVENTS.has(nome)) {
      trackAwConversion();
    }
  }
}
