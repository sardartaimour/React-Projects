import { useSelector, useDispatch } from "react-redux";
import {
  removeTodo,
  selectedTodo,
} from "../state-management/features/todo/todoSlice";

function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todos);

  const removeTodoHandler = (e: MouseEvent, index: number) => {
    dispatch(removeTodo(index));
  };

  const style = {
    p: {
      display: "flex",
      alignItems: "center",
      margin: 0,
      flex: 1,
    },
    button: {
      marginRight: "12px",
    },
  };

  return (
    <>
      <h1>Todos List</h1>

      {todos.length === 0 && <p>no item found!</p>}

      <ul className="list-group">
        {todos.map((todo: any) => (
          <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <p style={style.p}>{todo.text}</p>

            <button
              type="button"
              style={style.button}
              className="btn btn-outline-primary"
              onClick={(e: any) => dispatch(selectedTodo(todo))}
            >
              Edit
            </button>

            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={(e: any) => removeTodoHandler(e, todo.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
