# Strava Club Stats - React Frontend v2.0

A modern, responsive frontend for the Strava Club Stats leaderboard application. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Multiple Leaderboards**
  - Mens & Womens Cycling Monthly
  - Mens & Womens Cycling Yearly
  - Mens & Womens Running
  
- **Modern UI/UX**
  - Fully responsive mobile-first design
  - Clean, intuitive navigation with hamburger menu
  - Advanced table filtering and sorting
  - Date picker for historical data
  
- **Comprehensive Documentation**
  - Built-in documentation pages
  - Help and support section
  - About page with project information

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Docker (optional, for containerized deployment)

## 🛠️ Installation

### Local Development

1. Clone the repository:
```bash
cd /path/to/stravastats_react_fe
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

4. Update the `.env` file with your API URL:
```
REACT_APP_API_URL=https://your-api-url.com
```

5. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## 🐳 Docker Deployment

### Build the Docker image:
```bash
docker build -t stravastats-frontend:latest .
```

### Run the container:
```bash
docker run -d -p 3000:3000 --name stravastats-frontend stravastats-frontend:latest
```

The application will be available at `http://localhost:3000`

## 📦 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🏗️ Project Structure

```
stravastats_react_fe/
├── public/              # Static files
├── src/
│   ├── components/      # React components
│   │   ├── about.tsx
│   │   ├── documentation.tsx
│   │   ├── femaleRunningTable.tsx
│   │   ├── femaleTable.tsx
│   │   ├── femaleYearlyTable.tsx
│   │   ├── footer.tsx
│   │   ├── header.tsx
│   │   ├── help.tsx
│   │   ├── home.tsx
│   │   ├── maleRunningTable.tsx
│   │   ├── maleTable.tsx
│   │   ├── maleYearlyTable.tsx
│   │   └── register.tsx
│   ├── models/          # TypeScript types
│   ├── Main.tsx         # Main layout component
│   └── index.tsx        # App entry point
├── nginx/               # Nginx configuration
├── Dockerfile           # Docker build instructions
└── PROJECT_PLAN.md      # Detailed project plan

```

## 🔧 Configuration

### Environment Variables

Create a `.env` file with the following variables:

```env
# Build Configuration
GENERATE_SOURCEMAP=false

# API Configuration
REACT_APP_API_URL=https://www.unixcraft.dev

# Application Configuration
REACT_APP_NAME=Strava Club Stats
REACT_APP_VERSION=2.0-beta
```

### API Endpoints

The application connects to the following backend API endpoints:
- `/dataapi/rider_totals` - Monthly cycling stats
- `/dataapi/rider_yearly_totals` - Yearly cycling stats
- `/dataapi/runner_totals` - Running stats

## 🎨 Technology Stack

### Frontend
- **React 18.2** - UI framework
- **TypeScript 4.9** - Type safety
- **Tailwind CSS 3.4** - Styling
- **Flowbite 2.2** - UI components
- **ka-table 8.7** - Advanced data tables
- **React Router 6.21** - Routing
- **date-fns 3.1** - Date handling
- **@preact/signals-react** - State management

### Build & Deployment
- **Docker** - Containerization
- **Nginx** - Web server
- **Create React App** - Build tooling

## 🔒 Security Features

- Content Security Policy headers
- X-Frame-Options protection
- XSS protection headers
- Secure Docker container (non-root user)
- Gzip compression
- Static asset caching

## 📱 Mobile Support

The application is fully responsive and optimized for:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1920px+)

Features:
- Hamburger menu for mobile navigation
- Touch-friendly controls
- Horizontal scrolling tables
- Optimized font sizes

## 🚧 Current Status

**Version:** 2.0 Beta  
**Status:** Active Development

All major features have been implemented:
- ✅ All 6 leaderboard pages
- ✅ Documentation, Help, and About pages
- ✅ Mobile-responsive design
- ✅ Secure Docker deployment
- ✅ Environment-based configuration
- ✅ Modern navigation with hamburger menu

## 📝 Development Roadmap

See [PROJECT_PLAN.md](PROJECT_PLAN.md) for detailed implementation phases and progress.

### Completed
- Phase 0: Planning & Analysis
- Phase 1: Routing Infrastructure
- Phase 2: Missing Leaderboard Components
- Phase 3: Documentation & Static Pages
- Phase 4: Mobile Responsiveness
- Phase 5: Table Functionality
- Phase 6: .gitignore Updates
- Phase 7: Dockerfile Security
- Phase 8: Code Quality & Security
- Phase 9: Testing & Validation
- Phase 10: Documentation & Cleanup

## 🤝 Contributing

This is a personal project, but suggestions and feedback are welcome!

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

- Powered by [Strava API](https://developers.strava.com/)
- Built with ❤️ by UnixCraft Development

## 📞 Support

For issues or questions:
- Email: support@unixcraft.dev
- Documentation: Visit the `/documentation` page
- Help: Visit the `/help` page

## 🔗 Links

- Live Site: https://www.unixcraft.dev/mens_leaderboard
- Backend API: Go-based REST API with MongoDB
- Strava API: https://developers.strava.com/

---

**Note:** This is a beta version. Features and functionality are subject to change.