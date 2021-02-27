const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  try {
    
    // check the token
    const token = req.cookies.token;
    if (!token) 
        return res.status(401).json({ errorMessage: "Unauthorized" });

    // check that token is verified
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified.user;       // verified.user is what verify function returns

    next();  // exits the middleware funcion
  } catch (err) {
    console.error(err);
    res.status(401).json({ errorMessage: "Unauthorized" });
  }
}

module.exports = auth;