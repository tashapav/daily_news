import './Categories.css'

function Categories({setCategoryOpened, categoryOpened}) {

    const changeCategory = (category) => {
        if (category !== categoryOpened) {
            setCategoryOpened(category)
        }
    }

    return (
            <div className='categories'>
                <div className={`categories-item ${!categoryOpened ? 'purple' : ''}`} onClick={() => changeCategory('')}>
                    Последние новости
                </div>
                <div className={`categories-item ${categoryOpened === 'politics' ? 'purple' : ''}`} onClick={() => changeCategory('politics')}>
                    Политика
                </div>
                <div className={`categories-item ${categoryOpened === 'economy' ? 'purple' : ''}`} onClick={() => changeCategory('economy')}>
                    Экономика
                </div>
                <div className={`categories-item ${categoryOpened === 'business' ? 'purple' : ''}`} onClick={() => changeCategory('business')}>
                    Бизнес
                </div>
                <div className={`categories-item ${categoryOpened === 'science' ? 'purple' : ''}`} onClick={() => changeCategory('science')}>
                    Наука
                </div>
                <div className={`categories-item ${categoryOpened === 'sport' ? 'purple' : ''}`} onClick={() => changeCategory('sport')}>
                    Спорт
                </div>
                <div className={`categories-item ${categoryOpened === 'society' ? 'purple' : ''}`} onClick={() => changeCategory('society')}>
                    Общество
                </div>
            </div>
    );
}

export default Categories;