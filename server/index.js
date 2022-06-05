const express = require('express')
const path = require('path')
const sequelize = require('./database.js')
const router = require('./routes.js')
const cors = require('cors')
//const { Article, Category} = require('./model.js')



const PORT = process.env.PORT || 3001

const app = express()
app.use(express.json({extended:true}))


app.use(cors())
app.use('/api', router)


//app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')))
//app.get('*', (request, response) => {
//    response.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'))
//})    


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log('started'))
        /*Category.create({category: 'politics'})
        Category.create({category: 'economy'})
        Category.create({category: 'business'})
        Category.create({category: 'science'})
        Category.create({category: 'sport'})
        Category.create({category: 'society'})*/
    } catch (err) {
        console.log(err)
    }
}

start()