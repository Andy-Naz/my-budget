import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import { createStore } from "./store/createStore.js"
import { Provider } from "react-redux"

const store = createStore()

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    </BrowserRouter>
)
