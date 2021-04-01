const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        console.log(req.headers.authorization);
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, 'kivenanonymous');
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: '901'
        });
    }
};
