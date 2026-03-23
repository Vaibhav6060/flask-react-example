import { useState } from "react";
import reactLogo from "/react.svg";
import flaskLogo from "/flask.svg";
import "./App.css";

function App() {
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const backendUrl =
    import.meta.env.VITE_APP_BACKEND_URL || "http://localhost:5555";

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${backendUrl}/json`);
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setResponse({ error: "Backend not reachable ❌" });
    }
    setLoading(false);
  };

  return (
    <div className="container">
      {/* 🔥 Top Logos */}
      <div className="logos">
        <img src={reactLogo} className="logo react" />
        <span className="plus">+</span>
        <img src={flaskLogo} className="logo flask" />
      </div>

      {/* Title */}
      <h1>🚀 DevOps Project Dashboard</h1>
      <p>React Frontend + Flask Backend</p>

      {/* Button */}
      <button onClick={fetchData}>
        📡 Fetch Backend Data
      </button>

      {/* Loading */}
      {loading && <p className="loading">⏳ Loading...</p>}

      {/* Response */}
      {response && (
        <div className="response">
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
