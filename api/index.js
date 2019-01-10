// const express = require('express')
// const consola = require('consola')
// const { Nuxt, Builder } = require('nuxt')
// const app = express()
// const host = process.env.HOST || '127.0.0.1'
// const port = process.env.PORT || 3000

// app.set('port', port)

// // Import and Set Nuxt.js options
// let config = require('../nuxt.config.js')
// config.dev = !(process.env.NODE_ENV === 'production')

// const createServer = async () => {

//   const server = express();
//   // Init Nuxt.js
//   const nuxt = new Nuxt(config)

//   // Build only in dev mode
//   if (config.dev) {
//     const builder = new Builder(nuxt)
//     await builder.build()
//   }

//   // Give nuxt middleware to express
//   app.use(nuxt.render)

//   // Listen the server
//   app.listen(port, host)
//   consola.ready({
//     message: `Server listening on http://${host}:${port}`,
//     badge: true
//   });
// };
// const server = createServer();
// exports.app = app;
// exports.server = server;

// const express = require('express');
// // const next = require('next');
// const consola = require('consola');
// const { Nuxt, Builder } = require('nuxt');

// const cors = require('cors');
// const bodyParser = require('body-parser');
// const routes = require('./routes');
// const mongoose = require('mongoose');
// const initDb = require('./db');

// const port = parseInt(process.env.PORT, 10) || 3000;
// const dev = process.env.NODE_ENV !== 'production';

// const app = express();
// const host = process.env.HOST || '127.0.0.1'

// // const handle = app.getRequestHandler();

// app.set('port', port);

// const createServer = () => {
// 	const server = express();

// 	initDb();
// 	server.use(bodyParser.json());
// 	server.use(cors());
// 	server.use('/api', routes);

// 	server.get('/p/:id', (req, res) => {
// 		const actualPage = '/post';
// 		const queryParams = { id: req.params.id };
// 		app.render(req, res, actualPage, queryParams);
// 	});
//   // server.get('*', (req, res) => handle(req, res));

//   return server;
// };

// const server = createServer();

// if (!process.env.LAMBDA) {
// 	server.listen(port, err => {
// 		if (err) throw err;
// 		console.log(`Ready on http://localhost:${port}`);
// 	});
//   // app.prepare().then(() => {
  	
//   // });
// }

// exports.app = app;
// exports.server = server;

const express = require('express')
const app = express()
app.get('/', (req, res, next) => {
  res.send('API root')
})
// export the server middleware
module.exports = {
  path: '/api',
  handler: app
}