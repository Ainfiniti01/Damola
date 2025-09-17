# Damola's Essentials - Mobile App

React Native mobile application for the Damola's Essentials e-commerce platform.

## Features

- Native iOS and Android support
- Product browsing and shopping
- User authentication
- Shopping cart and checkout
- Order tracking
- Push notifications
- Offline support

## Tech Stack

- React Native 0.79.3
- Expo SDK 53
- React Navigation 7
- React Query 5
- AsyncStorage
- React Native Maps
- Stripe for payments

## Getting Started

### Prerequisites

- Node.js 18+
- Expo CLI
- iOS Simulator (for iOS development) or Android Studio (for Android development)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Run on device/simulator:
   - For iOS: `npm run ios`
   - For Android: `npm run android`
   - Or scan QR code with Expo Go app

## Development

### Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS simulator
- `npm run web` - Run on web (limited functionality)

### Project Structure

```
src/
├── app/              # App screens and navigation
├── components/       # Reusable UI components
├── utils/            # Utility functions and hooks
│   ├── auth/         # Authentication utilities
│   └── upload.js     # File upload utilities
├── assets/           # Images and static assets
└── polyfills/        # Platform-specific polyfills
```

## Environment Setup

Create a `.env` file in the root directory with necessary environment variables:

```env
EXPO_PUBLIC_API_URL=your_api_url
EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
```

## Building for Production

### Android APK
```bash
eas build --platform android
```

### iOS App Store
```bash
eas build --platform ios
```

## Contributing

1. Follow React Native and Expo best practices
2. Test on both iOS and Android
3. Ensure proper error handling
4. Update documentation for new features

## Support

For issues specific to the mobile app, please check:
- Expo documentation
- React Native documentation
- Project issue tracker
