import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";

export let rerenderMainTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    dispatch={store.dispatch.bind(store)}
                    store={store}
                    // addDialogName={store.addDialogName.bind(store)}
                    // addDialogMessage={store.addDialogMessage.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderMainTree(store.getState())
store.subscriber(rerenderMainTree)
reportWebVitals();