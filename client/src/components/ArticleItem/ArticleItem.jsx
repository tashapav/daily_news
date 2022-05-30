import './ArticleItem.css'
import { Link } from 'react-router-dom';

function ArticleItem() {
    return (
            <div className='article-item'>
                <Link to='/article' className='article-link'>
                    <div className='info-in-link'>
                        <span className='item-title'>Title</span>
                        <span className='item-date'>Date</span>
                    </div>
                </Link>
            </div>
    );
}

export default ArticleItem;