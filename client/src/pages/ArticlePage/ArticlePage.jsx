import './ArticlePage.css'
import { Link } from 'react-router-dom';

function ArticlePage() {
    return (
            <div className='article-page'>
                <div className='APheader'>
                    <span>DAILY NEWS</span>
                </div>
                <div className='out-of-link'>
                    <Link to='/' className='pointer-link'>
                        <span className='pointer-back'> ← Назад </span>
                    </Link>
                </div>
                <div className='article-content'>
                    <div className='content-top'>
                        <div>
                            <span className='item-title'>Title</span>
                            <span className='item-date'>Date</span>
                        </div>
                    </div>
                    <div className='article-text'>Text</div>
                </div>
                <footer>
                    <span>2022 tashapav</span>
                </footer>
            </div>
    );
}

export default ArticlePage;