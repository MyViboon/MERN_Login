import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import 'bootstrap/dist/css/bootstrap.min.css';

//Redux
// import { Provider } from "react-redux";
// import { legacy_createStore as createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from './reducers/index';

// const store = createStore(rootReducer, composeWithDevTools());

import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
