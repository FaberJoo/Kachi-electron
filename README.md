# Kachi

A local-first markdown editor app for macOS.

---

## Overview

Kachi is a offline-capable document editor built on plain markdown files.
All data lives on your file system

---

## Run (Electron)

```bash
pnpm install
pnpm dev
```

## Build Installers

```bash
pnpm dist:mac    # .dmg
pnpm dist:win    # .exe (NSIS)
pnpm dist:linux  # .AppImage + .deb
```

## CI/CD

- CI: `.github/workflows/ci.yml`
- CD: `.github/workflows/cd.yml`
  - `v*` 태그 푸시 또는 수동 실행 시 macOS/Windows/Linux 설치 파일 생성
  - 생성 결과는 GitHub Actions artifact로 업로드
  - `v*` 태그의 경우 GitHub Release에도 자동 첨부
