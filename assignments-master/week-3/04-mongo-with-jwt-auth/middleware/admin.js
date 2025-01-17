const jwt = require("jsonwebtoken");

const {JWT_SECRET} = require("../config");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const token = req.headers.authorization;    // Authorization gets converted to authorization
    // Bearer jkskjdkjdkjfkj
    const words = token.split(" ");  // convert token into ["Bearer", "jkskjdkjdkjfkj"]
    const jwtToken = words[1];

    try{
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);

        if(decodedValue.username){
            next();
        } else{
            res.status(401).json({
                message: "You are not authenticated"
            });
        }
    } catch(e){
        res.json({
            msg: "incorrect inputs"
        })
    }

    


}

module.exports = adminMiddleware;