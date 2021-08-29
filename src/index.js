import ReactDOM from "react-dom";
import Top from "./Components/Top"
import "./Components/reset.css"
import "./Components/style.css"


function App() {
    return(
        <>
            <Top/>
        </>
    );
}

ReactDOM.render(<App />, document.querySelector("body"));
