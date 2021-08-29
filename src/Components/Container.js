import BottomBar from "./ContainerComponents/BottomBar";
import Products from "./ContainerComponents/Products";

export default function Container ({foods, setFood, drinks, setDrink, desserts, setDessert}) {
    
    return (
        <div className="container">
            <Products 
                foods={foods} setFood={setFood} 
                drinks={drinks} setDrink={setDrink} 
                desserts={desserts} setDessert={setDessert}
            />
            <BottomBar/>
        </div>
    );
}