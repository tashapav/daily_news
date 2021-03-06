const { Router } = require("express")
const articleController = require("./controller/ArticleController.js")

const router = new Router()

router.post('/addarticle', articleController.addArticle)
router.get('/allarticles', articleController.getArticles)
router.get('/gettext', articleController.getText)
router.get('/getarticlesbycategory', articleController.getArticlesByCategory)

module.exports = router