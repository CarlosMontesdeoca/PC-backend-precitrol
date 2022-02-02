const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/Metrologia';

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true
})
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;