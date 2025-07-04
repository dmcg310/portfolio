# Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/2c896623-3114-46c7-9313-47dad8424bb9/deploy-status)](https://app.netlify.com/sites/harmonious-halva-ab5b73/deploys)

My personal portfolio website showcasing my projects and skills as a software engineer. Built with React, TypeScript, and Tailwind CSS, featuring dynamic GitHub project integration.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **GitHub Integration**: Automatically fetches and displays projects from GitHub API
- **Modern UI**: Clean design with smooth animations and transitions
- **Performance Optimized**: Fast loading with efficient caching
- **Accessibility**: Built with accessibility best practices

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Build Tool**: Vite
- **Icons**: React Icons
- **Deployment**: Netlify

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dmcg310/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   └── Footer.tsx
├── hooks/              # Custom React hooks
│   └── useGitHubProjects.ts
├── assets/             # Static assets
└── App.tsx             # Main application component
```

## Customization

To use this portfolio as a template for your own:

1. Fork this repository
2. Update personal information in the components (name, bio, etc.)
3. Replace the profile picture in `src/assets/`
4. Change the GitHub username in the `useGitHubProjects` hook
5. Modify colors and styling in `src/App.css` to match your preferences
6. Update site metadata in `index.html`

## Deployment

This site is deployed on Netlify with automatic deployments from the main branch.
