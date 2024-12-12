const {JWT_SECRET} = require("../config");
const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const token = req.headers.authorization;    // Authorization gets converted to authorization
    // Bearer jkskjdkjdkjfkj
    const words = token.split(" ");  // convert token into ["Bearer", "jkskjdkjdkjfkj"]
    const jwtToken = words[1];
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);

    if(decodedValue.username){
        req.username = decodedValue.username;  // putting in the request object so that when u call next the request object that i get has username attached to it. Since, middlewares can pass data from one middleware to next middleware
        next();
    } else{
        res.status(401).json({
            message: "You are not authenticated"
        });
    }

}

module.exports = userMiddleware;