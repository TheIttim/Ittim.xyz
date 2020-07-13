import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Footer from "./Footer";
import * as serviceWorker from "./serviceWorker";
import { ThemeSwitcher } from "@puyodead1/react-bootstrap-theme-switcher";
// Cosmo for light
// darkly for dark
let themes = ["cosmo", "darkly"];

ReactDOM.render(
  <React.StrictMode>
    <ThemeSwitcher themePath="/themes" defaultTheme="darkly" storeThemeKey="theme" themes={themes}>
      <App />
    </ThemeSwitcher>
  </React.StrictMode>,
  document.getElementById("root")
);

ReactDOM.render(<Footer />, document.getElementById("footer"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
