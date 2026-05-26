Create a fresh mobile app wireframe for KR11.

KR11 is a coin-based stock fantasy prediction app. Users create teams using company stocks, predict Buy/Sell movement, select quantity, use coins, and compete on leaderboards.

Important rules:
- Use only Coins.
- Do not show rupees, ₹, cash, real-money winnings, withdrawal, bank, or payment language.
- This is not a trading app and not a real-money app.
- It is a stock fantasy prediction game.

Use KR11 Light Market Theme:
- Light background: #F4F7FB
- White cards: #FFFFFF
- Brand blue: #2563EB
- Coin gold: #F5A400
- Positive green: #14B86A
- Negative red: #E5484D
- Text dark: #101828
- Muted text: #667085
- Border: #E5E7EB

Design style:
Clean, premium, light UI, fantasy-sports + stock-market inspired, rounded cards, soft shadows, beginner-friendly, production-ready wireframe.

Create these screens and connect them with prototype arrows:

1. Login Screen
2. OTP Verification Screen
3. Home Screen
4. Know Your Company screen from Home
5. Company Summary Modal
6. Create Team Popup
7. Create Team / Add Company Screen
8. Buy/Sell Bottom Sheet
9. Compact Know Your Company summary inside Add Company flow
10. Company Chart Screen
11. Leaderboard Screen
12. Side Navigation Panel / Drawer
13. Coin Wallet Popup
14. Notifications / Offers & Rewards Popup
15. Empty States
16. Loading States

LOGIN SCREEN:
Create a fresh KR11 login/sign-up screen.
Do not copy any previous login image exactly. Use only light inspiration from fantasy sports.

Include:
- KR11 logo
- Headline: “Create your stock team”
- Subheadline: “Compete for coin rewards”
- Supporting text: “Build teams, predict market moves, and climb the leaderboard.”
- Trust badges:
  1. 100% Secure
  2. Smart Fantasy Picks
  3. Daily Coin Rewards
- White rounded login card
- Title: “Welcome back!”
- Subtitle: “Login or sign up to continue”
- Mobile input with +91 country selector
- Placeholder: “Enter your mobile number”
- CTA: “Continue”
- Divider: “OR”
- Social buttons:
  “Continue with Google”
  “Continue with Apple”
- Privacy note:
  “We value your privacy. Your data is safe with us.”
- Footer:
  “By continuing, you agree to our Terms & Conditions and Privacy Policy.”

OTP SCREEN:
Include:
- Header: “Verify OTP”
- Subtitle: “Enter the OTP sent to your mobile number”
- OTP input boxes
- Resend OTP
- CTA: “Verify & Continue”
- Back/edit mobile number option
After OTP success, navigate to Home.

HOME SCREEN:
Include:
- Header with profile icon, KR11 logo, notification icon, coin wallet icon
- Promotional hero banner
- KYC card
- Know Your Company card
- Event cards section
- Bottom navigation

KYC copy:
“Your KR11 account is active.”
“Complete your KYC to play, win coin rewards, and more.”
CTA: “Complete KYC”

Know Your Company card:
Title: “Know Your Company”
Subtitle: “Search and learn about companies before creating your team.”
CTA: “Explore Companies”
On tap, open Know Your Company screen.

Event cards:
Show these event cards:
- Test Match
- One Day
- T20
- Super Over
- Bowl Out

Each card should include:
- Event image placeholder
- Event title
- Duration/timing
- Reward summary
- Player count
- Play button

Bottom navigation:
- Home
- Leaderboard
- Challenges

KNOW YOUR COMPANY SCREEN FROM HOME:
Create a full screen for exploring companies.

Include:
- Back arrow
- Title: “Know Your Company”
- Search bar: “Search company”
- Filter chips:
  All, Banking, Auto, Energy, Food Tech, IT, FMCG
- Company list cards

Each company card should show:
- Company logo placeholder
- Company name
- Sector badge
- Current company value in Coins
- Short one-line summary
- Movement indicator green/red
- CTA: “View Summary”

