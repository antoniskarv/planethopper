# 🪐 Planet Hopper

A small Vue 3 demo app built for planet hopper.  
Browse star wars planets, pick up to 5 for your “planetary route” and restart the demo any time.

🎥 **Live demo video:**  
[https://www.loom.com/share/598c9532a9cf44c596c69a2ab14db684](https://www.loom.com/share/598c9532a9cf44c596c69a2ab14db684)

---

## 🚀 Tech Stack

- **Vue 3.5 + Vite 6**
- **TypeScript**
- **SCSS modules** (component scoped styles + global variables/mixins)
- **Vitest 3 + Testing Library Vue**
- **Font Awesome** for icons
- **SWAPI** (Star wars API) for data fetching

---

## 🧰 Setup & Scripts

### 1. Install dependencies

```bash
npm install
npm run dev
```

### 2. Run the dev server

```bash
npm run dev
```

---

### 🧪 Testing

Unit tests with Vitest (jsdom environment)
DOM interactions via @testing-library/vue

```bash
npm run test
```

---

### 🧱 Features

- Fetches planet data from SWAPI
- Infinite scroll / “Load more” functionality
- Select up to 5 planets for your trip
- Responsive layout
- Random background image per planet (cached locally for each session)
