import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { AppRouter } from "./routers/AppRouter";

// import "./styles/styles.scss";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
export default App;
