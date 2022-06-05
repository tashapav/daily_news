const sequelize = require('./database')
const { DataTypes } = require('sequelize')


const Article = sequelize.define('articles', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    categoryId: {type: DataTypes.INTEGER},
    date: {type: DataTypes.DATE},
    pathToText: {type: DataTypes.STRING, unique: true},
})

const Category = sequelize.define('categories', {
    category: {type: DataTypes.STRING, unique: true}
})

Category.hasMany(Article)
Article.belongsTo(Category)

module.exports = { Article, Category }