Example cards:
RELIANCE
Energy • Telecom
2431 Coins
“Large diversified company across energy, telecom, retail, and digital services.”
+0.76%

TATA MOTORS
Automobile
740 Coins
“Automobile company focused on passenger vehicles, EVs, and commercial vehicles.”
-0.55%

ZOMATO
Food Tech
186 Coins
“Food delivery and quick commerce platform with high growth potential.”
+1.25%

COMPANY SUMMARY MODAL:
When tapping a company from Know Your Company, open a modal.

Include:
- Company logo
- Company name
- Sector badge
- Current value in Coins
- Movement indicator
- Company summary
- Risk level
- Key factors
- Recent trend
- Disclaimer:
  “This information is for learning only and is not financial advice.”
- Buttons:
  Close
  View Chart

CREATE TEAM POPUP:
When user taps Play on any event card, open a dynamic Create Team popup.

Include:
- Selected event chip
- “Hello, Lockie”
- Dynamic event message
- Helper text:
  “Build your team with 11 total players. Quantity decides player count.”
- CTA: “Create Team”
- Optional close icon

Event popup examples:
Test Match: “Create your team to join the Test Match.”
One Day: “Create your team to join the One Day challenge.”
T20: “Create your team to join the T20 session.”
Super Over: “Create your team to compete for the Top 3 rewards. Results will be announced at EOD.”
Bowl Out: “Create your team to join Bowl Out. The worst 3 performers win coin rewards. Results will be announced at EOD.”

CREATE TEAM / ADD COMPANY SCREEN:
Include:
- Back button
- Title: “Create Team”
- Coin wallet icon
- Selected event chip
- Search company field
- Team counter card
- Company list

Team counter:
“Team 0 / 11”
“11 player slots left”
Progress bar
Helper text: “Each quantity counts as 1 player.”

Quantity/player rule:
- Quantity directly affects player count.
- 1 quantity = 1 player count.
- A complete team requires 11 total players.
- Team count = total quantity selected across all companies.
- Quantity also affects coins required.
- Coins Required = Company Value × Quantity

Examples:
RELIANCE quantity 5 = 5 players
ZOMATO quantity 2 = 2 players
TATA MOTORS quantity 1 = 1 player
Together = Team 8 / 11

Company cards should include:
- Company logo placeholder
- Company name
- Company value in Coins
- Value change
- Percentage change
- Sector badge
- Plus button

BUY/SELL BOTTOM SHEET:
When user taps + on a company, open Buy/Sell bottom sheet.

Include:
- Company logo
- Company name
- Current company value in Coins
- Value movement
- Explanation:
  “Buy if you think the company value will go up.”
  “Sell if you think the company value will go down.”
- Quantity selector
- Player count based on quantity
- Coins required
- Buy button
- Sell button
- Know Your Company button
- View Chart button

Example:
Quantity
[-] 5 [+]

Player Count
5 Players

Coins Required
12,155 Coins

Buttons:
Buy
Sell
Know Your Company
View Chart

Validation messages:
- “Please enter a valid quantity.”
- “You only have X player slots left.”
- “You do not have enough coins.”
- “You can create a team with only 11 players.”
- “This company is already added. Edit quantity instead.”
- “This event is closed.”

COMPACT KNOW YOUR COMPANY FROM ADD COMPANY FLOW:
Inside Buy/Sell bottom sheet, the Know Your Company button should show a compact summary for the selected company only.

Do not open the full company list here.

Compact summary includes:
- Company intro
- Sector
- Risk level
- Key factors
- Disclaimer:
  “This information is for learning only and is not financial advice.”
- Buttons:
  Back to Buy/Sell
  View Chart

COMPANY CHART SCREEN:
When tapping View Chart, open Company Chart screen.

Include:
- Back arrow
- Company logo
- Company name
- Current company value in Coins
- Movement indicator
- Chart card
- Time filters:
  1D, 5D, 1M, 6M, 1Y
