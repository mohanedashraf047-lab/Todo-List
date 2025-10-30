export default function From({ description, setDescription, onAddItem }) {
  function handleSubmit(e) {
    e.preventDefault();

    // ✅ Trim and validate input
    if (!description.trim()) {
      alert("Please enter a task");
      return;
    }

    const newItem = {
      id: Date.now(),
      description: description.trim(), // optional: trim before saving
      selected: false,
    };

    onAddItem(newItem);
    setDescription("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-control">
        <input
          type="text"
          placeholder="Enter a task"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn-add">Add</button>
      </div>
    </form>
  );
}
