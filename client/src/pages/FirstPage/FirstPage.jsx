import './FirstPage.css'
import FPHeader from '../../components/FPHeader/FPHeader';
import Categories from '../../components/Categories/Categories';
import ArticlesList from '../../components/ArticlesList/ArticlesList';
import { useState } from 'react';

function FirstPage() {

    const [categoryOpened, setCategoryOpened] = useState('')

    return (
        <div className="container">
            <header>
                <FPHeader />
            </header>
            <main className='body'>
                <ArticlesList categoryOpened={categoryOpened}/>
                <Categories setCategoryOpened={setCategoryOpened} categoryOpened={categoryOpened}/>
            </main>
            <footer>
                <span>2022 tashapav</span>
            </footer>
        </div>
    );
}

export default FirstPage;
