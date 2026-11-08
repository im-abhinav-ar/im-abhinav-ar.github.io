# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.


### 2. Install Dependencies
Install all the required packages (React, Framer Motion, Tailwind, OGL, etc.):
\`\`\`bash
npm install
\`\`\`
*(Note: If you run into any peer-dependency conflicts with React versions during install, you can safely run `npm install --legacy-peer-deps` instead).*

### 3. Start the Development Server
Fire up the local Vite server:
\`\`\`bash
npm run dev
\`\`\`
Your portfolio will now be running live at `http://localhost:5173`.

---

## 🛠️ Building for Production

When you are ready to deploy (or if you want to test the final compiled build), run:
\`\`\`bash
npm run build
\`\`\`
This will optimize all assets, compress the 3D scripts, and generate a highly performant `dist` folder ready for hosting on Vercel, Netlify, or any static host.
