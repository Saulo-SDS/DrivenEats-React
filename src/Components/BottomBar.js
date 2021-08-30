import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Review from "./Review";

export default function BottomBar({foods, drinks, desserts}) {

    let isValid = (foods.length > 0 && drinks.length > 0  && desserts.length > 0);
   
    return (
        <Router>
            <div className="bottom-bar">
                <div className="place-order">
                    <Link to="/Review" className={isValid ? "order-valid " : "order-no-valid disabled-link"}>
                      <p>{isValid ? "Fechar Pedido" : "Selecione os 3 itens para fechar o pedido"}</p>
                    </Link>
                </div>
                <Switch>
                    <Route path="/Review">
                        <Review foods={foods} drinks={drinks} desserts={desserts}/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
