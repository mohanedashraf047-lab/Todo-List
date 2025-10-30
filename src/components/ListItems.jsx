import React from "react";
import Item from "./Item";

export default function ListItems({ items, handleToggleItem, handleDeleteItem }) {
  return (
    <ul className="list-items">
      {items.map((item) => (
        <Item key={item.id} item={item} handleToggleItem={handleToggleItem} handleDeleteItem={handleDeleteItem} />
      ))}
    </ul>
  );
}
