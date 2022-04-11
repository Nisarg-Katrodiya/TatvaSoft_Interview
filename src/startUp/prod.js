const  bodyParser = require('body-parser');
const  compression = require('compression');
const  cors = require('cors');

module.exports = (app) => {

  app.use(bodyParser.json());
  
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(compression());
  
  app.use(cors({origin: true}));
  
}