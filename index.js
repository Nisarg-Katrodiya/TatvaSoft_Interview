const express = require('express');

require('dotenv').config();
require('./src/startUp/routes');

let app = express();

require('./src/startUp/prod')(app);
require('./src/startUp/dbConnect')();
require('./src/startUp/routes')(app);

app.listen(process.env.PORT, () => console.log("server started on 4000"));