// Login script
function login(email, password, callback) {
  const bcrypt = require('bcrypt');
  const MongoClient = require('mongodb@3.1.4').MongoClient;
  
  // Use configuration variables from Auth0
  const MONGO_URL = configuration.MONGO_URL || 'mongodb://user:pass@localhost';
  const DB_NAME = configuration.DB_NAME || 'db-name';
  
  const client = new MongoClient(MONGO_URL);

  client.connect(function (err) {
    if (err) return callback(err);

    const db = client.db(DB_NAME);
    const users = db.collection('users');

    users.findOne({ email: email }, function (err, user) {
      if (err || !user) {
        client.close();
        return callback(err || new WrongUsernameOrPasswordError(email));
      }

      bcrypt.compare(password, user.password, function (err, isValid) {
        client.close();

        if (err || !isValid) return callback(err || new WrongUsernameOrPasswordError(email));

        return callback(null, {
          user_id: user._id.toString(),
          nickname: user.nickname,
          email: user.email
        });
      });
    });
  });
}

// Create script - Required for signup
function create(user, callback) {
  const bcrypt = require('bcrypt');
  const MongoClient = require('mongodb@3.1.4').MongoClient;
  
  const MONGO_URL = configuration.MONGO_URL || 'mongodb://user:pass@localhost';
  const DB_NAME = configuration.DB_NAME || 'db-name';
  
  const client = new MongoClient(MONGO_URL);

  client.connect(function (err) {
    if (err) return callback(err);

    const db = client.db(DB_NAME);
    const users = db.collection('users');

    users.findOne({ email: user.email }, function (err, existingUser) {
      if (err || existingUser) {
        client.close();
        return callback(err || new Error('User already exists'));
      }

      bcrypt.hash(user.password, 10, function (err, hashedPassword) {
        if (err) {
          client.close();
          return callback(err);
        }

        user.password = hashedPassword;
        user.created_at = new Date();
        user.walletBalance = 50000; // Initialize wallet balance

        users.insertOne(user, function (err, result) {
          client.close();
          
          if (err) return callback(err);
          
          return callback(null, {
            user_id: result.insertedId.toString(),
            nickname: user.nickname || user.email.split('@')[0],
            email: user.email
          });
        });
      });
    });
  });
}

// Get User script
function getByEmail(email, callback) {
  const MongoClient = require('mongodb@3.1.4').MongoClient;
  
  const MONGO_URL = configuration.MONGO_URL || 'mongodb://user:pass@localhost';
  const DB_NAME = configuration.DB_NAME || 'db-name';
  
  const client = new MongoClient(MONGO_URL);

  client.connect(function (err) {
    if (err) return callback(err);

    const db = client.db(DB_NAME);
    const users = db.collection('users');

    users.findOne({ email: email }, function (err, user) {
      client.close();

      if (err) return callback(err);
      if (!user) return callback(null, null);

      return callback(null, {
        user_id: user._id.toString(),
        nickname: user.nickname,
        email: user.email
      });
    });
  });
}
