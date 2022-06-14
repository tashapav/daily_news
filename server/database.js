const { Sequelize } = require('sequelize')
require('dotenv').config()



module.exports = new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.HOST,
        port: 5432,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }

)
