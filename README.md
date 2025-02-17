<img width="472" alt="Image" src="https://github.com/user-attachments/assets/0bcd0a19-d3bb-48ae-a0a1-90010559f0ea" />

- Visit the website [Global Cities](https://react-vite-pjt.vercel.app/) ✈️

# Global Explorer

Global Explorer is a web app built with React, Vite, and TypeScript that allows users to search for global cities, discover nearby attractions, and learn about local holidays. The app provides users with a seamless way to explore destinations around the world and plan their trips efficiently.

## Features
- Attractions Finder: Discover popular attractions in selected cities to help plan your visit.
- Local Holidays: View the local holidays of each city, helping you time your visit or plan for festive experiences.
- Interactive UI: A sleek and user-friendly interface that provides an intuitive browsing experience.
  
## Tech Stack
- React: A JavaScript library for building user interfaces.
- Vite: A fast build tool for modern web projects.
- TypeScript: A superset of JavaScript that adds static typing for better maintainability.
- API Integration: The app fetches real-time data for cities, attractions, and holidays from various APIs.##
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
