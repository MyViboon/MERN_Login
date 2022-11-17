import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//Redux
// import { Provider } from "react-redux";
// import { legacy_createStore as createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from './reducers/index';

// const store = createStore(rootReducer, composeWithDevTools());

import { Provider } from "react-redux";
import { store } from "./store/store";

import 'bootstrap/dist/css/bootstrap.min.css';

//Router
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);

reportWebVitals();
