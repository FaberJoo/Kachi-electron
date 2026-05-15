/// <reference types="vite/client" />

interface Window {
  versions?: {
    node?: () => string;
    chrome?: () => string;
    electron?: () => string;
  };
}
