import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link } from "react-router";
import { createBrowserHistory } from "history";
import App from "./App.jsx";
import { Provider } from "mobx-react";
import Store from "./store";

const About = () => {
    return <>About</>;
};

ReactDOM.render(
    <Provider store={Store}>
        <Router history={createBrowserHistory()}>
        <Route path="/" component={App} />
        <Route path="/about" component={About} />
        </Router>
    </Provider>,
    document.getElementById("root")
);
