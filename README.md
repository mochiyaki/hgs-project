# hgs-project

## Overview
A Food Ordering E‑Commerce application built with a **Vite + React + TailwindCSS** frontend and a **FastAPI** backend.

---
### Architecture diagram
```
+----------------------+      +---------------------+
|   Frontend (React)   | ---> |    Backend API      |
|  Vite dev server     |      | FastAPI (Python)    |
|  TailwindCSS UI      |      | - CRUD endpoints    |
|  TypeScript          |      | - Auth (JWT/OAuth2) |
+----------------------+      +---------------------+
        ^                               ^
        |                               |
      Browser (http://localhost:5173)   |
        |                               |
        +----------- HTTP API ----------+
```
---
## Project structure
```
hgs-project/
├─ CLAUDE.md            # task list for Claude Code
├─ README.md            # this file
├─ frontend/            # Vite + React app
│  ├─ src/
│  │  ├─ components/    # UI components (Header, etc.)
│  │  ├─ pages/         # Page components (HomePage, …)
│  │  ├─ hooks/         # custom React hooks
│  │  ├─ App.tsx        # router entry point
│  │  └─ main.jsx       # bootstrap file
│  ├─ index.html
│  ├─ tailwind.config.js
│  └─ tsconfig.json    # TypeScript config
├─ backend/             # FastAPI service (to be added)
│  └─ app/
│     ├─ main.py        # FastAPI entry point
│     ├─ routers/       # API routers
│     └─ models/        # Pydantic models
└─ docker-compose.yml   # compose both services locally
```
---
## TODOs (high‑level)
- **Frontend**: product catalog, shopping cart, checkout flow, admin dashboard, authentication.
- **Backend**: FastAPI scaffolding, database models, CRUD endpoints, JWT auth, admin routes.
- **DevOps**: Dockerfile & Compose, CORS config, unit tests, CI workflow.

---
*Generated with Claude Code.*