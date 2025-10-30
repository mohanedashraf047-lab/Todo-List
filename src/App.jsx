import { useEffect, useState } from "react";
import Title from "./components/Title";
import ListItems from "./components/ListItems";
import Form from "./components/Form";

export default function App() {
  // get items from local storage if exists
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("items");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  // save to local storage
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const [description, setDescription] = useState("");

  // handleAddItem for adding
  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  // handleToggleItem for checking and unchecking
  function handleToggleItem(id) {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, selected: !item.selected } : item
    );
    setItems(newItems);
  }

  // handleDeleteItem for deleting
  function handleDeleteItem(id) {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  }

  return (
    <main id="main">
      <div className="container">
        <div className="todo-list">
          <Title />
          <Form
            description={description}
            onAddItem={handleAddItem}
            setDescription={setDescription}
          />
          <ListItems
            items={items}
            handleToggleItem={handleToggleItem}
            handleDeleteItem={handleDeleteItem}
          />
          <button
            className="btn-clear"
            onClick={() => {
              if (confirm("Are you sure you want to clear all tasks?")) {
                setItems([]);
                localStorage.removeItem("items");
              }
            }}
          >
            Clear All
          </button>
        </div>
      </div>
    </main>
  );
}
