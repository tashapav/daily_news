import './ArticlesList.css'
import axios from 'axios';
import ArticleItem from '../ArticleItem/ArticleItem';
import { useEffect, useCallback, useState } from 'react';

function ArticlesList({categoryOpened}) {
    const [articles, setArticles] = useState([])


    const getArticles = useCallback(async() => { 
        try {
            await axios.get('/api/allarticles', 
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            .then(res => {setArticles(res.data)})
        } catch (err) {
            console.log(err)
        }
    }, [])

    const getArticlesByCategory = useCallback(async() => { 
        try {
            await axios.get('/api/getarticlesbycategory', 
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    params: {categoryOpened}
                })
            .then(res => {setArticles(res.data)})
        } catch (err) {
            console.log(err)
        }
    }, [categoryOpened])

    useEffect(() => {
        if (categoryOpened) {
            getArticlesByCategory()
        } else {
            getArticles()
        }
    }, [getArticles, categoryOpened, getArticlesByCategory])

    console.log(articles)

    return (
            <ul className='articles-list'>
                {articles.map((item) => <ArticleItem key={item.id} item={item} />)}
            </ul>
    );
}

export default ArticlesList;