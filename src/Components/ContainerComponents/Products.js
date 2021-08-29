import { useEffect } from "react";
import Desserts from "./Desserts";
import Drinks from "./Drinks";
import Foods from "./Foods";

export default function Products({foods, setFood, drinks, setDrink, desserts, setDessert}) {

    return (
        <>
            <div className="produtos">
                <p className="general-titles">Primeiro, seu prato</p>
                <Foods foods={foods} setFood={setFood}/>
                <p className="general-titles">Agora, sua bebida</p>
                <Drinks drinks={drinks} setDrink={setDrink}/>
                <Desserts desserts={desserts} setDessert={setDessert}/>
            </div>   
        </>
    );
}
