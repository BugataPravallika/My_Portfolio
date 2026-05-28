# Pravallika Portfolio (Deployment Ready)

Full-stack portfolio configured for:
- Frontend: Vercel (`client`)
- Backend API: Render (`server`)
- Database: MongoDB Atlas

## Project Structure

```txt
Portfolio/
├── client/              # React + Vite frontend
│   ├── src/
│   ├── .env.example
│   └── vercel.json
├── server/              # Express + TypeScript backend
│   ├── src/
│   └── .env.example
├── render.yaml          # Render infrastructure config
├── package.json         # Monorepo helper scripts
└── README.md
```

## Environment Variables

### Frontend (`client/.env`)
```env
VITE_API_URL=https://your-backend-api.onrender.com
```

### Backend (`server/.env`)
```env
PORT=5000
NODE_ENV=production
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/portfolio?retryWrites=true&w=majority
CLIENT_URL=https://your-frontend.vercel.app
```

> `CLIENT_URL` can include multiple origins separated by commas.

## Local Development

```bash
npm run install:all
npm run dev:server
npm run dev:client
```

## Production Scripts

From root:

```bash
npm run build:all
npm run start:server
npm run preview:client
```

API health checks:

```bash
npm run check:api
```

## MongoDB Atlas Setup

1. Create a project and cluster in MongoDB Atlas.
2. Create a database user with a strong password.
3. In **Network Access**, allow Render outbound IPs or temporarily `0.0.0.0/0` for setup.
4. Copy the connection string and set it as `MONGODB_URI` in Render.
5. Verify with `GET /api/test-db` after deployment.

## Deploy Backend to Render

1. Push this repository to GitHub.
2. In Render, create a **Web Service** from the GitHub repo.
3. Set:
   - Root Directory: `server`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm run start`
   - Health Check Path: `/api/health`
4. Add environment variables:
   - `NODE_ENV=production`
   - `PORT=10000` (or leave Render default)
   - `MONGODB_URI=<atlas-uri>`
   - `CLIENT_URL=<your-vercel-url>`
5. Deploy and test:
   - `https://your-backend.onrender.com/api/health`
   - `https://your-backend.onrender.com/api/test-db`

## Deploy Frontend to Vercel

1. Import the same GitHub repo in Vercel.
2. Set **Root Directory** to `client`.
3. Framework preset: `Vite`.
4. Add environment variable:
   - `VITE_API_URL=https://your-backend.onrender.com`
5. Deploy and verify contact form submission.

## GitHub Auto Deployment

- Vercel and Render both support GitHub integration out of the box.
- Every push to your production branch triggers automatic deployment.
- Keep env vars configured in each platform dashboard.

## Security and Optimization Included

- Helmet security headers
- CORS origin allowlist via `CLIENT_URL`
- Rate limiting on contact endpoint
- Typed API responses and centralized error handling
- Vite production chunk splitting + minification
- Cache headers for static assets in Vercel
