const { Sequelize } = require('sequelize')


module.exports = new Sequelize(
    'd4kpiisba4a7sk',
    'fnsuyjinryqgbz',
    'd03e7496ab8295c304d55a2f9b57dd36ef9aff3467b2f82c83a0fd52554e9fed',
    {
        dialect: 'postgres',
        host: 'ec2-54-228-32-29.eu-west-1.compute.amazonaws.com',
        port: 5432,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }

)
