import { FormEvent, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  updateTodo,
} from "../state-management/features/todo/todoSlice";

function AddTodo() {
  const selectedTodo = useSelector((state: any) => state.selectedTodo);
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("checking on every change -< ", selectedTodo);
    setTodo(selectedTodo ? selectedTodo.text : "");
    return () => {
      // Cleanup code (optional)
    };
  }, [selectedTodo]); // selectedTodo is a dependency

  const addTodoHandler = (e: FormEvent) => {
    e.preventDefault();

    dispatch(
      selectedTodo ? updateTodo({ ...selectedTodo, text: todo }) : addTodo(todo)
    );
    setTodo("");
  };

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  };

  return (
    <>
      <form className="row g-3 needs-validation" onSubmit={addTodoHandler}>
        <div className="col-md-8 col-sm-12">
          <label className="form-label">Todo</label>
          <input
            type="text"
            className="form-control"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            required
          />
        </div>

        <div className="col-md-4 col-sm-12" style={style}>
          <button className="btn btn-primary" type="submit">
            {selectedTodo ? "Update Todo" : "Add Todo"}
          </button>
        </div>
      </form>
    </>
  );
}

export default AddTodo;
