import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

import "./Item.css"


const Item = ({name, image}) => {
  const [servings, setServings] = useState(1);

  useEffect(() => {
    const savedServings = JSON.parse(localStorage.getItem(`vending-${name}`));
    if (savedServings) {
      setServings(savedServings);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(`vending-${name}`, JSON.stringify(servings))
  }, [servings])


  const handleClick = () => {
    setServings(s => s + 1);
  }

  return (
    <div className="Item">
      <img src={image} alt={name} />
      <h3>Servings eaten: {servings}</h3>
      <button className="Item-eatbtn" onClick={handleClick}>Eat more</button>
      <Link exact to="/">Go back</Link>
    </div>
  );
}

export default Item;
