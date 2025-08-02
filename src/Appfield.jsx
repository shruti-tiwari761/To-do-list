import { useState } from "react";

function Appfield({ onAdd }) {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  const handleAdd = () => {
    if (text.trim() && date) {
      onAdd({ text, date });
      setText("");
      setDate("");
    }
  };

  return (
    <div className="container text-center mb-3">
      <div className="row justify-content-center">
        <div className="col-6">
          <input
            type="text"
            placeholder="Add a new task"
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success w-100"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Appfield;