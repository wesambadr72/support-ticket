# Support Ticket System

A React + TypeScript + Vite application for managing support tickets with internationalization (i18n), theming, and clean architecture.

## 🏗️ Architecture

```
src/
├── app/                    # Application bootstrap
│   ├── App.tsx            # Root component with providers
│   └── router.tsx         # Route definitions
├── components/            # Reusable UI components
│   ├── layout/            # Layout components
│   │   └── TicketToolbar.tsx  # Shared toolbar (theme/lang toggles)
│   ├── landing/           # Landing page sections
│   │   ├── HomeSection.tsx
│   │   ├── AboutSection.tsx
│   │   └── ButtonsSection.tsx
│   ├── LanguageToggle.tsx # Language switcher
│   ├── Nav.tsx            # Navigation anchor
│   └── ThemeToggle.tsx    # Dark/Light theme switcher
├── config/
│   └── i18n.ts            # i18next configuration
├── constants/
│   └── tickets.ts         # Ticket statuses & priorities (single source)
├── context/
│   ├── theme.ts           # Theme context & hook (SRP)
│   └── ThemeProvider.tsx  # Theme provider component
├── data/
│   └── tickets.ts         # In-memory mock data source
├── pages/                 # Route-level components
│   ├── HomePage.tsx       # Landing page
│   ├── TicketList.tsx     # List with filtering
│   ├── TicketCreate.tsx   # Create new ticket
│   ├── TicketEdit.tsx     # Edit existing ticket
│   └── TicketView.tsx     # View ticket details
├── services/
│   └── ticket.service.ts  # CRUD operations (Repository pattern)
├── types/
│   └── ticket.ts          # TypeScript interfaces
├── utils/
│   └── ticket.ts          # Color/label mappings for tickets
├── index.css              # Global styles + Tailwind + CSS variables
└── main.tsx               # Entry point
```

## ✨ Features

| Feature | Implementation |
|---------|----------------|
| **Ticket CRUD** | Create, Read, Update, Delete via `ticketService` |
| **Status Filtering** | Filter tickets by Open / In Progress / Closed |
| **Priority Tags** | Visual priority indicators (High/Medium/Low) |
| **Internationalization** | English & Arabic via `i18next` (namespace: `tickets`) |
| **Theming** | Dark/Light mode with `ConfigProvider` design tokens |
| **Responsive Layout** | Tailwind CSS + Ant Design components |
| **Type Safety** | Strict TypeScript with centralized types |

## 🛠️ Tech Stack

- **React 19** + **TypeScript 6**
- **Vite 8** for dev/build
- **Ant Design 6** for UI components
- **React Router 7** for routing
- **i18next** + `react-i18next` for translations
- **Tailwind CSS 4** for utility styling
- **ESLint** + **TypeScript ESLint** for linting

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm / pnpm / yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Lint
```bash
npm run lint
```

### Preview Production Build
```bash
npm run preview
```

## 🌐 Internationalization

Translation files live in `public/locales/`:
```
public/locales/
├── en/
│   └── tickets.json
└── ar/
    └── tickets.json
```

Add new languages:
1. Create folder under `public/locales/<lang>/`
2. Add `tickets.json` with translations
3. Add language code to `supportedLngs` in `src/config/i18n.ts`

## 🎨 Theming

The app uses **Ant Design Design Tokens** via `ConfigProvider` in `src/app/App.tsx`. CSS variables in `src/index.css` define the color palette for both light/dark modes.

To customize colors, edit the `--color-*` variables in `src/index.css` under:
- `:root` / `html` (dark defaults)
- `html[data-theme="light"]` (light overrides)

## 📦 Adding a New Ticket Field

1. **Type**: Update `src/types/ticket.ts`
2. **Constants**: Add to `src/constants/tickets.ts` if enum-like
3. **Utils**: Add label/color mapping in `src/utils/ticket.ts`
4. **Service**: Update `ticketService` CRUD methods
5. **Forms**: Modify `TicketCreate.tsx` / `TicketEdit.tsx`
6. **Table**: Add column in `TicketList.tsx`
7. **View**: Display in `TicketView.tsx`

## 🧪 Code Quality

- **ESLint** with React/TypeScript recommended rules
- **Strict TypeScript** (`noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax`)
- **Single Responsibility**: Each file has one clear purpose
- **Repository Pattern**: Data access isolated in `ticket.service.ts`

## 📄 License

MIT