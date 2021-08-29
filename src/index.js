import ReactDOM from "react-dom";
import Top from "./Components/Top"
import "./Components/reset.css"
import "./Components/style.css"
import Container from "./Components/Container";


function App() {
    return(
        <>
            <Top/>
            <Container />
        </>
    );
}

ReactDOM.render(<App />, document.querySelector("body"));
