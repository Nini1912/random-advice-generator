import { useState, useEffect, useCallback } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState({
    id: "",
    advice: "",
  });
  const [loading, setLoading] = useState(true);

  const newAdvice = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice({
        id: data.slip.id,
        advice: data.slip.advice,
      });
    } catch (error) {
      console.error("Error fetching advice:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    newAdvice();
  }, [newAdvice]);

  return (
    <div className="advice-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <span className="advice-number-heading">ADVICE #{advice.id}</span>
          <p>&quot;{advice.advice}&quot;</p>
        </>
      )}
      <div className="img-container">
        <img src={process.env.PUBLIC_URL + '/Group.svg'} alt="" />
      </div>
      <button onClick={newAdvice} disabled={loading}>
        <img src={process.env.PUBLIC_URL + '/Shape.svg'} alt="get new advice" />
      </button>
    </div>
  );
}

export default App;
