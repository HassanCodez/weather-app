# 🌦️ weather-app — Smart Weather App

weather-app is a smart, fast, and modern weather web app built with Next.js. It auto-detects your location using your IP address, fetches real-time weather data, provides a powerful fuzzy search experience for millions of cities, and lets you manage your favorite locations — all with a simple designed interface.

## 🔗 Live Demo

[Live URL here](https://weather-app-delta-peach-29.vercel.app)

---

## 🚀 Features

- 📍 **Auto Location Detection** via [ipinfo.io](https://ipinfo.io)
- 🌤️ **Current Weather** from [OpenWeatherMap](https://openweathermap.org/)
- 🔍 **Fuzzy City Search** using `fuse.js` on a 2M+ city dataset
- ⚡ **Fast Results** with service worker & top 5 match prefetching
- 🗂️ **Weather Detail Drawer/Dialog** with real-time weather info
- ❤️ **Favorites Management** with local persistence
- 💾 **Offline Support & Persistent State** via Zustand & localStorage
- ⚙️ **Global State & Data Fetching** using Zustand + React Query
- 🎨 **Beautiful UI** with Tailwind CSS + [shadcn/ui](https://ui.shadcn.com)
- 🧱 **Modular & Scalable Architecture**

---

## 🛠️ Tech Stack

| Category         | Tech                     |
| ---------------- | ------------------------ |
| Framework        | Next.js (App Router)     |
| Styling          | Tailwind CSS, shadcn/ui  |
| State Management | Zustand + persist plugin |
| Data Fetching    | React Query              |
| Search           | Fuse.js                  |
| Location         | ipinfo.io API            |
| Weather Data     | OpenWeatherMap API       |
| Offline Caching  | Service Workers          |

---

## 🧩 Project Structure

\`\`\`
/app # Next.js app directory (pages, layout)
/components # Reusable UI components
/config # API keys and global config
/hooks # Custom React hooks
/lib # Utilities and helpers
/providers # Context and global providers
/stores # Zustand stores
/types # TypeScript types and interfaces
/utils # Shared utility functions
/workers # Service worker setup and logic
/public # Static assets
\`\`\`

---

## ⚙️ Getting Started

### 1. Clone the Repo

\`\`\`bash
git clone https://github.com/HassanCodez/weather-app.git
cd weather-app
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install

# or

yarn
\`\`\`

### 3. Create \`.env.local\`

\`\`\`env
NEXT_PUBLIC_WEATHER_KEY = e199faa3c79f1ee312e081e45971d27d
NEXT_PUBLIC_IPINFO_TOKEN = c2ec4d3c9c6693
NEXT_PUBLIC_SECRET_KEY = BitSecret
\`\`\`

### 4. Run the App

\`\`\`bash
npm run dev
\`\`\`

---

## 📦 Available Scripts

\`\`\`bash
npm run dev # Start development server
npm run build # Build the application
npm run start # Start production server
npm run lint # Run ESLint
\`\`\`

---

## 🧠 Architecture Highlights

- **Zustand with Persist**: Keeps user data (favorites, etc.) safe even after page reloads or closing the tab.
- **React Query**: Efficiently fetches and caches weather data for current and searched cities.
- **Service Worker**: Enhances search performance by prefetching top 5 matched cities and enabling faster weather lookups.
- **Fuse.js Search**: Enables lightning-fast fuzzy matching across a massive city dataset (>2 million entries).
- **UI Design**: Clean, responsive, and fully customizable with Tailwind and Shadcn UI components.

---

## 🔐 Data Encryption

To enhance user data privacy, all favorite cities and user preferences stored in `localStorage` are **encrypted** using [CryptoJS AES](https://www.npmjs.com/package/crypto-js). This ensures sensitive information is secure even in client-side storage.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙋‍♂️ Contributing

Feel free to open issues or pull requests to improve the project!

---

## 💬 Contact

Created by [Hassan](https://github.com/HassanCodez) — feel free to reach out for feedback or collaboration.
