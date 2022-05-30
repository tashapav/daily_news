import './EditPage.css'

function EditPage({stopAdmin}) {
    return (
            <div className='edit-page'>
                <div className='btn-wrapper'>
                    <button type='submit' onClick={stopAdmin}>Выйти</button>
                </div>
                <div className='edit-wrapper'>
                    <div className='edit-form'>
                        <label htmlFor='title'>Заголовок</label>
                        <input type='text' id='title'></input>
                        <label htmlFor='date'>Дата</label>
                        <input type='date' id='date'></input>
                        <label htmlFor='text'>Статья</label>
                        <textarea type='text' id='text' rows='20'></textarea>
                    </div>
                    <button type='submit'>Добавить</button>
                </div>
            </div>
    );
}

export default EditPage;