import React, { useState, useEffect } from "react";
import axios from "axios";

export default function EditTodo({ match: { params }, history }) {
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/api/todos/${params.id}`)
      .then(res => {
        const {
          completed,
          description,
          priority,
          title
        } = res.data;
        setCompleted(completed);
        setDescription(description);
        setPriority(priority);
        setTitle(title);
      })
      .then(() => setIsLoading(false))
      .catch(err => {
        console.log(err);
      });
  }, [params.id]);

  const onSubmit = e => {
    e.preventDefault();

    const newTodo = {
      description,
      title,
      priority,
      completed
    };

    axios
      .put(`http://localhost:3030/api/todos/${params.id}`, newTodo)
      .then(res => console.log(res.data))
      .then(() => history.push("/"));
  };

  const deleteTodo = e => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3030/api/todos/${params.id}`)
      .then(res => console.log(res.data))
      .then(() => history.push("/"));
  };

  return !isLoading ? (
    <div style={{ marginTop: 20 }}>
      <h3>Edit Todo</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title: </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              name="priorityOptions"
              id="priorityLow"
              value="Low"
              checked={priority === "Low"}
              onChange={e => setPriority(e.target.value)}
            />
            <label htmlFor="priorityLow" className="form-check-label">
              Low
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              name="priorityOptions"
              id="priorityMedium"
              value="Medium"
              checked={priority === "Medium"}
              onChange={e => setPriority(e.target.value)}
            />
            <label htmlFor="priorityMedium" className="form-check-label">
              Medium
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              name="priorityOptions"
              id="priorityHigh"
              value="High"
              checked={priority === "High"}
              onChange={e => setPriority(e.target.value)}
            />
            <label htmlFor="priorityHigh" className="form-check-label">
              High
            </label>
          </div>
        </div>
        <div className="form-check form-check-inline">
          <input
            type="checkbox"
            className="form-check-input"
            name="completedCheckbox"
            id="completedCheckbox"
            value={completed}
            checked={completed}
            onChange={e => setCompleted(!completed)}
          />
          <label htmlFor="completedCheckbox" className="form-check-label">
            Completed
          </label>
        </div>
        <br />
        <br />
        <div className="form-group">
          <input type="submit" className="btn btn-primary" value="Update Todo" />

          <input
            type="button"
            className="btn btn-danger float-right"
            value="Delete Todo"
            onClick={deleteTodo}
          />
        </div>
      </form>
    </div>
  ) : (
      <div>Getting Todo ..</div>
    );
}
