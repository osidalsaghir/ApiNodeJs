const http = require('http');
https = require('https');
const fs = require('fs');
const app = require('./app');
const port = process.env.PORT || 3000;
// const options = {
//     key: fs.readFileSync('/home/admin/conf/web/ssl.almuiz.com.key'),
//     cert: fs.readFileSync('/home/admin/conf/web/ssl.almuiz.com.crt')
// };
const server = http.createServer(app);
//const server = https.createServer(options,app);

server.listen(port);


