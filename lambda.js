// const { app, server } = require('./server/index.js');
// const awsServerlessExpress = require('aws-serverless-express');

// exports.handler = (event, context) => {
// 	return awsServerlessExpress.proxy(
//       awsServerlessExpress.createServer(server),
//       event,
//       context
//     );
//   // app.prepare().then(() => {
    
//   // });
// };
const sls = require('serverless-http')
const binaryMimeTypes = require('./binaryMimeTypes')

const api = require('./api')
module.exports.api = sls(api, {
  binary: binaryMimeTypes
})

const nuxt = require('./nuxt')
module.exports.nuxt = sls(nuxt, {
  binary: binaryMimeTypes
})