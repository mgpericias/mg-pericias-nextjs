export function progressoSecao(el: HTMLElement): number {
  const r = el.getBoundingClientRect();
  const total = r.height - window.innerHeight;
  if (total <= 0) return 0;
  return Math.min(1, Math.max(0, -r.top / total));
}

export function progressoEntre(
  inicio: HTMLElement,
  fim: HTMLElement
): number {
  const startY = inicio.getBoundingClientRect().top + window.scrollY;
  const endY = fim.getBoundingClientRect().bottom + window.scrollY;
  const total = endY - startY - window.innerHeight;
  if (total <= 0) return 0;
  return Math.min(1, Math.max(0, (window.scrollY - startY) / total));
}

export function secaoVisivel(el: HTMLElement): boolean {
  const r = el.getBoundingClientRect();
  return r.bottom > 0 && r.top < window.innerHeight;
}

export function querySecao(selector: string): HTMLElement | null {
  return document.querySelector(selector);
}
