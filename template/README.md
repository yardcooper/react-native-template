## Usage

### Setup

1. `nvm use`
2. `npm install`

### Development

#### iOS

- Simulator: `npm run ios`
- Device: `npm run ios:device`

#### Android

- Simulator: `npm run android`
- Device: `npm run android:device`

---

## Project structure


```bash
project/
├── .husky/            # Contains Git hook configurations
├── android/           # Android-specific code
├── ios/               # iOS-specific code
├── src/
│   ├── components/    # Shared components
│   │   └── AppText    # Generic text component
│   ├── screens/
│   ├── store/
│   └── App.tsx
│   └── AppNavigator.tsx
├── index.js
└── package.json

```