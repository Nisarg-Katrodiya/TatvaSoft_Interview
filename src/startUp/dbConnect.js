const  mongoose = require('mongoose');

module.exports = () => {

  mongoose.connect(process.env.URL, { useNewUrlParser: true})
  .then(() => console.log("Connected to db"))
  .catch(error => console.log("MongoDB: ", error));
  
};