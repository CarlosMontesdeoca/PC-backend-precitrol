const mongoose = require('mongoose');

const URI = 'mongodb://superAdmin:pass1234@127.0.0.1:27017/metrologia?ssl=false&authSource=metrologia';
// const URI = 'mongodb://Precitrol:Sistemas123*@192.168.0.120:27017/metrologia?ssl=false&authSource=metrologia';

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true
})
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;