# Stock Bull Trading Platform

## Introduction
This project is a comprehensive stock trading platform that allows users to manage their investment portfolios, track stock prices, and execute trades in real-time. The platform features a user-friendly interface, real-time stock data updates, and secure user authentication.

## Team Members
- Jeeva Krishnasamy – jek283@pitt.edu
- Abhigyan Kishor- abk171@pitt.edu
- Azib Zahid – azz8@pitt.edu
- Anurag Chaturvedi – anc527@pitt.edu

## Objective
Our project aimed to create an accessible and educational stock trading platform that allows users to learn and practice trading without financial risk. Here are our key objectives:

### Learning Goals
- Develop a full-stack web application using modern technologies (Node.js, Express, MongoDB)
- Implement secure user authentication and authorization using Auth0
- Learn real-time data integration with financial APIs
- Practice database design and optimization with MongoDB
- Gain experience with user session management and security practices

### Problem Solutions
1. **Risk-Free Trading Education**
   - Created a paper trading system with virtual currency
   - Implemented real-time market data for authentic trading experience
   - Provided comprehensive portfolio tracking and analysis tools

2. **User Engagement**
   - Developed an intuitive dashboard for portfolio management
   - Implemented watchlists for tracking favorite stocks
   - Created a notification system for price alerts and trade confirmations

3. **Platform Security**
   - Integrated Auth0 for secure user authentication
   - Implemented role-based access control
   - Secured API endpoints and sensitive user data

### Enhanced Features
1. **Advanced Trading Features**
   - Real-time stock price updates via Finnhub API
   - Market analysis tools and stock performance metrics
   - Historical price data visualization
   - Custom watchlists with email notifications

2. **User Experience**
   - Responsive dashboard design
   - Interactive stock charts and analysis tools
   - Real-time portfolio value updates
   - Trade history and performance tracking

3. **Administrative Controls**
   - Admin dashboard for user management
   - System monitoring and analytics
   - User activity tracking and reporting
   - Platform configuration management

4. **Financial Management**
   - Virtual wallet system for paper trading
   - Transaction history tracking
   - Portfolio diversification analysis
   - Profit/loss calculations and reporting

## Team Members
- Jeeva Krishnasamy – Admin Dashboard, Admin Controls
- Abhigyan Kishor- 0Auth, Landing Page, User Management
- Azib Zahid – User Dashboard, User Features
- Anurag Chaturvedi – Project Setup, Database, Integration, testing, Deployment

## Technical Architecture

### Technology Stack
- **Frontend**: EJS, JavaScript, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: Auth0
- **Real-time Updates**: Finnhub API
- **API Integration**: Financial data providers

### MVC Architecture

#### Models
- `User.js`: User profile and authentication data
- `Stock.js`: Stock information and price data
- `Transaction.js`: Trading history and order management
- `Portfolio.js`: User portfolio management
- `Watchlist.js`: User watchlist preferences
- `Notification.js`: User notifications
- `Wallet.js`: User wallet management
- `Order.js`: User order management

#### Services
- `UserService.js`: User management service
- `StockService.js`: Stock data service
- `TransactionService.js`: Transaction management service
- `PortfolioService.js`: Portfolio management service
- `WatchlistService.js`: Watchlist management service
- `NotificationService.js`: Notification service
- `WalletService.js`: Wallet management service
- `OrderService.js`: Order management service

#### Views (EJS Templates)
- Dashboard views for portfolio overview
- Stock detail pages
- Trading interface
- User profile management
- Administrative panels

#### Controllers
- Authentication controllers
- Stock trading controllers
- Portfolio management controllers
- User profile controllers
- Watchlist controllers

### Key Components
- **Middleware**: Custom middleware for authentication, error handling, and request processing
- **Services**: Dedicated services for stock prices, user management, and notifications
- **Routes**: RESTful API routes for all platform functionalities
- **Config**: Configuration files for database, authentication, and security settings

### Additional Features
Beyond the basic requirements, we implemented:
- Real-time stock price updates using API connections
- Advanced portfolio analytics and performance tracking
- Customizable watchlists for user preferences
- Integration with Auth0 for secure authentication
- MongoDB integration for data persistence
- RESTful API endpoints for external integrations
- User session management and security

## Challenges
1. **Real-time Data Integration**
   - Implementing API connections for live price updates
   - Managing connection stability and reconnection logic

2. **Authentication Flow**
   - Integrating Auth0 with custom database scripts
   - Managing user sessions and security

3. **Database Performance**
   - Optimizing MongoDB queries for large datasets
   - Managing indexes and schema design

4. **Error Handling**
   - Implementing robust error handling across the application
   - Managing asynchronous operations and promises

## Future Work
1. **Enhanced Features**
   - Implementation of advanced trading algorithms
   - Mobile application development
   - Social trading features
   - Advanced analytics dashboard

2. **Technical Improvements**
   - Migration to TypeScript for better type safety
   - Implementation of GraphQL for more efficient data fetching
   - Integration of machine learning for price predictions
   - Enhanced testing coverage

## API Documentation
The platform provides RESTful API endpoints for:
- User management
- Stock data retrieval
- Trading operations
- Portfolio management
- Watchlist operations

Detailed API documentation is available in the `/docs` directory.

## Resources
- [Auth0 Documentation](https://auth0.com/docs)
- [Mongoose Documentation](https://mongoosejs.com/docs/guide.html)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [Finnhub API Documentation](https://finnhub.io/docs/api/stock.html)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [EJS Documentation](https://ejs.co/)
- [AOS Documentation](https://github.com/michalsnik/aos)

## Security
- Implements secure authentication via Auth0
- Uses environment variables for sensitive data
- Implements rate limiting and request validation
- Follows security best practices for user data protection

## Conclusion
Throughout this project, we gained invaluable experience with modern web technologies and development practices. Here's our reflection on the learning journey:

### Key Learnings
1. **Full-Stack Development**
   - Mastered Node.js and Express.js for backend development
   - Gained proficiency in EJS templating for dynamic frontend rendering
   - Learned to integrate MongoDB for efficient data management
   - Implemented RESTful API design principles

2. **Authentication & Security**
   - Implemented Auth0 for robust user authentication
   - Learned best practices for securing user data
   - Understood session management and JWT implementation
   - Gained experience with role-based access control

3. **Real-Time Data Integration**
   - Successfully integrated Finnhub API for live stock data
   - Implemented efficient data caching mechanisms
   - Managed API rate limiting and error handling
   - Developed real-time update systems

4. **Modern Development Practices**
   - Adopted MVC architecture for clean code organization
   - Implemented responsive design with Bootstrap
   - Used Git for version control and collaboration
   - Practiced agile development methodologies

### Future Course Recommendations
1. **Additional Technologies**
   - GraphQL for more efficient data querying
   - WebSocket for real-time bidirectional communication
   - TypeScript for enhanced type safety
   - React/Vue.js for more dynamic frontend development
   - Docker for containerization and deployment

2. **Development Concepts**
   - Microservices architecture
   - Test-Driven Development (TDD)
   - CI/CD pipelines
   - Cloud deployment (AWS/Azure)
   - Performance optimization techniques

3. **Industry Standards**
   - API documentation tools (Swagger/OpenAPI)
   - Code quality tools (ESLint, Prettier)
   - Security best practices (OWASP)
   - Monitoring and logging systems

This project has been an excellent opportunity to apply theoretical knowledge in a practical setting, and we believe these additional technologies and concepts would further enhance the learning experience in future iterations of the course.