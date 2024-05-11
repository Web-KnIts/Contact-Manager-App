const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    message: "User is not Authorized " + err.message,
                });
            }
            req.user = decoded.user
            console.log(decoded);
            next();
        });
    } else {
        return res.status(401).json({
            message: "Authorization header is missing or invalid",
        });
    }
});

module.exports = validateToken;
