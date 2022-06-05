import './ArticlePage.css'
import { Link } from 'react-router-dom';
import ArticleContext from '../../context';
import { useContext } from 'react';

function ArticlePage() {

    const {openedArticle, setOpenedArticle} = useContext(ArticleContext)

    return (
            <div className='article-page'>
                <div className='APheader'>
                    <span>DAILY NEWS</span>
                </div>
                <div className='out-of-link'>
                    <Link to='/' className='pointer-link' onClick={() => {setOpenedArticle({})}}>
                        <span className='pointer-back'> ← Назад </span>
                    </Link>
                </div>
                <div className='article-content'>
                    <div className='content-top'>
                        <div>
                            <span className='item-title'>{openedArticle.title}</span>
                            <span className='item-date'>{openedArticle.date}</span>
                        </div>
                    </div>
                    <div className='article-text'>{openedArticle.text}</div>
                </div>
                <footer>
                    <span>2022 tashapav</span>
                </footer>
            </div>
    );
}

export default ArticlePage;