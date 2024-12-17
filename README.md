# Stock Bull Trading Platform

A comprehensive stock trading platform for learning and practicing trading with virtual currency.

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- pnpm (Recommended) or npm
- Auth0 Account
- Finnhub API Key

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd stock-bull-trading
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory with the following variables:
   ```env
   # MongoDB Configuration
   MONGO_URI=your_mongodb_connection_string

   # Auth0 Configuration
   AUTH0_SECRET=your_auth0_secret
   AUTH0_CLIENT_ID=your_auth0_client_id
   AUTH0_DOMAIN=your_auth0_domain
   BASE_URL=http://localhost:3000

   # Finnhub API
   FINNHUB_API_KEY=your_finnhub_api_key
   ```

4. **Database Setup**
   - Ensure MongoDB is running
   - The application will automatically create required collections

5. **Start the Application**
   ```bash
   pnpm start
   ```
   The application will be available at `http://localhost:3000`

## Auth0 Setup

1. Create an Auth0 account at [auth0.com](https://auth0.com)
2. Create a new application
3. Configure the following in Auth0 Dashboard:
   - Allowed Callback URLs: `http://localhost:3000/callback`
   - Allowed Logout URLs: `http://localhost:3000`
   - Allowed Web Origins: `http://localhost:3000`
4. Copy the Client ID, Domain, and Client Secret to your `.env` file

## Features

- **User Authentication**
  - Secure login/signup via Auth0
  - Role-based access control
  - Profile management

- **Trading Features**
  - Real-time stock prices
  - Virtual wallet for paper trading
  - Buy/sell stocks
  - Transaction history

- **Portfolio Management**
  - Portfolio overview
  - Performance tracking
  - Investment analytics

- **Watchlist**
  - Add/remove stocks
  - Price alerts
  - Custom notifications

- **Admin Dashboard**
  - User management
  - System monitoring
  - Platform configuration

## Usage Guide

1. **Registration/Login**
   - Sign up using email or social login
   - Complete profile setup

2. **Trading**
   - Navigate to Trading section
   - Search for stocks
   - Place buy/sell orders
   - View order status

3. **Portfolio**
   - Check portfolio value
   - View holdings
   - Track performance

4. **Watchlist**
   - Add stocks to watchlist
   - Set price alerts
   - Monitor favorite stocks

## Troubleshooting

### Common Issues

1. **Connection Errors**
   - Verify MongoDB is running
   - Check connection string in `.env`
   - Ensure internet connectivity

2. **Auth0 Issues**
   - Verify Auth0 credentials
   - Check callback URLs
   - Clear browser cache

3. **API Limits**
   - Check Finnhub API quota
   - Verify API key validity

### Error Logs
- Check `console.log` for backend errors
- Browser console for frontend issues
- MongoDB logs for database errors

## Development

### Running in Development Mode
```bash
pnpm run dev
```

### Testing
```bash
pnpm test
```

### Code Style
- Follow ESLint configuration
- Run linter: `pnpm lint`
- Format code: `pnpm format`

## Support

For issues and support:
1. Check the [Issues](https://github.com/your-repo/issues) section
2. Contact team members:
   - Jeeva Krishnasamy – jek283@pitt.edu
   - Abhigyan Kishor- abk171@pitt.edu
   - Azib Zahid – azz8@pitt.edu
   - Anurag Chaturvedi – anc527@pitt.edu

## License

This project is licensed under the MIT License.
