import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [predictedResult, setPredictedResult] = useState({});
  const fetchAge = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      console.log(res.data);
      setPredictedResult(res.data);
    });
  };

  return (
    <div className="App">
      <input
        placeholder="ex. Aida..."
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={fetchAge}>Predict age</button>
      <h1>age is : {predictedResult?.age}</h1>
      <h1>name is : {predictedResult?.name}</h1>
    </div>
  );
}

export default App;
