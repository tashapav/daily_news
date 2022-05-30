import './FirstPage.css'
import FPHeader from '../../components/FPHeader/FPHeader';
import Categories from '../../components/Categories/Categories';
import ArticlesList from '../../components/ArticlesList/ArticlesList';

function FirstPage() {
    return (
        <div className="container">
            <header>
                <FPHeader />
            </header>
            <main className='body'>
                <ArticlesList />
                <Categories />
            </main>
            <footer>
                <span>2022 tashapav</span>
            </footer>
        </div>
    );
}

export default FirstPage;
