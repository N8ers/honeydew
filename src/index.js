import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { Auth0Provider } from "@auth0/auth0-react"

import "./index.css"
import App from "./App"

import { store } from "./store/store"

const useMockServiceWorker = true
if (useMockServiceWorker) {
  const { worker } = require("./mocks/browser")
  worker.start()
}

const domain = process.env.REACT_APP_AUTH0_DOMAINE
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>
)
