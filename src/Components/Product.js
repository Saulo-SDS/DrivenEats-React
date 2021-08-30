import React, {useState} from 'react';
export default function Product({image, name, description, price, chosen, func}) {

    const [edge, setEdge] = useState("");
    const [selected, setSelected] = useState("invisible");
    const [count, setCount] = useState(0);
    const [icon, setIcon] = useState("invisible");

    function selectProduct() {
        if(edge === ""){
            setEdge("selected-option");
            setSelected("add");
            setIcon("")
            func([...chosen,{name, price}])
            increment();
        }
    }

    function increment(){
        setCount(count +1)
        let modify = chosen.filter(chosen => chosen.name !== name);
        func([...modify,{name, price, amount: count + 1}])
    }
    
    function decrement(){
        if(count === 1){
            func(chosen.filter(chosen => chosen.name !== name));
            setEdge("");
            setSelected("invisible");
            setIcon("invisible")
            setCount(0);
            return;
        }

        let modify = chosen.filter(chosen => chosen.name !== name);
        setCount (count - 1);
        func([...modify, {name, price, amount: count - 1}])
    
    }

    return (
        <li className={edge} onClick={selectProduct}>
            <div className="option">
                <img src={image} className="product-image" alt=""/>
                <p>{name}</p>
                <p className="product-description">{description}</p>
                <div className="price-option">
                    <p>R$ <span>{price}</span></p>
                    <span className={icon}><ion-icon name="checkmark-circle-sharp"></ion-icon></span>
                </div>

                <div className={selected}>
                    <span onClick={decrement}>-</span>
                    <span>{count}</span>
                    <span onClick={increment}>+</span>
                </div>
            </div>
        </li>
    );
}
