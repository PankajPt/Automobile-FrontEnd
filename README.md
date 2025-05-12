# 🚗 Automobile – Frontend

This is the **frontend** for the **Automobile** service booking application. It provides users a responsive interface to explore and book automobile services online. Built using **React.js**, styled with **Tailwind CSS**, and bundled using **Vite**, the application is fast, lightweight, and mobile-friendly.

---

## 🧰 Tech Stack

- **React.js** – JavaScript library for building user interfaces
- **Vite** – Blazing fast frontend tooling
- **Tailwind CSS** – Utility-first CSS framework for styling
- **Axios** – For communicating with the backend API

---

## ✨ Features

- Mobile-friendly and responsive UI
- Clean homepage with service introduction
- Online service booking form
- Integration with backend APIs
- Visual feedback for booking success/failure
- Environment-based API URL config

---

## 📦 Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/sp-automobile-frontend.git
cd sp-automobile-frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
```env
VITE_API_URL=http://localhost:5000
```
- Replace the URL with your backend server URL if it's deployed.

### 4. Run the development server
```bash
npm run dev
```

## 🗂️ Folder Structure

```
sp-automobile-frontend/
├── public/                  # Static assets
│   └── favicon.ico
├── src/
│   ├── components/          # Reusable UI components
│   │   └── BookingForm.jsx
│   ├── pages/               # Page-level components
│   │   └── Home.jsx
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Entry point
│   └── index.css            # Tailwind base styles
├── .env                     # Environment variables
├── index.html               # App root HTML
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS config
├── vite.config.js           # Vite configuration
└── package.json             # Project metadata and scripts
```

## 📥 Dependencies

```json
"dependencies": {
  "axios": "^1.6.7",
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}
```

## 📥 Dev Dependencies
```json
"devDependencies": {
  "autoprefixer": "^10.4.14",
  "postcss": "^8.4.21",
  "tailwindcss": "^3.3.2",
  "vite": "^4.4.9"
}
```

## 🔧 Customization
- To change backend API endpoint, modify the value in .env
- You can edit branding, text, and colors in the Tailwind styles (index.css) and Tailwind config
- New pages/components can be added inside the pages/ and components/ directories

## 🚀 Deployment

```bash
npm run build
```
