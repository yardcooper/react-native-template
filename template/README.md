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

#### Localization
- extract & compile runs on commit
- manual steps
    - `npm run extract-loc`
    - `npm run compile-loc`

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
│   ├── intl/          # localization files
│   ├── screens/
│   ├── store/
│   └── App.tsx
│   └── AppNavigator.tsx
├── index.js
└── package.json

```
