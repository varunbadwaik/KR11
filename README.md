# KR11 — Premium Fantasy Stock Predictions

A mobile-first fantasy stock prediction application built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

> ⚠️ **Important**: KR11 is a coin-based fantasy prediction game for learning and entertainment only. This application complies strictly with the restricted language policy and does NOT contain any real-money transaction, trading, brokerage, or withdrawal features.

---

## 📱 Screens Completed & Overhauled

### Mandatory Screens (5/5) ✅
| Route | Screen | Status | Enhancements Made |
|-------|--------|--------|-------------------|
| `/login` | **Login Screen** | ✅ Complete | Updated with custom inputs, premium brand drop shadows, and responsive login button styles. |
| `/otp` | **OTP Screen** | ✅ Complete | Custom 6-digit styled OTP boxes with auto-navigation and resend actions. |
| `/home` | **Home Dashboard** | ✅ Complete | Upgraded KYC cards, event cards, side navigation panel, and welcome banner using the custom soft-blue drop shadow system and hover-displacement lift animations. Reduced extra spaces near the footer and Lisa section. |
| `/events/:eventId/create-team` | **Create Team Screen** | ✅ Complete | Overhauled to feature a **unified, full-bleed stadium background image** (`stadium_background-BrdhGB9h.png`), a **curved SVG pitch markings overlay** with custom arched boundaries, circular player cards, interactive empty slots (`+`), and an enlarged **KR11 logo** (`w-[145px]`) with scaled wide subtitle. Row 1 (Attackers) is positioned elegantly above the pitch. A persistent **3-column stats bar footer** displays slots and credit balance cleanly. |
| `/leaderboard` | **Leaderboard Screen** | ✅ Complete | Overhauled 1:1 circular podium with gold, silver, and bronze trophies, movement trend indicators, and humanized player cards using premium drop shadows. |

---

## ⚡ Toast Notification Optimization

To keep the game interface clean and avoid blocking crucial player cards or actions:
- **Fast Auto-Dismiss**: Toast notifications now dismiss in a swift **1.5 seconds** (`duration={1500}`) instead of lingering on the screen.
- **Single Active Toast Limit**: The system is capped to exactly **1 visible toast** (`visibleToasts={1}`). Tapping multiple actions in quick succession will instantly replace the active toast rather than stacking them up vertically.

---

## 🛠️ Run & Build Instructions

Follow these simple commands to run or package the application locally:

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
*The dev server will boot instantly, and you can test it on mobile viewports.*

### 3. Compile Production Bundle
```bash
npm run build
```
*Compiles, minifies, and packages the code into `dist/` with zero TypeScript warnings or errors in less than 10 seconds.*

---

## 📁 Architecture Overview

```
src/
├── app/
│   ├── components/        # Fully responsive, Figma-aligned screen components
│   ├── utils/             # Company lookup and formatting utilities
│   ├── App.tsx            # Root application layout mounting the MobileShell and optimized Toaster
│   ├── router.tsx         # Route mappings (React Router v7)
│   └── providers.tsx      # Application providers setup
├── components/common/     # Highly reusable UI components
│   ├── MobileShell.tsx    # Mobile-first responsive wrapper (max-width 480px, centered layout)
│   ├── AppHeader.tsx      # Sticky glassmorphic header with premium depth
│   ├── BottomNav.tsx      # Floating glass-capsule bottom navigation with brand drop shadow
│   ├── CoinBadge.tsx      # Top coin balance badge
│   ├── EmptyState.tsx     # Empty state card fallback
│   ├── ErrorState.tsx     # Error state card fallback
│   ├── LoadingState.tsx   # Loading spinner fallback
│   └── FantasyDisclaimer.tsx  # Compliant game rules disclaimer
├── hooks/
│   └── useTeamBuilder.ts  # State management for 11-slot team building validation
├── mocks/                 # Simulated company and leaderboard mock data
├── services/              # LocalStorage and Mock-backed API service layers
├── types/                 # Solid TypeScript schemas
└── styles/                # Tailwind v4 globals, custom themes, and Google Font loads
```

---

## 💡 Key Design Assumptions & Integrations

1. **High-Resolution Brand Assets**: The default vector outline SVGs for company logos were replaced with high-resolution image files (`reliance.jpg`, `tata.jpg`, `swiggy.png`, `zomato_logo.png`, `ioc.png`) dynamically resolved inside `CreateTeamScreen.tsx` and `BuySellSheet.tsx` to mirror high-fidelity mockups.
2. **Brand-Tinted Drop Shadows**: Added custom premium drop shadow utilities (`shadow-premium-sm` to `shadow-premium-xl`) derived from the core dark blue brand color (`#180F69`) rather than flat greys, bringing the UI elements to life with outstanding depth.
3. **No Rupees/Real-Money Language**: Kept all game mechanics centered around "Coins" and "Predictions" to strictly maintain legal fantasy play status.
4. **Mocked Transitions**: The login accepts any valid 10-digit number, and the OTP verification screen accepts any 6 digits for simple local demonstration.

---

## ⚠️ Limitations & Future Milestones

1. **Auth Persistence**: The application currently resets to the login flow upon a hard browser refresh (designed for demo convenience).
2. **Leaderboard Data**: Leaderboard scores, podium rankings, and player card stats are currently fed from standard static mocks.
3. **Persistent Team Entries**: Submitted teams are checked for 11-slot validity and redirect the user back to `/home`, but are not written to a remote server.

---

## 🔒 Restricted Language Policy Compliance
- **Allowed Terms**: `Coins`, `coin rewards`, `coin balance`, `fantasy prediction`, `BUY prediction`, `SELL prediction`
- **Forbidden Terms**: `rupees`, `cash`, `money`, `withdrawal`, `deposit`, `trading profit`, `investment return`, `brokerage`
