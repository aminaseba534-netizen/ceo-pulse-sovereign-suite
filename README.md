# CEO-PULSE Sovereign Suite

Secure executive dashboard with JWT authentication, role-based access control, approval workflow, audit trail, and production-ready deployment setup.

## Stack
- Frontend: React + TypeScript + Vite + Tailwind
- Backend: NestJS + Prisma + PostgreSQL
- Auth: JWT
- Deployment: Vercel + Railway
- Container support: Docker + Docker Compose

## Features
- Secure login and session management
- Role-based access: ADMIN, MANAGER, OPERATOR, USER
- Executive dashboard with KPIs and operational insight cards
- Approval and sign-off workflow
- Audit trail for administrative actions
- Production-ready environment configuration
- Swagger API docs

## Local development

### Prerequisites
- Node.js 18+
- PostgreSQL running locally
- npm

### 1) Start PostgreSQL
Create a database named `ceo_pulse`:

```bash
createdb ceo_pulse
```

Or with psql:

```sql
CREATE DATABASE ceo_pulse;
```

### 2) Start the backend

```bash
cd backend
npm install
cp .env.example .env
npx prisma generate
npx prisma db push
npx prisma db seed
npm run dev
```

### 3) Start the frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

The frontend will run on:
- http://localhost:3000

The backend API will run on:
- http://localhost:4000

Swagger docs:
- http://localhost:4000/api/docs

## Default admin account
- Email: ceo@pulse.secure
- Password: admin123

## Production environment variables

### Backend
```env
DATABASE_URL="postgresql://postgres:password@host:5432/railway"
JWT_SECRET="replace_with_a_long_random_secret"
PORT=4000
FRONTEND_URL="https://your-frontend.vercel.app"
```

### Frontend
```env
VITE_API_URL="https://your-backend.up.railway.app"
```

## Production deployment

### Backend on Railway
1. Create a new Railway project.
2. Add a PostgreSQL database.
3. Connect this repository and set the root directory to `backend`.
4. Add environment variables:
   - DATABASE_URL
   - JWT_SECRET
   - FRONTEND_URL
   - PORT
5. Use build command:

```bash
npm install && npx prisma generate && npx prisma db push
```

6. Use start command:

```bash
npm run start
```

### Frontend on Vercel
1. Import the project into Vercel.
2. Set the project root to `frontend`.
3. Add environment variable:
   - VITE_API_URL=https://your-backend.up.railway.app
4. Deploy.

## Docker

### Build
```bash
docker build -t ceo-pulse .
```

### Run
```bash
docker run -p 3000:3000 ceo-pulse
```

### Docker Compose
```bash
docker compose up --build
```

## Security notes
- Never commit real secrets.
- Keep JWT secret in environment variables.
- Restrict CORS to trusted frontend domains in production.
- Use HTTPS in production.
- Do not expose internal database credentials.

## Roadmap
- Refresh token support
- Session revocation
- Admin user creation UI
- Advanced reporting and exports
- SSO / enterprise identity integration

## License
This project is for internal and demo deployment use unless otherwise specified.
