import { useEffect, useState } from "react";
import "./App.css";

// import Counter from "./Counter";

function App() {
  const [kittens, setKittens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/kittens")
      .then((response) => response.json())
      .then((data) => {
        setKittens(data);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1>😸 Kittens 😻</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Uh oh! Something went wrong. Please try again later.</p>}
      <div className="kitten-collection">
        {kittens.map((kitten) => (
          <div key={kitten.id} className="kitten">
            <h2>{kitten.name}</h2>
            <img
              className="kitten-pic"
              style={{ maxWidth: "7rem" }}
              src={kitten.image}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
