# Damola's Essentials

A full-stack e-commerce platform featuring a React Native mobile app and a React web application for premium fashion and lifestyle products.

## Project Structure

This is a monorepo containing:

- `apps/mobile/` - React Native/Expo mobile application
- `apps/web/` - React web application built with React Router and Vite

## Features

- **Mobile App**: Native iOS/Android experience with Expo
- **Web App**: Responsive web interface with modern React
- **E-commerce**: Product catalog, shopping cart, user authentication
- **Admin Dashboard**: Product and order management
- **Payment Integration**: Stripe payment processing
- **Real-time Updates**: Live order tracking and notifications

## Tech Stack

### Mobile App
- React Native
- Expo
- React Navigation
- AsyncStorage
- React Query

### Web App
- React 18
- React Router 7
- Vite
- Tailwind CSS
- React Query
- Stripe

### Backend
- Hono (server framework)
- Neon Database (PostgreSQL)
- Auth.js (authentication)
- Uploadcare (file uploads)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- For mobile: Expo CLI

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd damolas-essentials
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
# Copy and configure environment files
cp apps/web/.env.example apps/web/.env
# Add your API keys and configuration
```

### Running the Applications

#### Web App
```bash
cd apps/web
npm run dev
```

#### Mobile App
```bash
cd apps/mobile
npm start
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run typecheck` - Run TypeScript checks

### Project Structure

```
apps/
├── mobile/          # React Native app
│   ├── src/
│   │   ├── app/     # App screens
│   │   ├── components/
│   │   └── utils/
│   └── package.json
└── web/             # React web app
    ├── src/
    │   ├── app/     # Routes and pages
    │   ├── components/
    │   └── utils/
    └── package.json
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

## License

This project is private and proprietary.

## Contact

For questions or support, please contact the development team.
