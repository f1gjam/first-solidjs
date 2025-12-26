# Strava Club Stats - Unified Web Experience Migration

## 🎯 Project Overview

This is a complete rewrite of the Strava Club Stats frontend using modern web technologies and the unified-web-experience codebase as the foundation.

## 📋 What's Been Done

### ✅ Completed Tasks

1. **Infrastructure & Configuration**
   - ✅ Updated package.json with all modern dependencies
   - ✅ Configured Vite build system
   - ✅ Set up TypeScript with proper tsconfig files
   - ✅ Configured Tailwind CSS with custom Strava theme
   - ✅ Optimized Dockerfile for security and performance
   - ✅ Updated GitLab CI/CD pipeline
   - ✅ Fixed .gitignore for proper exclusions
   - ✅ Created environment variable templates

2. **Git Management**
   - ✅ Created backup tag: `v1.0.0-pre-unified`
   - ✅ All changes committed to `dev` branch

3. **Documentation**
   - ✅ Created comprehensive migration plan
   - ✅ Created step-by-step completion guide
   - ✅ Documented all API endpoints
   - ✅ Created troubleshooting guide

### 🔧 Requires Manual Completion

Due to system limitations with file operations, the following steps need to be executed manually:

1. **Copy Unified Components** (see MIGRATION_COMPLETION_GUIDE.md)
2. **Update Navigation Menu**
3. **Create API Service Layer**
4. **Build All Page Components**
5. **Test and Deploy**

## 🏗️ Architecture

### Technology Stack

- **Frontend Framework:** React 18.3.1
- **Build Tool:** Vite 5.4.19
- **Language:** TypeScript 5.8.3
- **Styling:** Tailwind CSS 3.4.17
- **UI Components:** shadcn/ui (Radix UI)
- **State Management:** TanStack Query 5.83.0
- **Routing:** React Router DOM 6.30.1
- **Tables:** TanStack Table 8.21.3
- **Charts:** Recharts 3.6.0
- **Icons:** Lucide React 0.462.0
- **Forms:** React Hook Form 7.61.1
- **Validation:** Zod 3.25.76

### Key Features

- 🎨 Modern, clean UI with Strava brand colors
- 📱 Fully responsive mobile-first design
- 🌙 Dark mode support (via next-themes)
- ⚡ Fast page loads with code splitting
- 🔍 Filterable and sortable leaderboards
- 📊 Interactive data visualizations
- 🔐 Secure Docker deployment
- 🚀 Automated CI/CD pipeline

## 📁 Project Structure

```
stravastats_react_fe/
├── public/                 # Static assets
│   ├── favicon.ico
│   └── logo*.png
├── src/
│   ├── components/
│   │   ├── ui/            # shadcn/ui components
│   │   ├── layout/        # Header, Footer, Layout
│   │   └── leaderboard/   # Leaderboard-specific components
│   ├── pages/             # Route pages
│   │   ├── Index.tsx      # Home page
│   │   ├── MensCycling.tsx
│   │   ├── WomensCycling.tsx
│   │   ├── MensRunning.tsx
│   │   ├── WomensRunning.tsx
│   │   ├── SingleActivities.tsx
│   │   ├── CurrentLeaders.tsx
│   │   ├── Documentation.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   ├── services/          # API client
│   │   └── api.ts
│   ├── hooks/             # Custom React hooks
│   │   └── use-mobile.tsx
│   ├── lib/               # Utilities
│   │   └── utils.ts
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── nginx/                 # Nginx configuration
├── Dockerfile             # Optimized Docker image
├── .gitlab-ci.yml         # CI/CD pipeline
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies

```

## 🌐 Routes

### Main Leaderboards
- `/` - Home page with overview
- `/mens-cycling` - Men's cycling weekly leaderboard
- `/mens-cycling-monthly` - Men's cycling monthly leaderboard
- `/mens-cycling-yearly` - Men's cycling all-time leaderboard
- `/womens-cycling` - Women's cycling weekly leaderboard
- `/womens-cycling-monthly` - Women's cycling monthly leaderboard
- `/womens-cycling-yearly` - Women's cycling all-time leaderboard
- `/mens-running` - Men's running weekly leaderboard
- `/mens-running-monthly` - Men's running monthly leaderboard
- `/mens-running-yearly` - Men's running all-time leaderboard
- `/womens-running` - Women's running weekly leaderboard
- `/womens-running-monthly` - Women's running monthly leaderboard
- `/womens-running-yearly` - Women's running all-time leaderboard

