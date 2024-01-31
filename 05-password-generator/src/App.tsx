import { useState, useEffect, useCallback, useRef } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [passStrength, setPassStrength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [specialCharacterAllowed, setSpecialCharacterAllowed] = useState(false);

  //ref hook when need refernce
  const passwordRef: any = useRef(null);

  // to memorized or cache function refernce
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (specialCharacterAllowed) str += '!@$%^&*()_+-={}[]|;:"<>,./?';

    for (let i = 0; i < passStrength; i++) {
      const charAtIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charAtIndex);
    }

    setPassword(pass);
  }, [passStrength, numAllowed, specialCharacterAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [passStrength, numAllowed, specialCharacterAllowed, passwordGenerator]);

  // this function can also be used using useCallback hook (for optimization)
  const copyPasswordToClipboard = () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto px-4 pb-3 my-8 shadow-lg rounded-lg text-orange-500 bg-gray-700">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow-lg rounded-lg overflow-hidden mb-4">
          <input
            className="outline-none w-full py-1 px-3"
            type="text"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            ref={passwordRef}
            readOnly
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPasswordToClipboard}
          >
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              name="strenght"
              id="strength"
              min={6}
              max={100}
              className="cursor-pointer"
              value={passStrength}
              onChange={(e: any) => setPassStrength(e.target.value)}
            />
            <label>Length: {passStrength} </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name="numberAllowed"
              id="numberAllowed"
              defaultChecked={numAllowed}
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name="characterAllowed"
              id="characterAllowed"
              defaultChecked={specialCharacterAllowed}
              onChange={() => {
                setSpecialCharacterAllowed((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
