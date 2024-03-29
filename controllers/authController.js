const jwt = require('jsonwebtoken');

function generateToken(user) {
  return jwt.sign(user, 'secretkey', { expiresIn: '1h' });
}

function verifyToken(token) {
  return jwt.verify(token, 'secretkey');
}

module.exports = {
  generateToken,
  verifyToken
};
