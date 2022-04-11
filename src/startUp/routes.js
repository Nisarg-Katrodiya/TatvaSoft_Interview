const  routes = require('../routes');

module.exports = (app) => {

  app.get('/', (req, res) => {
    res.send({
      message: "hello there! It's demo APIs",
      version: 'v1',
    })
  });

  app.use('/api/app', routes);
}