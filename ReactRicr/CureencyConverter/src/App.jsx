import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Currency from "./Components/currency";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Currency />
    </>
  );
}

export default App;
