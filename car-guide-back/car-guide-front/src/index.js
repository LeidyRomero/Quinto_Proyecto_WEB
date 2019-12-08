import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import App from "./App.js";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es.json";
import localeEnMessages from "./locales/en.json";

let choose = () => {
    if(navigator.language === "es" || navigator.language.startsWith("es"))
        return localeEsMessages;
    else
        return localeEnMessages;
}

ReactDOM.render(
<IntlProvider locale={navigator.language} key={navigator.language} messages={choose()}>
    <App locale={navigator.language}/>
</IntlProvider>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();