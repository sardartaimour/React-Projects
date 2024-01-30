import { Fragment, MouseEvent, useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (event: MouseEvent, index: number, item: string) => {
    console.log(event, " index: ", index);
    setSelectedIndex(index);
    onSelectItem(item);
  };

  return (
    <Fragment>
      <h1>{heading}</h1>

      {items.length === 0 && <p>no item found!</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={(event) => handleClick(event, index, item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
