/**
 * Pass the data to send as `event.data`, and the request options as
 * `event.options`. For more information see the HTTPS module documentation
 * at https://nodejs.org/api/https.html.
 *
 * Will succeed with the response body.
 */
exports.handler = (event, context, callback) => {
    //case 1: via http, no no no no ssssss
    const http = require('node:http');
    const options = {
      host: 'www.google.com',
    };
    const req = http.get(options);
    req.end();
    req.once('response', (res) => {
      const ip = req.socket.localAddress;
      const port = req.socket.localPort;
      console.log(`Your IP address is ${ip} and your source port is ${port}.`);
      // Consume response object
    });

    //case 2: via httpsssssssss
    // const https = require('node:https');
    // https.get('https://encrypted.google.com/', (res) => {
    // http.get('https://20.92.199.236.com/', (res) => {
    //   console.log('statusCode:', res.statusCode);
    //   console.log('headers:', res.headers);
    
    //   res.on('data', (d) => {
    //     process.stdout.write(d);
    //   });
    
    // }).on('error', (e) => {
    //   console.error(e);
    // });
    
    //case 3: via httpsssssssss
    // const https = require('node:https');
    // const req = https.request(event.options, (res) => {
    //     let body = '';
    //     console.log('Status:', res.statusCode);
    //     console.log('Headers:', JSON.stringify(res.headers));
    //     res.setEncoding('utf8');
    //     res.on('data', (chunk) => body += chunk);
    //     res.on('end', () => {
    //         console.log('Successfully processed HTTPS response');
    //         // If we know it's JSON, parse it
    //         if (res.headers['content-type'] === 'application/json') {
    //             body = JSON.parse(body);
    //         }
    //         callback(null, body);
    //     });
    // });
    // req.on('error', callback);
    // req.write(JSON.stringify(event.data));
    // req.end();
};
