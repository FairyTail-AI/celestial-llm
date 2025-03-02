# Frontend Setup Guide

This guide will help you set up the frontend development environment.

## Installation Steps

1. **Copy environment variables**  
   ```bash
   cp .env web/.env
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Start the development server**  
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:8502` (or another port depending on the configuration).

---

## Troubleshooting

- If the frontend fails to start, ensure that Node.js and npm are installed correctly.
- Verify that the `.env` file contains the correct API endpoint configurations.
- If you encounter dependency issues, try running:
  ```bash
  rm -rf node_modules package-lock.json && npm install
  ```

For frontend setup and launch, refer to `server/SETUP.md`. 
