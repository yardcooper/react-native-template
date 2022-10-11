# :space_invader: Hybrid Heroes React Native Template

An extended Template based on the [clean and minimalist React Native TypeScript template](https://img.shields.io/github/issues/react-native-community/react-native-template-typescript).

Elegant usage directly within the [React Native CLI](https://github.com/react-native-community/cli).

## :star: Extended features

- Extended ESLint & Prettier configuration.
- Added [Husky](https://typicode.github.io/husky) pre commit setup
  - [lint-staged](https://github.com/okonet/lint-staged)
  - [commitlint](https://github.com/conventional-changelog/commitlint)
- [Node Version Manager](https://github.com/nvm-sh/nvm) configuration file: ([`.nvmrc`](template/.nvmrc))
- [React Navigation](https://reactnavigation.org/) configuration.
- [Redux](https://redux.js.org/) configuration:
  - [Redux Toolkit](https://redux-toolkit.js.org/)
  - [React Redux](https://react-redux.js.org/)
  - [Redux Persist](https://github.com/rt2zz/redux-persist)

## :arrow_forward: Usage

```sh
npx react-native init MyApp --npm --template https://gitlab.com/hybridheroes/opensource/react-native-template
```
**Note:** Remove `--npm` if yarn is preferred.

### Usage with older versions of React Native

#### e.g. `react-native@0.69.x`

```sh
npx react-native init MyApp --template react-native-template-typescript@6.11.9
```

See the below table to find out which version of the template to use.

#### React Native <=> Template Version

| React Native | Template |
| ------------ | -------- |
| 0.70         | 6.12.\*  |
| 0.69         | 6.11.\*  |
| 0.68         | 6.10.\*  |
| 0.67         | 6.9.\*   |
| 0.66         | 6.8.\*   |
| 0.65         | 6.7.\*   |
| 0.64         | 6.6.\*   |
| 0.63         | 6.5.\*   |
| 0.62         | 6.4.\*   |
| 0.61         | 6.3.\*   |
| 0.60         | 6.2.\*   |

## :warning: React Native CLI

This template only works with the new CLI. Make sure you have uninstalled the legacy `react-native-cli` first (`npm uninstall -g react-native-cli`) for the below command to work. If you wish to not use `npx`, you can also install the new CLI globally (`npm i -g @react-native-community/cli` or `yarn global add @react-native-community/cli`).

If you tried the above and still get the react-native-template-react- native-template-typescript: Not found error, please try adding the `--ignore-existing` flag to [force npx to ignore](https://github.com/npm/npx#description) any locally installed versions of the CLI and use the latest.

Further information can be found here: https://github.com/react-native-community/cli#about

# Documentation

## :gem: RVM & NVM
The Template comes with a `.nvmrc` (currently node 16) so you can use `nvm use` bash command.
You can also use `rvm use` bash command. The Ruby version is defined in the `Gemfile` (currently version 2.7.4)

## :computer: Contributing

Contributions are very welcome. Please check out the [contributing document](CONTRIBUTING.md).

## :bookmark: License

This project is [MIT](LICENSE) licensed.
