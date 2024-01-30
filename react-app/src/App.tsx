import ListGroup from "./components/list-group/ListGroup";
import "./App.css";

function App() {
  /* 
		Props:
			Input passed to a components
			Im-matuable: un-change-able

		State:
			Data managed by component that can change over time
			matuable
	*/

  const items = ["An item", "A second item", "A third item"];
  const handleSelectItem = (item: string) => {
    console.log("Handling output in parent: ", item);
  };

  return (
    <ListGroup items={items} heading="Items" onSelectItem={handleSelectItem} />
  );
}

export default App;
