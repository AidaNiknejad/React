import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [generateExcuse, setGenerateExcuse] = useState("");
  const [excuse, setExcuse] = useState("");
  useEffect(() => {
    fetchExcuse();
  }, []);
  const fetchExcuse = () => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}
    `).then(
      (res) => {
        console.log(res.data);
        setGenerateExcuse(res.data[0].excuse);
      }
    );
  };

  return (
    <div className="App">
      <h1>Generate an excuse</h1>
      <button onClick={() => fetchExcuse("Party")}>Party</button>
      <button onClick={() => fetchExcuse("family")}>family</button>
      <button onClick={() => fetchExcuse("office")}>office</button>
      <p>{generateExcuse}</p>
    </div>
  );
}

export default App;
