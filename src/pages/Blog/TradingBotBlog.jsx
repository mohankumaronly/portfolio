import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Calendar, Clock, ArrowLeft, Tag, Twitter, Linkedin, Facebook, 
  TrendingUp, BarChart3, LineChart, DollarSign, Activity, 
  AlertCircle, Cpu, Shield, Zap 
} from "lucide-react";

const TradingBotBlog = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  return (
    <article className="min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary dark:bg-primary-dark">
      <div className="max-w-3xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all articles
          </Link>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 rounded-full">
              Trading & Finance
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
              <Calendar className="w-3 h-3" />
              February 22, 2024
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
              <Clock className="w-3 h-3" />
              10 min read
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Algorithmic Trading: Building a Crypto Trading Bot with Node.js
          </h1>
          
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Learn how to build a production-ready cryptocurrency trading bot using Node.js, 
            technical indicators, and real-time market data. From basic strategies to risk management.
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex items-center gap-3"
        >
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
            M
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Written by</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">Mohan</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Full-Stack MERN Developer & Trading Enthusiast</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800"
        >
          <img 
            src="https://images.unsplash.com/photo-1634704784915-aacf363b021f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D" 
            alt="Cryptocurrency Trading Bot Concept"
            className="w-full h-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8"
        >
          <section className="mb-8">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The cryptocurrency market never sleeps, and neither should your trading strategy. 
              In 2024, algorithmic trading accounts for over 70% of crypto exchange volume. 
              Whether you're a developer looking to automate your trading or a trader wanting 
              to understand the technology, building your own trading bot is an exciting journey 
              that combines finance, programming, and real-time systems.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              In this comprehensive guide, I'll walk you through building a production-ready 
              cryptocurrency trading bot using Node.js, integrating with Binance API, implementing 
              technical indicators, and most importantly—risk management strategies that protect 
              your capital.
            </p>
          </section>

          <section className="mb-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <DollarSign className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <div className="text-xl font-bold text-blue-600 dark:text-blue-400">$2.1T</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Market Cap</div>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <Activity className="w-6 h-6 text-green-600 dark:text-green-400 mx-auto mb-2" />
                <div className="text-xl font-bold text-green-600 dark:text-green-400">70%</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Algo Trading</div>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <BarChart3 className="w-6 h-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                <div className="text-xl font-bold text-purple-600 dark:text-purple-400">24/7</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Market Hours</div>
              </div>
              <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <Zap className="w-6 h-6 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
                <div className="text-xl font-bold text-orange-600 dark:text-orange-400">2.5s</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Block Time</div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4 flex items-center gap-2">
              <Cpu className="w-6 h-6 text-green-500" />
              Trading Bot Architecture
            </h2>

            <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl my-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">System Components</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Data Feed
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• WebSocket connections</li>
                    <li>• Real-time order books</li>
                    <li>• Kline/candlestick data</li>
                    <li>• Trade history</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Strategy Engine
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Technical indicators</li>
                    <li>• Signal generation</li>
                    <li>• Risk assessment</li>
                    <li>• Position sizing</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Order Manager
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Order execution</li>
                    <li>• Retry logic</li>
                    <li>• Fee calculation</li>
                    <li>• Order tracking</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Risk Management
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Stop-losses</li>
                    <li>• Take-profit</li>
                    <li>• Drawdown limits</li>
                    <li>• Portfolio balance</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Setting Up the Binance API Connection
            </h2>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-4">
              <pre className="text-sm text-gray-300 font-mono">
                <code>{`// Install dependencies
// npm install binance-api-node axios ws technicalindicators

const Binance = require('binance-api-node').default;

// Initialize the client
const client = Binance({
  apiKey: process.env.BINANCE_API_KEY,
  apiSecret: process.env.BINANCE_SECRET_KEY,
  getTime: () => Date.now() // For timestamp synchronization
});

// WebSocket connection for real-time data
const symbol = 'BTCUSDT';
const ws = client.ws.candles(symbol, '1m', candle => {
  console.log(\`New candle: \${candle.close}\`);
  
  // Your trading logic here
  analyzeAndTrade(candle);
});

// REST API example - get account info
const getAccountInfo = async () => {
  try {
    const account = await client.accountInfo();
    console.log('Balances:', account.balances);
    return account;
  } catch (error) {
    console.error('API Error:', error);
  }
};`}</code>
              </pre>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4 flex items-center gap-2">
              <LineChart className="w-6 h-6 text-blue-500" />
              Implementing a Simple Moving Average Crossover Strategy
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              One of the most popular and effective strategies for beginners is the 
              Moving Average Crossover. When the fast MA crosses above the slow MA, 
              it generates a buy signal (Golden Cross). When it crosses below, it 
              generates a sell signal (Death Cross).
            </p>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-4">
              <pre className="text-sm text-gray-300 font-mono">
                <code>{`const technicalIndicators = require('technicalindicators');

class MACrossoverStrategy {
  constructor(shortPeriod = 9, longPeriod = 21) {
    this.shortPeriod = shortPeriod;
    this.longPeriod = longPeriod;
    this.prices = [];
    this.position = null; // 'long', 'short', or null
  }

  addPrice(price) {
    this.prices.push(price);
    
    // Keep only necessary history
    if (this.prices.length > this.longPeriod * 2) {
      this.prices.shift();
    }
  }

  calculateSignals() {
    if (this.prices.length < this.longPeriod) {
      return { signal: 'WAIT', reason: 'Insufficient data' };
    }

    // Calculate moving averages
    const shortMA = technicalIndicators.SMA.calculate({
      period: this.shortPeriod,
      values: this.prices.slice(-this.shortPeriod * 2)
    }).pop();

    const longMA = technicalIndicators.SMA.calculate({
      period: this.longPeriod,
      values: this.prices
    }).pop();

    // Generate signals
    if (shortMA > longMA && this.position !== 'long') {
      return { signal: 'BUY', shortMA, longMA };
    } else if (shortMA < longMA && this.position !== 'short') {
      return { signal: 'SELL', shortMA, longMA };
    }

    return { signal: 'HOLD', shortMA, longMA };
  }
}`}</code>
              </pre>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-red-500" />
              Critical Risk Management
            </h2>

            <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 p-6 rounded-xl mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500" />
                Never Skip These Risk Controls
              </h3>
              
              <div className="grid gap-4">
                <div className="flex gap-3">
                  <span className="text-red-500 font-bold">1.</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Position Sizing:</strong>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Never risk more than 1-2% of your capital on a single trade</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <span className="text-red-500 font-bold">2.</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Stop-Loss Orders:</strong>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Always set automatic stop-losses to limit downside</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <span className="text-red-500 font-bold">3.</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Maximum Drawdown:</strong>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Stop trading if losses exceed 10% in a day</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <span className="text-red-500 font-bold">4.</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Paper Trading First:</strong>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Test your strategy for at least 30 days with fake money</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-4">
              <pre className="text-sm text-gray-300 font-mono">
                <code>{`// Risk Manager Implementation
class RiskManager {
  constructor(config) {
    this.maxPositionSize = config.maxPositionSize || 100; // USDT
    this.maxDailyLoss = config.maxDailyLoss || 50; // USDT
    this.stopLossPercent = config.stopLossPercent || 2; // 2%
    this.takeProfitPercent = config.takeProfitPercent || 4; // 4%
    
    this.dailyPnL = 0;
    this.openPositions = [];
  }

  calculatePositionSize(price, balance) {
    // Risk-based position sizing
    const riskAmount = balance * 0.02; // 2% risk per trade
    const stopLossDistance = price * (this.stopLossPercent / 100);
    const positionSize = riskAmount / stopLossDistance;
    
    return Math.min(positionSize, this.maxPositionSize);
  }

  shouldPlaceOrder(side, price, balance) {
    // Check daily loss limit
    if (this.dailyPnL <= -this.maxDailyLoss) {
      console.log('Daily loss limit reached. Stopping trading.');
      return false;
    }
    
    // Check if we have enough balance
    if (balance < price * 0.001) { // Minimum trade size
      return false;
    }
    
    return true;
  }

  calculateStopLoss(entryPrice, side) {
    const offset = entryPrice * (this.stopLossPercent / 100);
    return side === 'BUY' 
      ? entryPrice - offset  // Long: stop below entry
      : entryPrice + offset; // Short: stop above entry
  }
}`}</code>
              </pre>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Putting It All Together
            </h2>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-4">
              <pre className="text-sm text-gray-300 font-mono">
                <code>{`// Main Trading Bot Class
class TradingBot {
  constructor(config) {
    this.client = new Binance(config);
    this.strategy = new MACrossoverStrategy(9, 21);
    this.riskManager = new RiskManager(config);
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    
    // Connect to WebSocket
    this.ws = this.client.ws.candles('BTCUSDT', '1m', 
      async (candle) => {
        if (!this.isRunning) return;
        
        await this.processCandle(candle);
      }
    );
    
    console.log('Trading bot started');
  }

  async processCandle(candle) {
    const price = parseFloat(candle.close);
    
    // Update strategy
    this.strategy.addPrice(price);
    const signal = this.strategy.calculateSignals();
    
    if (signal.signal === 'BUY' || signal.signal === 'SELL') {
      await this.executeTrade(signal);
    }
  }

  async executeTrade(signal) {
    // Get account balance
    const account = await this.client.accountInfo();
    const usdtBalance = account.balances
      .find(b => b.asset === 'USDT').free;
    
    // Check risk parameters
    if (!this.riskManager.shouldPlaceOrder(
      signal.signal, 
      signal.shortMA, 
      usdtBalance
    )) {
      return;
    }
    
    // Calculate position size
    const size = this.riskManager.calculatePositionSize(
      signal.shortMA, 
      usdtBalance
    );
    
    // Place order
    try {
      const order = await this.client.order({
        symbol: 'BTCUSDT',
        side: signal.signal.toLowerCase(),
        type: 'MARKET',
        quantity: size.toFixed(6)
      });
      
      console.log('Order placed:', order);
      
      // Update strategy position
      this.strategy.position = signal.signal === 'BUY' 
        ? 'long' 
        : 'short';
        
    } catch (error) {
      console.error('Order failed:', error);
    }
  }

  stop() {
    this.isRunning = false;
    if (this.ws) {
      this.ws();
    }
    console.log('Trading bot stopped');
  }
}

// Usage
const bot = new TradingBot({
  apiKey: process.env.BINANCE_API_KEY,
  apiSecret: process.env.BINANCE_SECRET_KEY,
  maxPositionSize: 50,
  maxDailyLoss: 20
});

bot.start();

// Stop after 1 hour
setTimeout(() => bot.stop(), 60 * 60 * 1000);`}</code>
              </pre>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Performance Optimization Tips
            </h2>

            <div className="grid gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🚀 WebSocket Reconnection</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Implement automatic reconnection logic. Binance WebSockets can disconnect 
                  during maintenance or network issues.
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">⚡ Rate Limiting</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Binance has rate limits (1200 requests per minute). Implement request queuing 
                  and backoff strategies.
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">📊 Database Logging</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Store all trades, signals, and errors in MongoDB for analysis and debugging.
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">📈 Backtesting</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Always backtest your strategy with historical data before going live. 
                  Use libraries like 'backtrader' or build your own.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Conclusion & Next Steps
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Building a crypto trading bot is an exciting project that combines multiple 
              disciplines: real-time systems, financial markets, and software architecture. 
              The bot we've built here is just the beginning—a foundation you can extend 
              with more sophisticated strategies, machine learning models, or multi-exchange support.
            </p>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800 p-6 rounded-xl my-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-500" />
                Important Disclaimer
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Trading cryptocurrencies involves substantial risk of loss and is not suitable 
                for all investors. The strategies and code provided are for educational purposes 
                only. Always start with small amounts, use stop-losses, and never invest more 
                than you can afford to lose. Past performance does not guarantee future results.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
              What's Next?
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex gap-2">
                <span className="text-green-500">✓</span>
                Add support for multiple trading pairs
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">✓</span>
                Implement more indicators (RSI, MACD, Bollinger Bands)
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">✓</span>
                Build a React dashboard to monitor performance
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">✓</span>
                Add Telegram/Discord notifications
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">✓</span>
                Implement machine learning for price prediction
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-xl border border-green-200 dark:border-green-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                Useful Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                    • Binance API Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                    • Technical Indicators Library for Node.js
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                    • GitHub: Complete Trading Bot Source Code
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                    • Backtesting with Historical Crypto Data
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 pt-6 border-t border-gray-300 dark:border-gray-800"
        >
          <div className="flex items-center gap-2 flex-wrap">
            <Tag className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            {["Trading", "Cryptocurrency", "Node.js", "Algorithmic Trading", "Binance", "Finance", "WebSocket", "Real-time"].map(tag => (
              <Link
                key={tag}
                to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full transition"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-6 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Share:</span>
            <a 
              href={`https://twitter.com/intent/tweet?text=Building a Crypto Trading Bot with Node.js - Complete Guide&url=${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a 
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
          
          <button 
            onClick={copyToClipboard}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
          >
            Copy Link
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-800"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Related Articles
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              to="/blog/future-full-stack-development-2024"
              className="group p-4 bg-gray-100 dark:bg-black/40 rounded-lg border border-gray-300 dark:border-gray-800 hover:shadow-md transition"
            >
              <span className="text-xs text-blue-600 dark:text-blue-400">Web Development</span>
              <h4 className="mt-2 font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                The Future of Full-Stack Development in 2026
              </h4>
              <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                Feb 10, 2026 · 5 min read
              </p>
            </Link>
            
            <Link
              to="/blog/jwt-authentication-guide"
              className="group p-4 bg-gray-100 dark:bg-black/40 rounded-lg border border-gray-300 dark:border-gray-800 hover:shadow-md transition"
            >
              <span className="text-xs text-blue-600 dark:text-blue-400">Security</span>
              <h4 className="mt-2 font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                Building Production-Grade Authentication with JWT
              </h4>
              <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                Feb 15, 2026 · 8 min read
              </p>
            </Link>
          </div>
        </motion.div>
      </div>
    </article>
  );
};

export default TradingBotBlog;