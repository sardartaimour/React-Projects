import { useState } from "react";

function App() {
  const colors = [
    "Red",
    "Green",
    "Blue",
    "Yellow",
    "Orange",
    "Olive",
    "Purple",
    "Grey",
    "Pink",
    "Black",
    "Lavender",
  ];

  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="w-full fixed flex flex-wrap justify-center bottom-12 inst-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 px-3 py-2 rounded-xl shadow-xl bg-white">
          {colors.map((col, index) => (
            <button
              key={index}
              onClick={() => setColor(col.toLowerCase())}
              className="outline-none px-4 py-1 shadow-lg rounded-full text-white"
              style={{ backgroundColor: col.toLowerCase() }}
            >
              {col}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
