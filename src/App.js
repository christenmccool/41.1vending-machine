import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./NavBar";
import VendingMachine from "./VendingMachine"
import Item from "./Item";

function App({items=defaultItems}) {

  return (
    <div className="App">
      <BrowserRouter>

        <NavBar items={items.map(ele => ele.name)}></NavBar>

        <Route exact path="/">
          <VendingMachine items={items} />
        </Route>
        
        {items.map(item => (
          <Route exact path={`/${item.name}`} key={item.name}>
            <Item name={item.name} image={item.image}/>
          </Route>
        ))}

      </BrowserRouter>
    </div>      
  );
}

const defaultItems = [
  {name: "chips", image: "https://m.media-amazon.com/images/I/81vJyb43URL._SL1500_.jpg"},
  {name: "candy", image: "https://images.heb.com/is/image/HEBGrocery/000121400"},
  {name: "drink", image: "https://media.istockphoto.com/photos/cocacola-classic-in-a-glass-bottle-picture-id499208007?k=20&m=499208007&s=612x612&w=0&h=ZGZi6HI8himQzfsWxH9Ak3CU2zFSGK4gyzAHnRLw7kY="}
]

export default App;
