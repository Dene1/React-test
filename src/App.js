import logo from "./logo.svg";
import "./App.css";
import {createElement} from "react";

function App() {
    // Императивный стиль
    const year = new Date().getFullYear()
    return (
        createElement("div", {className: "App"},
            createElement("header", {className: "App-header"},
                createElement("img", {
                    src: logo,
                    className: "App-logo",
                    alt: "logo"
                }),
                createElement("p", null, "Happy hacking!"),
                createElement("h1", null, "Current Year: ", year))))
}

export default App;
