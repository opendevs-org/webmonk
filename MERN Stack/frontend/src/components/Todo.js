import React from "react";
import { Link } from "react-router-dom";

export default function Todo({ todo }) {
  return (
    <tr>
      <td className={todo.completed ? "completed" : ""}>{todo.title}</td>
      <td className={todo.completed ? "completed" : ""}>
        {todo.description}
      </td>
      <td className={todo.completed ? "completed" : ""}>
        {todo.priority}
      </td>
      <td>
        <Link to={`/edit/${todo._id}`}>Edit</Link>
      </td>
    </tr>
  );
}
