import ReactDOM from 'react-dom';
import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";
import Top from './Top';
import ItemInfo from './ItemInfo';
import SendOrder from './SendOrder';

export default function Review({foods, drinks, desserts}) {
    let totalValue = priceTotal(foods, drinks, desserts);
    ReactDOM.render(
        <>
            <Top />
            <div className="order-review">
                <div className="confirm-order">
                    <div className="box">
                        <p className="custom-titles">Confirme seu pedido</p>
                        {foods.map((food, index) => <ItemInfo key={index} name={food.name} price={food.price} amount={food.amount} />)}
                        {drinks.map((drink, index) => <ItemInfo key={index} name={drink.name} price={drink.price} amount={drink.amount} />)}
                        {desserts.map((dessert, index) => <ItemInfo key={index} name={dessert.name} price={dessert.price} amount={dessert.amount} />)}

                        <div className="custom-titles">
                            <p><strong>TOTAL</strong></p>
                            <p className="price-total">{totalValue}</p>
                        </div>
                        <Router>  
                        <div className="confirm">
                            <button  className="button-confirm" onClick={() => SendOrder(foods, drinks, desserts, totalValue)}>Tudo certo, pode pedir!</button>
                            <Link to="/">
                                <button  className="button-cancel">Cancelar</button>
                            </Link>
                        </div>
                        </Router>  
                    </div>
                </div>
            </div>
        </>
    , document.querySelector("body"));
}

function priceTotal(foods, drinks, desserts) {

    let priceFoods = foods.map(food => (parseFloat(food.price.replace(',','.')))*food.amount).reduce((total, number) => total + number, 0);
    let priceDrinks = drinks.map(drink => (parseFloat(drink.price.replace(',','.')))*drink.amount).reduce((total, number) => total + number, 0);
    let priceDesserts = desserts.map(dessert => (parseFloat(dessert.price.replace(',','.')))*dessert.amount).reduce((total, number) => total + number, 0);
    let priceTotal = (priceFoods + priceDrinks + priceDesserts).toFixed(2);

    return String(priceTotal).replace('.', ',');
}