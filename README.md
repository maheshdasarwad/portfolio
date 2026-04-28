# 🌐 Portfolio Website

A modern and responsive **portfolio website** built using **React (Vite) + Tailwind CSS** to showcase projects, skills, and experience.

---

## 🚀 Features

* ✨ Modern UI with clean design
* 📱 Fully responsive (mobile + desktop)
* 🎯 Organized sections (Projects, Education, Skills, etc.)
* 📩 Contact form with email integration (via Web3Forms)
* ⚡ Fast performance using Vite

---

## 📁 Folder Structure

```bash
├── public/                 # Static assets (favicon, images)

├── src/
│   ├── assets/             # Images, icons, media files
│   │
│   ├── components/         # Reusable UI components
│   │   ├── ContactFooter.tsx
│   │   └── Sidebar.tsx
│   │
│   ├── sections/           # Page sections
│   │   ├── Certifications.tsx
│   │   ├── Overview.tsx
│   │   ├── Education.tsx
│   │   └── Projects.tsx
│   │
│   ├── data/               # Static data (edit your content here)
│   │   └── portfolioData.ts
│   │
│   ├── App.tsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles

├── .env                    # Environment variables
├── vite-env.d.ts           # Type definitions for env variables
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint configuration
├── package.json
├── package-lock.json
└── README.md
```

---

## 📝 Customization

All your portfolio content is managed from:

```
src/data/portfolioData.ts
```

👉 Edit this file to update:

* Personal details
* Projects
* Skills
* Social links

---

## 📩 Contact Form Setup

This project uses **Web3Forms** to send messages directly to your email (no backend required).

### ⚙️ Steps

1. Create an account:
   https://web3forms.com/

2. Get your **Access Key**

3. Create a `.env` file in root:

```
VITE_WEB3FORMS_ACCESS_KEY=YOUR_ACCESS_KEY
```

4. Restart your dev server

---

## 🛠 Installation & Setup

```bash
# Install dependencies
npm install

# Install icons (if needed)
npm install lucide-react

# Run development server
npm run dev
```

---



## 📌 Tech Stack

* React (Vite)
* Tailwind CSS
* Web3Forms (Contact Form)
* Lucide React Icons

---



## 👨‍💻 Author

**Mahesh Dasarwad**

---

⭐ If you like this project, give it a star!
