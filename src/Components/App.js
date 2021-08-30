import React, {useState} from "react";
import Top from "./Top"
import Container from "./Container";
import BottomBar from "./BottomBar";
export default function App() {

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
            <BottomBar foods={itemsFood} drinks={itemsDrink} desserts={itemsDessert}/>
        </>
    );
}