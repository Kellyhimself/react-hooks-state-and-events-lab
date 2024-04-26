import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [itemsDisplayed, setItemsDisplayed] = useState(items);

  function handleSelected(e) {
    setSelectedCategory(e.target.value);

    const newArray = itemsDisplayed.filter(
      (item) => item.category !== selectedCategory || selectedCategory === "All"
    );
    setItemsDisplayed(newArray);
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelected}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsDisplayed
          .filter(
            (item) =>
              item.category === selectedCategory || selectedCategory === "All"
          )
          .map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
          ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
