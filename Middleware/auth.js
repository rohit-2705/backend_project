const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
const token = req.header('x-Token');
if (!token) return res.status(401).json({ error: 'Access denied' });
try {
 const decoded = jwt.verify(token, process.env.APPLICATION_JWT_SECRET);
 req.userId = decoded.userId;
 next();
 } catch (error) {
    console.log(er)
 res.status(401).json({ error: 'Invalid token' });
 }
 };

module.exports = {verifyToken};