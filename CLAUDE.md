# CLAUDE.md – Project TODOs

## Frontend (Vite + React + TailwindCSS)
- [ ] Initialize Vite project with React template.
- [ ] Install and configure TailwindCSS (postcss, autoprefixer).
- [ ] Set up basic folder structure: `src/components`, `src/pages`, `src/hooks`.
- [ ] Implement product catalog page (fetch food items from backend).
- [ ] Create shopping cart context/store and UI components.
- [ ] Build checkout flow with order submission API call.
- [ ] Add admin dashboard layout (protected route).
- [ ] Integrate authentication handling (login, token storage).

## Backend (FastAPI + Python)
- [ ] Scaffold FastAPI project (`app/main.py`, routers folder).
- [ ] Define Pydantic models for User, FoodItem, Order, OrderItem, DeliveryAssignment.
- [ ] Set up database connection (SQLAlchemy async) and migrations.
- [ ] Implement CRUD endpoints for food items and orders.
- [ ] Add authentication (OAuth2 password flow with JWT).
- [ ] Protect admin routes with role‑based dependency.
- [ ] Create endpoint for assigning delivery services to orders.
- [ ] Write OpenAPI docs and test with `uvicorn --reload`.

## Shared / DevOps
- [ ] Add Dockerfile for backend and Docker Compose to run both services locally.
- [ ] Configure CORS between frontend (localhost:5173) and backend (localhost:8000).
- [ ] Write basic unit tests for key API routes.
- [ ] Set up CI workflow (e.g., GitHub Actions) to lint, test, and build.
