import { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = async () => {
    const response = await Axios.get("https://api.adviceslip.com/advice");
    console.log(response.data.slip.advice);
    setAdvice(response.data.slip.advice);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="App">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={fetchAdvice}>
          <span>Give Me Advice</span>
        </button>
      </div>
    </div>
  );
}

export default App;
