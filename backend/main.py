from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional

# Deine bestehenden Imports
from tradingagents.graph.trading_graph import TradingAgentsGraph
from tradingagents.default_config import DEFAULT_CONFIG
from dotenv import load_dotenv

# 1. Setup
load_dotenv()
app = FastAPI()

# 2. CORS aktivieren, damit dein Frontend (React) zugreifen darf
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In der Produktion später auf deine URL einschränken
    allow_methods=["*"],
    allow_headers=["*"],
)

# 3. Trading Agent Konfiguration (einmalig beim Start)
config = DEFAULT_CONFIG.copy()
config["deep_think_llm"] = "gpt-4o-mini"
config["quick_think_llm"] = "gpt-4o-mini"
config["max_debate_rounds"] = 1
config["data_vendors"] = {
    "core_stock_apis": "yfinance",
    "technical_indicators": "yfinance",
    "fundamental_data": "alpha_vantage",
    "news_data": "alpha_vantage",
}

# Initialisierung des Agenten
ta = TradingAgentsGraph(debug=True, config=config)

# Daten-Modell für die Anfrage vom Frontend
class TradeRequest(BaseModel):
    symbol: str
    date: Optional[str] = "2025-05-10"

# 4. Der API-Endpunkt
@app.post("/api/analyze")
async def analyze_stock(request: TradeRequest):
    try:
        # Hier wird deine Logik ausgeführt
        # Wir nutzen die Daten aus dem Request (symbol und date)
        _, decision = ta.propagate(request.symbol, request.date)

        # Rückgabe an das Frontend als JSON
        return {
            "symbol": request.symbol,
            "date": request.date,
            "decision": decision
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# 5. Server starten
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)