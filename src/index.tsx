import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { App } from "./App";

declare const module: { hot: any };

const renderApp = (App: any) => ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.getElementById('root'),
);

renderApp(App);

if (module.hot) {
    module.hot.accept('./App', () => {
        const newApp = require('./App');
        renderApp(newApp);
    });
}
