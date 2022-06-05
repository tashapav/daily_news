import './ArticleItem.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import ArticleContext from '../../context';
import { useCallback, useContext } from 'react';

function ArticleItem({item}) {

    const date = item.date.slice(0, 10)
    const {setOpenedArticle} = useContext(ArticleContext)

    const getText = useCallback(async (path) => {
        try {
            await axios.get('/api/gettext', 
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    params: {path}
                })
            .then(res => {setOpenedArticle({...item, date: date, text: res.data})})
        } catch (err) {
            console.log(err)
        }
    }, [date, item, setOpenedArticle])


    return (
            <div className='article-item'>
                <Link to='/article' className='article-link' onClick={() => getText(item.pathToText)}>
                    <div className='info-in-link'>
                        <span className='item-title'>{item.title}</span>
                        <span className='item-date'>{date}</span>
                    </div>
                </Link>
            </div>
    );
}

export default ArticleItem;