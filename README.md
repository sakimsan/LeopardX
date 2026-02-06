<div align="center">

# 🐆 LeopardX


[![License](https://img.shields.io/badge/License-Apache%202.0-FF6B35?style=for-the-badge&logo=apache&logoColor=white)](LICENSE)
[![Python](https://img.shields.io/badge/Python-3.13+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![LangGraph](https://img.shields.io/badge/Built_with-LangGraph-00C7B7?style=for-the-badge&logo=graphql&logoColor=white)](https://github.com/langchain-ai/langgraph)
[![OpenAI](https://img.shields.io/badge/Powered_by-OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)](https://openai.com/)


**[🚀 Quick Start](#-quick-start)** • 
**[✨ Features](#-features)** • 
**[🏗️ Architecture](#️-architecture)** • 
**[📖 Documentation](#-documentation)** 

---

</div>

## 🎯 What is LeopardX?

**LeopardX** is a cutting-edge multi-agent trading framework that revolutionizes algorithmic trading through the power of Large Language Models. Like a predator stalking its prey, LeopardX combines speed, precision, and intelligence to identify and execute optimal trading opportunities.

The framework deploys an elite team of specialized AI agents—each an expert in their domain—working in perfect harmony to analyze markets, debate strategies, and execute trades with institutional-grade sophistication.

> 💡 **Philosophy**: Just as leopards are known for their adaptability and strategic hunting, LeopardX adapts to market conditions through intelligent multi-agent collaboration.

<div align="center">

### ⚡ Built for Speed • 🎯 Designed for Precision • 🧠 Powered by Intelligence

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🤖 **Multi-Agent Intelligence**
- Specialized AI agents for every aspect of trading
- Collaborative decision-making through structured debates
- Dynamic strategy adaptation based on market conditions

### 📊 **Comprehensive Analysis**
- Real-time fundamental analysis
- Technical indicator processing (RSI, MACD, Bollinger Bands)
- Sentiment analysis from news and social media
- Macroeconomic event monitoring

</td>
<td width="50%">

### 🛡️ **Enterprise-Grade Risk Management**
- Continuous portfolio risk assessment
- Multi-layer approval system
- Volatility and liquidity monitoring
- Position sizing optimization

### 🚀 **Developer Friendly**
- Modular architecture with LangGraph
- Easy-to-use Python API
- Interactive CLI interface
- Extensive configuration options

</td>
</tr>
</table>

---

## 🏗️ Architecture

LeopardX employs a sophisticated multi-tier agent architecture that mirrors the structure of elite trading firms:

<div align="center">


### 🎭 Agent Roles

<details>
<summary><b>📈 Analyst Team</b> - The Intelligence Gatherers</summary>

<br>

| Agent | Responsibility | Key Metrics |
|-------|---------------|-------------|
| **Fundamentals Analyst** | Financial statement analysis, valuation models | P/E, ROE, Debt Ratios, Cash Flow |
| **Sentiment Analyst** | Social media & market sentiment tracking | Sentiment Scores, Trend Analysis |
| **News Analyst** | Global news monitoring & impact assessment | Event Detection, Macro Indicators |
| **Technical Analyst** | Price action & technical pattern recognition | RSI, MACD, Volume, Support/Resistance |

</details>

<details>
<summary><b>🔬 Research Team</b> - The Strategic Thinkers</summary>

<br>

- **Bull Researcher**: Identifies growth opportunities and positive catalysts
- **Bear Researcher**: Uncovers risks and potential downsides
- **Debate Mechanism**: Structured argumentation to reach balanced conclusions

</details>

<details>
<summary><b>💼 Trader Agent</b> - The Decision Maker</summary>

<br>

Synthesizes insights from analysts and researchers to formulate trading strategies:
- Entry/exit timing optimization
- Position sizing calculations
- Risk/reward ratio assessment
- Trade execution proposals

</details>

<details>
<summary><b>🛡️ Risk & Portfolio Management</b> - The Gatekeepers</summary>

<br>

**Risk Management Team**
- Portfolio variance analysis
- VaR (Value at Risk) calculations
- Stress testing scenarios
- Liquidity assessment

**Portfolio Manager**
- Final approval authority
- Portfolio allocation decisions
- Multi-strategy coordination

</details>

---

## 🚀 Installation

### Prerequisites

Python 3.13+ and Git are required.

### Quick Install

```bash
# Clone the repository
git clone https://github.com/sakimsan/LeopardX.git
cd LeopardX

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

### Using Conda

```bash
conda create -n leopardx python=3.13
conda activate leopardx
pip install -r requirements.txt
```

---

## 🔑 API Configuration

LeopardX requires API keys from the following providers:

<table>
<tr>
<td align="center" width="33%">

### OpenAI
<img src="https://img.shields.io/badge/Required-Yes-success" alt="Required"/>

For all LLM-powered agents

[Get API Key →](https://platform.openai.com/api-keys)

</td>
<td align="center" width="33%">

### Alpha Vantage
<img src="https://img.shields.io/badge/Required-Yes-success" alt="Required"/>

For market data & fundamentals

[Get API Key →](https://www.alphavantage.co/support/#api-key)

</td>
<td align="center" width="33%">

### Optional APIs
<img src="https://img.shields.io/badge/Required-No-informational" alt="Optional"/>

Additional data sources

See [docs](#documentation)

</td>
</tr>
</table>

### Setup Methods

**Option 1: Environment Variables**

```bash
export OPENAI_API_KEY="sk-..."
export ALPHA_VANTAGE_API_KEY="your-key"
```

**Option 2: .env File (Recommended)**

```bash
cp .env.example .env
# Edit .env with your API keys
```

Example `.env` file:

```ini
OPENAI_API_KEY=sk-...
ALPHA_VANTAGE_API_KEY=your-key
```

---

## ⚙️ Configuration

### Core Settings

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `deep_think_model` | str | `"o1-preview"` | Model for complex reasoning tasks |
| `quick_think_model` | str | `"gpt-4o"` | Model for rapid analysis |
| `max_debate_rounds` | int | `1` | Number of research debate iterations |
| `risk_tolerance` | str | `"moderate"` | Risk profile: conservative/moderate/aggressive |
| `max_position_size` | float | `10000.0` | Maximum position size (USD) |
| `enable_short_selling` | bool | `False` | Allow short positions |

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

<table>
<tr>
<td align="center" width="25%">

### 🐛 Bug Reports
Found a bug?
[Open an issue](https://github.com/sakimsan/LeopardX/issues)

</td>
<td align="center" width="25%">

### 💡 Feature Requests
Have an idea?
[Start a discussion](https://github.com/sakimsan/LeopardX/discussions)

</td>
<td align="center" width="25%">

### 📝 Documentation
Improve docs
[Edit on GitHub](https://github.com/sakimsan/LeopardX)

</td>
<td align="center" width="25%">

### 🔧 Code
Submit a PR
[Contributing Guide](CONTRIBUTING.md)

</td>
</tr>
</table>

---

## 📄 License

This project is licensed under the **Apache License 2.0** - see the [LICENSE](LICENSE) file for details.

```
Copyright 2025 LeopardX Contributors

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
```

---

<div align="center">

### Built with ❤️ in Germany

**LeopardX** - *Because the market belongs to those who adapt the fastest*

[⬆ Back to Top](#-leopardx)

</div>