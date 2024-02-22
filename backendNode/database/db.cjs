const { Sequelize } = require('sequelize');

// Configuración de la conexión a la base de datos
const dbhackaton = new Sequelize('mydb', 'avnadmin', 'AVNS_hrKqpPiiy920OvJoLs_', {
  host: 'mudapp-mudapp.a.aivencloud.com',
  port: 22116,
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Necesario si no se tiene el certificado SSL
    }
  }
});

// Probar la conexión
async function testConnection() {
  try {
    await dbhackaton.authenticate();
    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
}

// Llamar a la función para probar la conexión
testConnection();

// Exportar la instancia de Sequelize para usar en otras partes del código
module.exports = dbhackaton;
