import React, { useState, useEffect } from "react";
import axios from "axios";

import Todo from "./Todo";

export default function TodosList() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function fetchTodos() {
    axios
      .get("http://localhost:3030/api/todos")
      .then(res => {
        setTodos(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchTodos();
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : todos.length ? (
    <div>
      <h3>Todos List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => {
            return <Todo key={todo._id} todo={todo} />;
          })}
        </tbody>
      </table>
    </div>
  ) : (
    <div>There are no Todos yet...</div>
  );
}
