import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";

import App from "./components/App";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

document.addEventListener("DOMContentLoaded", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("app")
  );
});
