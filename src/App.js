import logo from "./logo.svg";
import "./App.css";

function App() {
    // Императивный стиль
    const year = new Date().getFullYear()
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Happy hacking!
                </p>
                <h1>Current Year: {year}</h1>
            </header>
        </div>
    );
}

export default App;
