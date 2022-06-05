const fs = require('fs')
const fsPromise = require('fs/promises')
const path = require('path')
const { Article, Category} = require('../model.js')


class ArticleController {
    async addArticle(req, res) {
        try {

            const {title, category , date , text} = req.body

            if (!(title && category && date && text)) {
                return res.status(400).json({message: 'Проверьте корректность введенных данных'})
            }

            const dbCategory = await Category.findOne({where: {category: category}})
            const used = await Article.findAll({where: {title: title, date: date}})
            
            if (used.length) {
                return res.status(400).json({message: 'Статья с таким заголовком и датой уже существует', art: used})
            }


            const pathToText = path.join('TextsOfArticles', `${title.replace(/[^a-zа-яё]/gi,'') + date}.txt`)

            fsPromise.writeFile(pathToText, text, 'utf-8',
                (err) => {
                    if (err) {
                        throw(err)
                    } else {
                        console.log('Recorded')
                    }
                })
                .then(
                    await Article.create({title: title, categoryId: dbCategory.id, date: date, pathToText: pathToText})
                )
                .then(() => {
                    return res.status(201).json({message: 'Статья создана'})
                })
                .catch(
                    (error) => {
                        console.log(error)
                        res.status(500).json({message: 'Что-то пошло не так'})
                })
        } catch (err) {
            console.log(err)
        }
    }



    async getArticles(req, res) {
        try {
            const articlesFromDb = await Article.findAll({where: {}})

            res.status(200).json(articlesFromDb)

        } catch (err) {
            console.log(err)
        }
    }



    async getText(req, res) {
        try {
            const { path } = req.query

            fs.readFile(path, 'utf-8', 
                (err, content) => {
                    if (err) {
                        throw err
                    }
                    res.status(200).json(content)
                }
            )

        } catch (err) {
            console.log(err)
        }
    }


}


module.exports = new ArticleController()