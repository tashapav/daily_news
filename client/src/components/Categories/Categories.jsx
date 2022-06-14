import './Categories.css'

function Categories({setCategoryOpened, categoryOpened}) {
    return (
            <div className='categories'>
                <div className={`categories-item ${!categoryOpened ? 'purple' : ''}`} onClick={() => setCategoryOpened('')}>
                    Последние новости
                </div>
                <div className={`categories-item ${categoryOpened === 'politics' ? 'purple' : ''}`} onClick={() => setCategoryOpened('politics')}>
                    Политика
                </div>
                <div className={`categories-item ${categoryOpened === 'economy' ? 'purple' : ''}`} onClick={() => setCategoryOpened('economy')}>
                    Экономика
                </div>
                <div className={`categories-item ${categoryOpened === 'business' ? 'purple' : ''}`} onClick={() => setCategoryOpened('business')}>
                    Бизнес
                </div>
                <div className={`categories-item ${categoryOpened === 'science' ? 'purple' : ''}`} onClick={() => setCategoryOpened('science')}>
                    Наука
                </div>
                <div className={`categories-item ${categoryOpened === 'sport' ? 'purple' : ''}`} onClick={() => setCategoryOpened('sport')}>
                    Спорт
                </div>
                <div className={`categories-item ${categoryOpened === 'society' ? 'purple' : ''}`} onClick={() => setCategoryOpened('society')}>
                    Общество
                </div>
            </div>
    );
}

export default Categories;