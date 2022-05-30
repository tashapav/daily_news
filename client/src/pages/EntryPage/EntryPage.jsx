import { useState, useEffect, useCallback } from 'react';
import EditPage from '../EditPage/EditPage';
import './EntryPage.css'

function EntryPage() {

    const [isAdmin, setIsAdmin] = useState(false)
    const [entryForm, setEntryForm] = useState({login: '', password: ''})

    const becomeAdmin = useCallback(({login, password}) => {
        if (login === 'admin' && password === 'admin1234') {
            setIsAdmin(true)
            localStorage.setItem('admin', JSON.stringify(true))
        }
    }, [])

    const stopAdmin = useCallback(() => {
        setIsAdmin(false)
        localStorage.removeItem('admin')
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('admin'))
        if (data) {
            becomeAdmin({login: 'admin', password: 'admin1234'})
        }
    }, [becomeAdmin])

    if (isAdmin) {
        return (
            <EditPage stopAdmin={stopAdmin}/>
        )
    }
    return (
            <div className='entry-form'>
                <div className='entry-border'>
                    <label htmlFor='login'>Логин</label>
                    <input type='text' id='login' value={entryForm.login}
                    onChange={(e) => setEntryForm({...entryForm, login: e.target.value})}></input>
                    <label htmlFor='password'>Пароль</label>
                    <input type='password' id='password' value={entryForm.password}
                    onChange={(e) => setEntryForm({...entryForm, password: e.target.value})}></input>
                    <button type='submit' 
                    onClick={(e) => {
                        e.preventDefault()
                        becomeAdmin(entryForm)}
                        }>Войти</button>
                </div>
            </div>
    );
}

export default EntryPage;