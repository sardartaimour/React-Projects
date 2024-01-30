import AddTodo from "./app/components/addTodo";
import Todos from "./app/components/todos";

function App() {
  return (
    <>
      <h1>Learn React Redux Toolkit</h1>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <AddTodo />
            <Todos />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
