// UK local format (e.g. "07933 841 934") -> E.164-ish for wa.me (e.g. "447933841934")
export function toWhatsAppHref(rawPhone: string): string {
  const digits = rawPhone.replace(/\D/g, "").replace(/^0/, "44");
  return `https://wa.me/${digits}`;
}
