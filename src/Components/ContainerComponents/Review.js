import ReactDOM from 'react-dom';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import Top from '../Top';
import ItemInfo from './ItemInfo';
import SendOrder from './SendOrder';

export default function Review({foods, drinks, desserts}) {

    let totalValue = priceTotal(foods, drinks, desserts) ;
    ReactDOM.render(
        <Router>  
        <>
            <Top />
            <div class="order-review">
                <div class="confirm-order">
                    <div class="box">
                        <p class="custom-titles">Confirme seu pedido</p>
                        {foods.map((food) => <ItemInfo name={food.name} price={food.price} amount={food.amount} />)}
                        {drinks.map((drink) => <ItemInfo name={drink.name} price={drink.price} amount={drink.amount} />)}
                        {desserts.map((dessert) => <ItemInfo name={dessert.name} price={dessert.price} amount={dessert.amount} />)}

                        <div class="custom-titles">
                            <p><strong>TOTAL</strong></p>
                            <p class="price-total">{totalValue}</p>
                        </div>
            
                        <div class="confirm">
                            <button  class="button-confirm" onClick={() => SendOrder(foods, drinks, desserts, totalValue)}>Tudo certo, pode pedir!</button>
                            <Link class="button-cancel" onclick="cancelOrder();">Cancelar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
        </Router>  
    , document.querySelector(".root"));
}

function priceTotal(foods, drinks, desserts) {

    let priceFoods = foods.map(food => (parseFloat(food.price.replace(',','.')))*food.amount).reduce((total, number) => total + number, 0);
    let priceDrinks = drinks.map(drink => (parseFloat(drink.price.replace(',','.')))*drink.amount).reduce((total, number) => total + number, 0);
    let priceDesserts = desserts.map(dessert => (parseFloat(dessert.price.replace(',','.')))*dessert.amount).reduce((total, number) => total + number, 0);
    let priceTotal = (priceFoods + priceDrinks + priceDesserts).toFixed(2);

    return String(priceTotal).replace('.', ',');
}