const http = require('http');

const options = {
  host: 'localhost',
  port: 8080,
  path: '/api/productos',
  method: 'GET'
}

const req = http.request(options, (res) => {
  res.on('data', (data) =>{
    process.stdout.write( data );
  })
});

req.end();