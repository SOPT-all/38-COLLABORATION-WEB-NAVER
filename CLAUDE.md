# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # 개발 서버 실행
pnpm build        # TypeScript 검사 후 프로덕션 빌드
pnpm lint         # ESLint 검사
pnpm lint:fix     # ESLint 자동 수정
pnpm format       # Prettier 포맷
pnpm format:check # Prettier 검사
pnpm build:icons  # SVG → TSX 아이콘 컴포넌트 자동 생성
```

## 📖 Reference Guides
작업 수행 시 반드시 아래 스킬 가이드를 참조하여 실행한다.
- **AI Action Skills**: `./skills.md` (커밋, PR 생성, A11y 검사 로직 포함)

## Architecture

### 핵심 원칙
- **경로 별칭 (Absolute Imports)**: 모든 임포트는 절대 경로 별칭(`@/`)을 사용한다. 상대 경로(`../`, `./`) 사용을 지양한다. (tsconfig, vite 설정 완료)
  - 예시: `import { Button } from '@/shared/components/Button'`
  
### 폴더 구조
- `src/app/`: 진입점, 라우터(`router.tsx`), Provider 설정.
- `src/pages/{feature}/`: 페이지 단위 기능. 내부에 전용 `api/`, `components/`, `hooks/` 배치.
- `src/shared/`: 공통 컴포넌트, 유틸, 상수, 전역 상태, 타입 등.
- `src/shared/icons/`: 자동 생성 폴더 (수동 수정 금지).

### 핵심 기술 스택
- **Routing**: React Router v7 (`createBrowserRouter`, `lazy` 로딩 필수).
- **Server State**: TanStack Query v5 (`staleTime: 1m`, `gcTime: 5m`).
- **Styling**: Tailwind CSS v4, `cn()` 유틸리티 사용.
- **Layout**: 모바일 뷰 고정 (min: 375px, max: 430px).

## 🎨 Coding Conventions
- **Naming**: 
  - 폴더/Hook/API: `kebab-case`
  - 컴포넌트: `PascalCase.tsx`
  - 변수/함수: `camelCase`, 상수: `UPPER_SNAKE_CASE`
- **React**: 화살표 함수 선언, **Named Export만 허용**, Self-closing 태그 준수
- **TypeScript**: `any` 금지 (대신 `unknown`), Props는 `interface` 또는 `type` (접미사 `Props` 사용)
- **Functions**: 동사+명사 (get, create, handle...), 불린은 `is/has` 접두사

## 🔗 Git 및 워크플로우
- **Branch**: `prefix/이슈번호-작업내용` (feat, fix, refactor, style, docs, chore)
- **Commit Format**: `머릿말: 내용 (#이슈번호)` (제목 첫 글자 대문자, 끝 마침표 금지)
- **Environment**: `.env` 내 `VITE_API_BASE_URL` 참조

