import React, { useState } from 'react';
import axios from 'axios';
import { Play, Activity, TrendingUp, TrendingDown, Minus } from 'lucide-react';

function App() {
  const [symbol, setSymbol] = useState('AAPL');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const runAnalysis = async () => {
    setLoading(true);
    try {
      // Verbindung zu deinem FastAPI Backend
      const response = await axios.post('http://localhost:8000/api/analyze', {
        symbol: symbol,
        date: "2025-05-10" // Standardwert aus deinem Backend
      });
      setResult(response.data);
    } catch (error) {
      console.error("Fehler:", error);
      alert("Das Backend ist scheinbar nicht erreichbar. Läuft der Python-Server?");
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', backgroundColor: '#0f172a', color: 'white', minHeight: '100vh' }}>
      <h1>Trading Agent Dashboard</h1>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value.toUpperCase())}
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #334155', background: '#1e293b', color: 'white' }}
        />
        <button
          onClick={runAnalysis}
          disabled={loading}
          style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#3b82f6', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          {loading ? <Activity size={18} /> : <Play size={18} />} Analyse starten
        </button>
      </div>

      {result && (
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '10px', border: '1px solid #334155' }}>
          <h2>Ergebnis für {result.symbol}</h2>
          <div style={{ fontSize: '24px', fontWeight: 'bold', display: 'flex', itemsCenter: 'center', gap: '10px' }}>
            Status: {result.decision}
          </div>
          <p style={{ color: '#94a3b8' }}>Datum der Analyse: {result.date}</p>
        </div>
      )}
    </div>
  );
}

export default App;