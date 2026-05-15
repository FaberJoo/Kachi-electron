import { appVersionLine } from './lib/version';

export function App() {
  return (
    <main className="app">
      <h1>Kachi Electron</h1>
      <p className="subtitle">TypeScript + Vite + Vitest setup is ready.</p>
      <code>{appVersionLine()}</code>
    </main>
  );
}
