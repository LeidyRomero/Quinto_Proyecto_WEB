import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import App from "./App.js";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";

ReactDOM.render(
<IntlProvider locale="es-ES" messages= {localeEsMessages}>
<App/>
</IntlProvider>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();