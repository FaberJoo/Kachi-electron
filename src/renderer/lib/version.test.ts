import { describe, expect, it, vi } from 'vitest';
import { appVersionLine } from './version';

declare global {
  interface Window {
    versions?: {
      node?: () => string;
      chrome?: () => string;
      electron?: () => string;
    };
  }
}

describe('appVersionLine', () => {
  it('formats version text using bridge APIs', () => {
    window.versions = {
      node: vi.fn(() => '20.0.0'),
      chrome: vi.fn(() => '125.0.0'),
      electron: vi.fn(() => '33.0.0')
    };

    expect(appVersionLine()).toContain('Node 20.0.0');
    expect(appVersionLine()).toContain('Chromium 125.0.0');
    expect(appVersionLine()).toContain('Electron 33.0.0');
  });
});
