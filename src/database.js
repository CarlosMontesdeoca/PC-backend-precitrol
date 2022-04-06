const mongoose = require('mongoose');

// const URI = 'mongodb://localhost/metrologia';
const URI = 'mongodb://Precitrol:Sistemas123*@192.168.0.120:27017/metrologia?ssl=false&authSource=metrologia';

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true
})
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;