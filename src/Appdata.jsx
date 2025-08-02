function Appdata({ task, onRemove }) {
  return (
    <div className="container text-center mb-2">
      <div className="row justify-content-center">
        <div className="col-6">{task.text}</div>
        <div className="col-4">{task.date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger w-10"
            onClick={onRemove}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default Appdata;