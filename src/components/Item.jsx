import { Check, Trash2 } from "lucide-react"; // ✅ correct import path

export default function Item({ item, handleToggleItem, handleDeleteItem }) {
  return (
    <li className="item">
      <div>
        <label className="custom-checkbox">
          {/* Use onChange instead of onClick for checkboxes */}
          <input
            type="checkbox"
            checked={item.selected}
            onChange={() => handleToggleItem(item.id)}
          />
          {/* Conditional rendering for checkmark */}
          {item.selected ? (
            <Check className="check" color="#fff" />
          ) : (
            <span className="checkmark"></span>
          )}
        </label>

        <span className={`description ${item.selected ? "selected" : ""}`}>
          {item.description}
        </span>
      </div>

      <button className="btn-remove" onClick={() => handleDeleteItem(item.id)}>
        <Trash2 size={16} />
      </button>
    </li>
  );
}
