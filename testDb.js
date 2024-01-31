const { Sequelize } = require('sequelize');

// Replace 'your_database_url' with your actual PostgreSQL database URL
const databaseUrl = 'postgres://icmrthrm:V7w9-YIVpz137XAfLMCIxtZoLgH3kCet@arjuna.db.elephantsql.com/icmrthrm';

const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres',
  logging: false, // Set to true if you want to see SQL queries in the console
});

// Test the connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    // Close the connection when done (if needed)
    await sequelize.close();
  }
}

// Test the connection
testConnection();
