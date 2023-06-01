import React from "react";

import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "./modules/Redux/store";

import "./index.css";

const store = configureStore();

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);

reportWebVitals();
