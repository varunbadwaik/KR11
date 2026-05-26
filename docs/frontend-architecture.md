# KR11 Frontend Architecture

## Overview

KR11 is currently a React/Vite/TypeScript frontend prototype that preserves the Figma Make visual design while moving toward production-ready structure. The app is mobile-first, route-driven, and mock-backed until the FastAPI backend is available.

On the current Windows PowerShell setup, use `npm.cmd run build` for production build verification because `npm.ps1` is blocked by local execution policy.

## Route Map

- `/` redirects to `/login`
- `/login`: mobile login
- `/otp`: OTP verification
- `/home`: event discovery and primary navigation
- `/events/:eventId/create-team`: team creation
- `/companies`: company discovery
- `/companies/:companyId/chart`: company chart
- `/leaderboard`: leaderboard

## Page And Component Separation

`src/pages` contains route adapters. These pages own navigation concerns such as `useNavigate` and route params.

`src/app/components` still contains preserved Figma-exported screens. They remain visually close to the original design while logic is gradually moved into hooks, mocks, services, and shared components.

`src/components/common` contains reusable UI states and shared utility components:

- `LoadingState`
- `EmptyState`
- `ErrorState`
- `SectionHeader`
- `FantasyDisclaimer`

## Types, Mocks, And Services

Domain models live in `src/types`:

- User
- Event
- Company
- Team
- Wallet
- Leaderboard
- Notification
- API response/error helpers

Mock data lives in `src/mocks` and is used by current screens plus services.

Services live in `src/services`. They are the future FastAPI boundary and currently return `Promise.resolve(mockData)`. This keeps backend integration isolated from the UI.

## Team Builder Logic

`src/hooks/useTeamBuilder.ts` owns Create Team selection rules:

- 11 maximum slots
- exactly 11 slots required to submit
- 1 quantity equals 1 slot
- BUY and SELL are separate fantasy prediction actions
- same company can be added as separate BUY and SELL items
- item uniqueness is `companyId + action`
- total coin usage is derived from item coin value and quantity

Frontend validation is only for user experience. Backend validation remains the final authority.

## Common UI States

Basic production states are available for future async flows:

- Empty states for no events, companies, leaderboard rows, wallet transactions, notifications, and team search results
- Error state placeholder for future leaderboard/API failures
- Loading state component for future service-driven pages

These are intentionally lightweight and match the existing KR11 card style.

## Fantasy Disclaimer Usage

Use the shared `FantasyDisclaimer` wherever learning/fantasy context is needed.

Exact copy:

> KR11 is a fantasy prediction game for learning and entertainment only. This is not trading, investment advice, or a real-money platform.

## Future Backend Integration Plan

When FastAPI is ready:

1. Keep UI components presentational where possible.
2. Replace direct mock imports in route screens with service calls.
3. Add TanStack Query for server state once service contracts stabilize.
4. Keep UI state, such as popups and selected local controls, separate from server state.
5. Keep coin-only language in API-facing and UI-facing naming.

## Remaining Frontend TODOs

- Add auth store/protected routes once mock auth is formalized.
- Move more static screen data behind services when it is safe.
- Add loading and error state wiring to service-backed pages.
- Continue layout extraction into a mobile shell/header/bottom nav system.
- Add Vitest after the architecture stabilizes.
