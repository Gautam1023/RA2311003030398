# 🔔 Notification App

## 📌 Overview
This is a full-stack Notification Application built using **React (Frontend)** and **Node.js + Express (Backend)**.

The app fetches notifications from an external API, applies sorting & filtering, and displays them in a clean UI.

---

## ⚙️ Features
- 📥 Fetch notifications from API
- 🔃 Priority-based sorting (Placement > Event > Result)
- 🔍 Filter by type:
  - All
  - Event
  - Result
  - Placement
- 📄 Pagination (Next / Prev)
- 📊 Logging API integration
- 🎨 Clean and responsive UI

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- CSS

### Backend
- Node.js
- Express.js
- Axios

---

## 📂 Project Structure
RA2311003030398/
│
├── notification_app_fe # React Frontend
├── notification_app_be # Node Backend

---

## ⚡ Setup Instructions

### 🔹 1. Clone the Repository
git clone https://github.com/Gautam1023/RA2311003030398.git

cd RA2311003030398

---

### 🔹 2. Backend Setup
cd notification_app_be
npm install
node server.js

👉 Runs on: `http://localhost:5000`

---

### 🔹 3. Frontend Setup
cd notification_app_fe
npm install
npm start

👉 Runs on: `http://localhost:3000`

---

## 🔑 Environment Variables (IMPORTANT)

Create `.env` files:

### Backend (.env)
TOKEN=your_generated_token_here


### Frontend (.env)

REACT_APP_TOKEN=your_generated_token_here

## ⚠️ Notes
- Token expires → regenerate if needed
- Backend is used to avoid CORS issues
- Do NOT expose tokens in public repos

---

## 👨‍💻 Author

**Gautam Sikka**  
RA2311003030398

---

## ⭐ Status
✅ Completed  
🚀 Ready for submission
