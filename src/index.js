import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"

import "./index.css"
import App from "./App"

import { store } from "./store/store"

const useMockServiceWorker = false
if (useMockServiceWorker) {
  const { worker } = require("./mocks/browser")
  worker.start()
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
