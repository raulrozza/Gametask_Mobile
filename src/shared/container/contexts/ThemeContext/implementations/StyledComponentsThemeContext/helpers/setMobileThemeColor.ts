export default function setMobileThemeColor(color: string): void {
  const meta = document.querySelector('meta[name="theme-color"]');

  if (meta) meta.setAttribute('content', color);
}
