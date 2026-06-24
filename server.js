require('dotenv').config();
const app = require('./src/app');
const { sequelize } = require('./src/models');

const PORT = process.env.PORT || 3000;

sequelize.sync()
  .then(() => {
    console.log('Conexion a PostgreSQL establecida.');
    app.listen(PORT, () => {
      console.log('Servidor corriendo en el puerto ' + PORT);
    });
  })
  .catch((error) => {
    console.error('Error al conectar con la base de datos:', error);
  });