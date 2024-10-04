// const http = require('http');
// const path = require('path');
// const fs = require('fs');
// const fsPromises = require('fs').promises;


// const logEvents=require('./logEvent');
// const EventEmitter=require('events');
// const Emitter =new  EventEmitter();

// const myEmitter=new Emitter();
// myEmitter.on('log',(msg,fileName)=>logEvents(msg));
// const PORT = process.env.PORT || 3500;

// const serveFile = async (filePath, contentType, response) => {
//     try {
//         const rawData = await fsPromises.readFile(filePath, !contentType.includes('image')?'utf8':'');
//         const data=contentType==='application/json'
//         ?JSON.parse(rawData):rawData;
//         response.writeHead(
//             filePath.includes('404,html')?404:200,
//              { 'Content-Type': contentType }
//         );
//         response.end(
//             contentType==='application/json'?JSON.stringify(data):data
//         );
//     } catch (err) {
//         console.log(err);
//         myEmitter.emit('log',`${err.name}:${err.message}`,`errlog.txt`);
//         response.statusCode = 500;
//         response.end('Internal Server Error');
//     }
// };

// const server = http.createServer(async (req, res) => {
//     console.log(req.url, req.method);
//     myEmitter.emit('log',`${req.url}\t${req.method}`,`reqlog.txt`);

//     const extension = path.extname(req.url);
//     let contentType;
//     switch (extension) {
//         case '.css':
//             contentType = 'text/css';
//             break;
//         case '.js':
//             contentType = 'text/javascript';
//             break;
//         case '.json':
//             contentType = 'application/json';
//             break;
//         case '.jpg':
//             contentType = 'image/jpeg';
//             break;
//         case '.png':
//             contentType = 'image/png';
//             break;
//         case '.txt':
//             contentType = 'text/plain';
//             break;
//         default:
//             contentType = 'text/html';
//     }
    
//     let filePath =
//         req.url === '/'
//             ? path.join(__dirname, 'views', 'index.html')
//             : path.join(__dirname, 'views', req.url);

//     if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
//         filePath = path.join(filePath, 'index.html');
//     }

//     if (!extension && req.url.endsWith('/')) {
//         filePath = path.join(filePath, 'index.html');
//     }

//     if (fs.existsSync(filePath)) {
//         serveFile(filePath, contentType, res);
//     } else {
//         switch (path.basename(filePath)) {
//             case 'old-page.html':
//                 res.writeHead(301, { 'Location': '/new-page.html' });
//                 res.end();
//                 break;
//             case 'www-page.html':
//                 res.writeHead(301, { 'Location': '/' });
//                 res.end();
//                 break;
//             default:
//                 // Serve a 404 response
//                 res.writeHead(404, { 'Content-Type': 'text/html' });
//                 serveFile(path.join(__dirname, 'views', '404.html'), 'text/html', res);
//         }
//     }
// });

// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

