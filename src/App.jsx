import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [kittens, setKittens] = useState([]);

  useEffect(() => {
    async function doFetch() {
      const response = await fetch("http://localhost:8080/api/kittens");
      const data = await response.json();
      setKittens(data);
      console.log("data", data);
    }
    doFetch();
  }, []);

  return (
    <>
      <h1>😸 Kittens 😻</h1>
      {kittens.map((kitten) => (
        <div key={kitten.id} className="kitten-collection">
          <div className="kitten">
            <h2>{kitten.name}</h2>
            <img
              className="kitten-pic"
              src={kitten.image}
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default App;