### Additional Pages
- `/single-activities` - Recent notable activities
- `/current-leaders` - Current period leaders summary
- `/documentation` - User guide and API docs
- `/about` - About the club and site
- `/contact` - Contact information

## 🔌 API Integration

### Base URL
```
Production: https://api.unixcraft.dev
Development: http://localhost:8080
```

### Endpoints

**Cycling - Men's**
- `GET /mens_weekly` - Weekly cycling stats
- `GET /mens_monthly` - Monthly cycling stats
- `GET /mens_all_time` - All-time cycling stats

**Cycling - Women's**
- `GET /womens_weekly` - Weekly cycling stats
- `GET /womens_monthly` - Monthly cycling stats
- `GET /womens_all_time` - All-time cycling stats

**Running - Men's**
- `GET /mens_running_weekly` - Weekly running stats
- `GET /mens_running_monthly` - Monthly running stats
- `GET /mens_running_all_time` - All-time running stats

**Running - Women's**
- `GET /womens_running_weekly` - Weekly running stats
- `GET /womens_running_monthly` - Monthly running stats
- `GET /womens_running_all_time` - All-time running stats

**Other**
- `GET /single_activities` - Recent notable activities
- `GET /current_leaders` - Current period leaders

## 🚀 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Variables
Create a `.env` file in the root:

```env
VITE_API_BASE_URL=https://api.unixcraft.dev
```

## 🐳 Docker Deployment

### Build
```bash
docker build -t stravastats-fe:latest .
```

### Run
```bash
docker run -p 80:80 stravastats-fe:latest
```

### Docker Compose (Portainer)
```yaml
version: '3'
services:
  app:
    image: registry.gitlab.com/unixcraft/frontend/stravastats_react_fe/stravastats_react_fe-dev:latest
    container_name: StravaClubStatsFrontEnd
    ports:
      - "3000:80"
    environment:
      NODE_ENV: production
    networks:
      - traefik-proxy
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.strava-app-fe.rule=Host(`www2.unixcraft.dev`)"
      - "traefik.http.services.strava-app-fe.loadbalancer.server.port=80"
```

## 📊 CI/CD Pipeline

### GitLab CI Stages
1. **Build** - Build Docker image
2. **Push** - Push to GitLab registry
3. **Deploy** - Trigger Portainer webhook

### Pipeline File
See `.gitlab-ci.yml` for complete configuration.

## 🎨 Design System

### Colors (Strava-inspired)
- **Primary:** Orange (#fc4c02)
- **Secondary:** Dark gray (#1a1a1a)
- **Accent:** Light blue for highlights
- **Background:** White/Dark based on theme

### Typography
- **Headings:** Bold, uppercase, tracking-wide
- **Body:** Clean, readable sans-serif
- **Monospace:** For code and data

### Components
All components follow shadcn/ui patterns for consistency and accessibility.

## 📝 Next Steps

1. **Complete Manual Migration Steps**
   - See `MIGRATION_COMPLETION_GUIDE.md`
   - Estimated time: 45 minutes

2. **Add Screenshots to Documentation**
   - Capture new modern design
   - Update documentation page
   - Create user guide images

3. **Performance Optimization**
   - Image optimization
   - Code splitting review
   - Lazy loading implementation

4. **Testing**
   - Unit tests for components
   - Integration tests for API calls
   - E2E tests for critical paths

5. **Monitoring**
   - Set up error tracking
   - Add analytics
   - Monitor performance metrics

## 🐛 Troubleshooting

See `MIGRATION_COMPLETION_GUIDE.md` for detailed troubleshooting steps.

## 📚 Documentation

- `PROJECT_PLAN.md` - Original project plan with phase tracking
- `UNIFIED_MIGRATION_PLAN.md` - Migration strategy and progress
- `MIGRATION_COMPLETION_GUIDE.md` - Step-by-step completion guide
- `README.md` - Main project README
- This file - Migration overview

## 🤝 Contributing

1. Create a feature branch from `dev`
2. Make your changes
3. Test thoroughly
4. Submit a merge request

## 📄 License

Private project - Unixcraft

## 👥 Team

- **Developer:** Kashif Ali
- **Organization:** Unixcraft
- **Project:** Strava Club Stats

---

**Last Updated:** December 26, 2025
**Version:** 2.0.0
**Status:** Migration in Progress - Manual Steps Required
