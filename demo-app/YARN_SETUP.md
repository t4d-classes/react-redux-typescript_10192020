# Yarn Setup

1. Install Yarn globally.

```bash
npm install -g yarn
```

2. Set to `berry` version.

```bash
yarn set version berry
```

3. Add Redux and related packages.

npm install redux react-redux redux-thunk

npm install -d @types/react-redux


```bash
yarn add redux react-redux redux-thunk

yarn add @types/react-redux --dev
```

4. Configure VSCode editor.

```bash
yarn dlx @yarnpkg/pnpify --sdk vscode
```

VSCode will ask you to choose a TypeScript version. Pick "Use workspace version". The editor should work correctly.

5. Start the application with Yarn.

```bash
yarn start
```