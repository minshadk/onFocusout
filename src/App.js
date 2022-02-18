import { useState } from "react";

import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleTextInputChange = (e) => setInput(e.target.value);

  const handleHandleFocusOut = () => {
    console.log(input)
  }
  // console.log(input);
  return (
    <div className="App">
      <input
        type="text"
        value={input}
        onChange={handleTextInputChange}
        id="inputtxt"
        onBlur={handleHandleFocusOut}
      />
    </div>
  );
}

export default App;
