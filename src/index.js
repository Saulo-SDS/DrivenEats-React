import ReactDOM from "react-dom";
import React, {useState} from "react";
import Top from "./Components/Top"
import "./Components/reset.css"
import "./Components/style.css"
import Container from "./Components/Container";


function App() {
    
    const [itemsFood, setItemsFood] = useState([]);
    const [itemsDrink, setItemsDrink] = useState([]);
    const [itemsDessert, setItemsDessert] = useState([]);

    return(
        <>
            <Top/>
            <Container
             foods={itemsFood} setFood={setItemsFood} 
             drinks={itemsDrink} setDrink={setItemsDrink}
             desserts={itemsDessert} setDessert={setItemsDessert}
            />
        </>
    );
}

ReactDOM.render(<App />, document.querySelector("body"));
