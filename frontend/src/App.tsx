import { useState } from "react";
import "./App.css";

function App() {
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const backendUrl =
    import.meta.env.VITE_APP_BACKEND_URL || "http://localhost:5555";

  const fetchHealth = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${backendUrl}/`);
      const text = await res.text();
      setResponse({ message: text });
    } catch (err) {
      setResponse({ error: "Backend not reachable ❌" });
    }
    setLoading(false);
  };

  const fetchJson = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${backendUrl}/json`);
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setResponse({ error: "Error fetching JSON ❌" });
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>🚀 DevOps Dashboard</h1>
      <p>React + Flask + AWS Project</p>

      <div className="buttons">
        <button onClick={fetchHealth}>
          🔍 Check Backend Status
        </button>

        <button onClick={fetchJson}>
          📡 Get API Data
        </button>
      </div>

      {loading && <p>⏳ Loading...</p>}

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
