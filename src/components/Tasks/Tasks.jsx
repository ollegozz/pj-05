import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import css from './tasks.module.css'
import Input from '../Input/Input';
import Button from '../Button/Button';
import { bdResponse } from '../../BdResponse';

export default function Tasks(props) {
    const { statusTask } = props
    const [mosk, setMosk] = useState(bdResponse)
    const [inputTaskName, setInputTaskName] = useState('')
    const [openForm, setOpenForm] = useState(false)

    function openCreateTask() {
        setOpenForm(!openForm)
    }

    function addTask(e) {
        e.preventDefault()
        const newTask = {
            status: 'Backlog',
            id: Date.now(),
            name: inputTaskName,
            description: 'create description'
        }
        setMosk([...mosk, newTask])
        setInputTaskName('')
        console.log(newTask);
    }



    return (
        <div>
            {mosk.map((item) => (
                item.status === statusTask ?
                    <div className={css.item} key={item.id} >
                        <Link to={`task/${item.id}`}>
                            <p className={css.task}>{item.name}</p>
                        </Link>
                    </div> : ''
            ))}
            <button onClick={openCreateTask}>{openForm ? 'Close' : '+ Add card'}</button>

            {openForm &&
                <Input placeholder='Create'
                    value={inputTaskName}
                    onChange={e => setInputTaskName(e.target.value)} />}
            {inputTaskName === '' ? '' : <Button onClick={addTask} >Create</Button>}
            

        </div>
    )
}