- Performance breakdown cards:
  Today’s movement
  5-day trend
  Volatility
  Momentum
  Risk level
- Button:
  Back to Team

Do not show rupee prices. Use Coins only.

LEADERBOARD SCREEN:
Create a premium leaderboard.

Accessible from:
- Bottom nav Leaderboard tab
- Side nav Leaderboard
- Submit confirmation
- Live event tracking

Include:
- Header: “Leaderboard”
- Event selector chips:
  Test Match, One Day, T20, Super Over, Bowl Out
- Event status badge:
  Live, Results Pending, Final Results
- Top 3 podium section
- Full ranking list

Leaderboard row:
- Rank
- Avatar
- User name
- Score/points
- Coins won or reward status
- Rank movement indicator

For normal events:
“Highest performers win coin rewards.”

For Super Over:
“Top 3 win coin rewards.”
If market is open: “Results announced at EOD.”

For Bowl Out:
“Bottom 3 win coin rewards.”
If market is open: “Results announced at EOD.”

Create 3 states:
1. Live leaderboard — “Live ranking in progress”
2. Results pending — “Results will be announced after market close.”
3. Final results — show winners and coins won

SIDE NAVIGATION PANEL:
Open when profile icon is tapped.

Include:
- User avatar
- “Hello, Lockie”
- “KR11 account active”
- Coin balance card:
  “Coin Balance”
  “100 Coins”
  CTA: “Add Coins”

Menu items:
- Home
- Know Your Company
- My Teams
- Leaderboard
- Challenges
- Coin Wallet
- Coin History
- Refer and Earn
- Edit Profile
- Complete KYC
- How to Play
- Settings
- Help Center
- FAQs
- About Us
- Logout

Navigation:
- Know Your Company → Know Your Company screen
- Leaderboard → Leaderboard screen
- Coin Wallet → Coin Wallet popup
- Complete KYC → KYC placeholder
- My Teams → My Teams placeholder
- Logout → Login screen

COIN WALLET POPUP:
Include:
- Title: “Coin Balance”
- Balance: “100 Coins”
- Button: “Add Coins”
- Button: “Coin History”

Do not show cash, rupees, withdraw, bank, or payment records.

NOTIFICATIONS / OFFERS & REWARDS:
Create notification popup.

Include:
- Title: “Offers & Rewards”
- Notification cards with icon, title, description, time, unread state

Example notifications:
- “Bonus Coins Unlocked”
- “You received 50 bonus coins.”
- “Results announced”
- “Your Super Over result is ready.”

Do not use cashback, discount, cash offer, or money reward language.

TEAM EDITING RULE AFTER EVENT STARTS:
Add this as microcopy/info state in relevant screens:
- “3 changes allowed after the event starts.”
- “3 changes left.”
- “Once a company is replaced, it cannot be selected again.”

Validation:
“You already used this company earlier in this event. Re-selection is not allowed.”

EMPTY STATES:
Create empty states for:
- No companies found
- No leaderboard yet
- Results not announced yet
- No submitted teams
- No notifications

LOADING STATES:
Create loading states for:
- Loading companies
- Loading chart
- Loading leaderboard
- Submitting team

PROTOTYPE CONNECTIONS:
Connect with arrows and labels:
Login → OTP → Home
Home profile icon → Side Navigation
Home Know Your Company → Know Your Company → Company Summary → View Chart
Home Play → Create Team Popup → Create Team
Create Team + → Buy/Sell Bottom Sheet
Buy/Sell Know Your Company → Compact Company Summary
Buy/Sell View Chart → Company Chart
Bottom Nav Leaderboard → Leaderboard
Side Nav Leaderboard → Leaderboard
Side Nav Logout → Login

Final output:
Generate a connected mobile app wireframe system for KR11 with all screens, components, states, and interactions. Keep it wireframe-first but structured enough for UI design and development.