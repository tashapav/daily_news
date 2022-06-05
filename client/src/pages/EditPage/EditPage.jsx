import { useState, useCallback } from 'react';
import axios from 'axios';
import './EditPage.css'

function EditPage({stopAdmin}) {

    const [form, setForm] = useState({title: '', category: '', date: '', text: ''})

    const addArticle = useCallback(async() => {
        try {
            await axios.post('/api/addarticle', 
            {title: form.title, category: form.category, date: form.date, text: form.text},
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => console.log(res))
            .then(setForm({title: '', category: '', date: '', text: ''}))
            //.catch((error) => {
            //    if (error.response) {
            //        console.log(error.response.data)
                    /*setError(error.response.data.message)*/
            //    }
            //})
        } catch (err) {
            console.log(err)
        }
    }, [form])


    return (
            <div className='edit-page'>
                <div className='btn-wrapper'>
                    <button type='submit' onClick={stopAdmin}>Выйти</button>
                </div>
                <div className='edit-wrapper'>
                    <div className='edit-form'>
                        <label htmlFor='title'>Заголовок</label>
                        <input type='text' id='title' value={form.title} onChange={(e) => setForm({...form, title: e.target.value})}></input>
                        <select value={form.category} onChange={(e) => setForm({...form, category: e.target.value})}>
                            <option value='' disabled>Выберите категорию</option>
                            <option value='politics'>Политика</option>
                            <option value='economy'>Экономика</option>
                            <option value='business'>Бизнес</option>
                            <option value='science'>Наука</option>
                            <option value='sport'>Спорт</option>
                            <option value='society'>Общество</option>
                        </select>
                        <label htmlFor='date'>Дата</label>
                        <input type='date' id='date' value={form.date} onChange={(e) => setForm({...form, date: e.target.value})}></input>
                        <label htmlFor='text'>Статья</label>
                        <textarea type='text' id='text' rows='20' value={form.text} onChange={(e) => setForm({...form, text: e.target.value})}></textarea>
                    </div>
                    <button type='submit' onClick={addArticle}>Добавить</button>
                </div>
            </div>
    );
}

export default EditPage;