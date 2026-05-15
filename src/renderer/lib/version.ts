export function appVersionLine(): string {
  const node = window.versions?.node?.() ?? 'unknown';
  const chrome = window.versions?.chrome?.() ?? 'unknown';
  const electron = window.versions?.electron?.() ?? 'unknown';

  return `Node ${node} | Chromium ${chrome} | Electron ${electron}`;
}
