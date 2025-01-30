import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  if (items.length === 0) {
    return (
      <>
        <h1>{heading}</h1>
        <p>No items found.</p>
      </>
    );
  }
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              setSelectedItem(item);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="d-grid gap-2 mt-3">
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            if (selectedItem) {
              console.log(` ${selectedItem} was selected.`);
            } else {
              console.log("No city selected.");
            }
          }}
        >
          Select city
        </button>
      </div>
      {selectedItem && (
        <p className="mt-3">
          <strong>{selectedItem}</strong> city was selected.
        </p>
      )}
    </>
  );
}
export default ListGroup;
