# DM-Tools
> A Dungeons and Dragons 5e tool dedicated to assist DM using [`electron-webpack`](https://github.com/electron-userland/electron-webpack).

## Getting Started
Simply clone down this repository, install dependencies, and get started.

```bash
# copy repository using git clone
git clone https://github.com/UIOWA5830SP19/SPP500.git
cd SPP500

# install dependencies
yarn
```

### Development Scripts
#### Frontend
```bash
# run application in development mode
yarn dev

# compile source code and create webpack output
yarn compile

# `yarn compile` & create build with electron-builder
yarn dist

# `yarn compile` & create unpacked build with electron-builder
yarn dist:dir
```

#### Backend
```bash
# build and run docker image
docker-compose up

# rebuild docker image
docker-compose build

# install dependencies
npm install (yarn install)

# run application
npm start (yarn start)
```
