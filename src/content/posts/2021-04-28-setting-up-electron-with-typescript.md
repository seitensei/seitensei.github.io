---
date: '2021-04-28'
title: 'Setting up Electron with TypeScript'
---

I don't typically explore native desktop or mobile development, since I can just host a web app on a Raspberry Pi or VPS and access the app anywhere on anything, sometimes I just need a tool that I will only be using on one computer and need to store data on the filesystem. For that purpose, I'm going to be exploring [Electon](https://www.electronjs.org/).

## Setup

I'm going to be using [Yarn](https://yarnpkg.com/) 1.x as a package manager, and since the 1.x branch is mostly a drop-in replacement for npm, it should be easy to adapt any commands to npm if that's a preferred package manager.

I'm going to be using these core dependencies to set up the project:
- [Electon](https://www.electronjs.org/) (11+, since it needs to run on Apple Silicon)
- [TypeScript](https://www.typescriptlang.org/) - Primarily for typechecking, Babel will actually be used to transform TypeScript
- [Babel](https://babeljs.io/) - This will handle the transformation of TypeScript
- [Webpack](https://webpack.js.org/) - I'll be relying on webpack along with a few plugins to build the bundle for Electron.

In order to maintain code quality, I'll be using some linting and formatting tools.

- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)

All of these are dev dependencies, so we can get away with a single command.

```
yarn add --dev electron typescript @types/node @babel/core \
babel-loader @babel/plugin-proposal-class-properties \
@babel/plugin-proposal-object-rest-spread @babel/preset-env \
@babel/preset-typescript webpack webpack-cli style-loader \
css-loader sass sass-loader html-webpack-plugin prettier \
eslint @typescript-eslint/eslint-plugin \
@typescript-eslint/parser eslint-config-prettier \
eslint-plugin-prettier cross-env
```

After that, all the base configuration can be initialized.

Manually create a `prettier.config.js` file, and configure as needed. I will typically use something like this:
```js
module.exports = {
    trailingComma: 'all',
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    bracketSpacing: true,
}
```
Follow this up by adding the script to run prettier to `package.json`: `"format": "prettier --write src/"`

Do the same with `eslint`. It's also possible to use the `eslint --init` command to generate a base configuration to work with. My `.eslintrc.js` typically is similar to the following at this stage:

```js
module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint'
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'prettier'
    ],
    rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'prettier/prettier': 'error',
        'prefer-const': 'error',
        'no-debugger': 'error'
    },
};

```

Finally, initialize TypeScript's configuration.

`yarn tsc --init`

Just update `target` to `"es6"`.

For babel, create the `babel.config.json` and populate it to handle `preset-env` and TypeScript.

```json
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-typescript"
    ],
    "plugins": [
        "@babel/proposal-class-properties",
        "@babel/proposal-object-rest-spread"
    ]
}
```

On to Webpack!

The following `webpack.config.json` will set webpack up to handle `.ts` files through Babel and will allow the use of `sass`.

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    const isDevelopment = env.development;

    return {
        entry: path.resolve(__dirname, './src/main.ts'),
        target: 'electron-main',
        resolve: {
            extensions: ['*', '.ts', '.js'],
        },
        module: {
            rules: [
                {
                    test: /\.(tsx|ts|jsx|js)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.(scss|sass|css)$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: isDevelopment,
                                importLoaders: 1,
                                modules: true,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                // use dart-sass
                                implementation: require('sass'),
                                sourceMap: isDevelopment,
                            },
                        },
                    ]
                },
            ],
        },
        devtool: isDevelopment ? 'eval-source-map' : false,
        optimization: {
            minimize: !isDevelopment
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: '[name].bundle.js',
            publicPath: '/',
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname + '/src/index.html'),
                filename: 'index.html',
            }),
        ],
    };
};

```

Add the build script to `package.json`:

`"build": "cross-env NODE_ENV=development webpack --env development"`

Make sure to add the appropriate `index.html` and `main.ts`.

```typescript
// src/main.ts
import { app, BrowserWindow } from 'electron';

const createWindow = () => {
    let mainWindow = new BrowserWindow({
        width: 640,
        height: 480,
        resizable: true,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    mainWindow.loadFile('index.html');
};

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

```

```html
<!-- index.html -->
<html>
    <head> </head>
    <body>
        <h1>Hello, Electron</h1>
    </body>
</html>

```

Add the following script to run electron, `"start": "electron ./dist/main.bundle.js"`.

```
yarn build
yarn start
```

In the follow up to this post, I'll integrate [React](https://reactjs.org/) and testing.