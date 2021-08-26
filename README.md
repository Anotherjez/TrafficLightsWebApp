# Traffic Lights Web App

Este proyecto forma parte del proyecto final de IoT - ITLA C2-2021.
Consiste en un Semaforo desarollado con React que se comunica con la [App Móvil](https://github.com/Anotherjez/TrafficLightsApp) y la [Web App del administrador](https://github.com/Anotherjez/adminWebAppIoT) por un broker a traves del protocolo mqtt.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 💻 Requisitos

- Cualquier sistema operativo (es decir, MacOS X, Linux, Windows)
- Cualquier IDE (es decir, IntelliJ, VSCode, etc.)
- Un poco de conocimiento de Javascripy y React.
- Nodejs con npm (versión +14.17.5)

## Getting started

#### 1. Clone the repo

```sh
$ git clone https://github.com/Anotherjez/TrafficLightsWebApp.git
$ cd TrafficLightsWebApp/
```
#### 2. Instala las dependencias

```sh
$ npm install
```

#### 3. Setup Mqtt broker

En /src/TrafficLight.jsx, cambia el server hostname 'mqtt://192.168.122.75:8083' por los de tu servidor.

```
  const client = mqtt.connect('mqtt://192.168.122.75:8083');
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

