const { createServer } = require('http');

const next = require('next');

const app = next({
  dev: process.env.NODE_END !== 'production'
});

const routes = require('./routes');
const handler = routes.getRequestHandler(app);
app.prepare().then(()=>{
  createServer(handler).listen(process.env.PORT || 5000 , (err)=>{
    if (err) throw err;
    console.log('Ready on localhost:3000');
  });
);
