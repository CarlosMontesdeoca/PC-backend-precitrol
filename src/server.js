const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const { mongoose } = require('./database');

const Role = require('./models/roles.model');

const createRoles = async () => {
  try {
      const count = await Role.estimatedDocumentCount()

      if( count > 0 ) return;

      const values = await Promise.all([
          new Role({ name: "Sistem" }).save(),
          new Role({ name: "Metrologi" }).save(),
          new Role({ name: "Admin" }).save(),
          new Role({ name: "Marketing" }).save()
      ]);

      console.log(values);
  } catch (error) {
      console.log(error)
  }  
};

const app = express();
createRoles();

app.use(cors());

//settings
app.set( 'port', process.env.PORT || 9001 );

//middlewares
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/secret/users', require('./routes/user.routes'));
app.use('/api/clients', require('./routes/client.routes'));
app.use('/api/contacts', require('./routes/contact.routes'));
app.use('/api/dumbbells', require('./routes/dumbb.routes'));
app.use('/api/orders', require('./routes/order.routes'));


// starting the server
app.listen( app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

// token 
