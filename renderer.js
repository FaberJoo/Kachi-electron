const setVersion = (selector, version) => {
  const element = document.getElementById(selector);
  if (!element) return;
  element.innerText = version;
};

window.addEventListener('DOMContentLoaded', () => {
  setVersion('node-version', window.versions.node());
  setVersion('chrome-version', window.versions.chrome());
  setVersion('electron-version', window.versions.electron());
});
