import React from "react";
import "./VendingMachine.css"
import { BrowserRouter, Route, Link } from "react-router-dom";
import Item from "./Item";

const VendingMachine = ({items}) => {
  return (
    <div className="VendingMachine">
      <img src="https://cdn11.bigcommerce.com/s-xun5w23utl/images/stencil/1280x1280/products/4961/8321/glass-front-snack-and-soda-vending-machines__54728.1607811549.jpg?c=1"
          alt="vending machine"/>
      
      <div className="VendingMachine-links">
        {items.map(item => (
          <Link exact to={`/${item.name}`} key={item.name}>
            {item.name}
          </Link>
        )
        )}
      </div>

    </div>      
  );
}

export default VendingMachine;
