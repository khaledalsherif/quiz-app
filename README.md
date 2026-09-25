# 📝 Interactive Quiz Application

A responsive, dynamic Quiz Application built with **React**, **Tailwind CSS**, and **JSONBin** for remote state/data management. It features dynamic questions, instant scoring, automated feedback, and seamlessly supports both offline development and cloud deployment.

🚀 **Live Demo:** [View Live App on Vercel](https://quiz-app-khaled-dev.vercel.app/)

---

## ✨ Features

- **Dynamic State Management:** Powered by React's `useReducer` hook for clean, predictable state handling.
- **Responsive UI:** Fully responsive design built with Tailwind CSS, supporting mobile, tablet, and desktop views.
- **Dual API Integration:** Automatically switches between a local `json-server` for offline development and `JSONBin.io` for cloud deployment via Environment Variables.
- **Automated Scoring System:** Real-time feedback and dynamic score calculation with restart capabilities.

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite), Tailwind CSS
- **State Management:** `useReducer` Hook
- **Data Hosting (Production):** [JSONBin.io](https://jsonbin.io/) (Private Bin with `X-Access-Key` authentication)
- **Local Server (Development):** `json-server`
- **Deployment:** Vercel

---

## 🚀 Getting Started (Local Setup)

Follow these steps to get a local copy up and running on your machine:

### 1. Prerequisites

Make sure you have Node.js installed:

```bash
node -v
```

### 2. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/khaledalsherif/quiz-app.git
cd quiz-app
npm install

```

### 3. Running the App Locally

The application is configured to run smoothly with a local JSON server out of the box without requiring any API keys.

#### Step 1: Start the Local JSON Server

Run `json-server` on port `4000` (pointing to your `data/questions.json` file):

```bash
npm run server
```

#### Step 2: Start the React Development Server

In a new terminal window, run:

```bash
npm run dev
```

> **Note:** The server will host the data at `http://localhost:4000/data`.

---

## ⚙️ Environment Variables Setup

The project uses Environment Variables to handle API endpoints securely.

### Local Environment (`.env`)

Create a `.env` file in the root directory (this file is ignored by Git for security):

```env
VITE_JSON_API=
VITE_JSON_API_KEY=
```
