# turtlecoin-web-wallet-vue
[![Build Status](https://travis-ci.org/turtlecoin/turtlecoin-web-wallet-vue.svg?branch=master)](https://travis-ci.org/turtlecoin/turtlecoin-web-wallet-vue)

A serverless TurtleCoin  client side web wallet that can be deployed to Github, Gitlab, Netlify and Heroku to name a few. Utilizes [turtlecoin-wallet-backend-js](https://github.com/turtlecoin/turtlecoin-wallet-backend-js) and the power of Vue and Buefy.

![Load Wallet](https://i.imgur.com/5P5Wizt.png)


## Working
- Generate Wallet
- Store Wallet
- Load Wallet

## To-Do
- Load WASM library in Webpack
- Display incoming / outgoing transactions
- Display Syncing status (footer bar in app)
- Change remote node (footer bar in app)
- Export / Import wallet
- Conditional Logout in Navigation when a wallet is Loaded
- Better way to store password in the sessionStorage - encrypt?

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
