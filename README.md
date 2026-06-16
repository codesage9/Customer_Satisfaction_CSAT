# 📌 Customer Satisfaction (CSAT) Campaign Builder

A **React + Vite frontend application** to design and preview Customer Satisfaction (CSAT) feedback campaigns.  
It provides a clean interface for configuring survey content, rating options, thank‑you page, and styling — with a **real‑time mobile preview** that updates instantly.

---

## ✨ Features

- 📝 **Content Tab** → Configure survey title and subtitle  
- ⭐ **Rating Options** → Add/remove rating numbers, toggle comment box, customize rating colors  
- 🎉 **Thank You Page** → Customizable title, subtitle, and button text shown after submission  
- 🎨 **Styling Tab** → Background, text, and button colors, font size/weight, border radius, button dimensions  
- 📱 **Live Preview** → Real‑time preview of the survey popup in a compact mobile‑style layout  

---

## 🛠 Tech Stack

- **Frontend Framework:** React.js (with Vite)  
- **Languages:** JavaScript / JSX  
- **Styling:** CSS (inline styles, customizable via Styling Tab)  
- **Deployment:** Vercel (primary), compatible with Netlify, Render, Firebase Hosting  

---

## 🚀 Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/codesage9/Customer_Satisfaction_CSAT.git
cd Customer_Satisfaction_CSAT
```
### 2. Install dependencies
```bash
npm install
```
### 3. Run the development server
```bash
npm run dev
Open http://localhost:5173 (localhost in Bing) in your browser.
```
### 4. Build for production
```bash
npm run build
npm run preview
```
## 📂 Folder Structure
```bash
Customer_Satisfaction_CSAT/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable React components
│   │   ├── ContentTab.jsx
│   │   ├── RatingOptions.jsx
│   │   ├── ThankYouPage.jsx
│   │   ├── StylingTab.jsx
│   │   ├── Preview.jsx
│   │   └── SectionBox.jsx
│   ├── App.jsx          # Main app layout
│   └── main.jsx         # Entry point
├── package.json
└── README.md
```
## 🌐 Deployment Link
The app is deployed on Vercel:
👉 [Live Demo](https://customer-satisfaction-csat.vercel.app/)
For project details:  
👉 [Vercel Project Overview](https://vercel.com/durgeshsinghmainacc-6257s-projects/customer-satisfaction-csat)
```bash
https://customer-satisfaction-csat.vercel.app/
https://vercel.com/durgeshsinghmainacc-6257s-projects/customer-satisfaction-csat

```