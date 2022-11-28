import React from 'react'
import { Link } from 'react-router-dom';
import css from './tasks.module.css'
// import Input from '../Input/Input';
// import Button from '../Button/Button';
// import { bdResponse } from '../../BdResponse';

export default function Tasks(props) {
    const { statusTask, mosk } = props
    

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
            {/* {openForm ? <Button onClick={addTask}>Submit</Button> :
                <Button onClick={openCreateTask} >+ Add card</Button>}

            {openForm &&
                <Input placeholder='Create'
                    value={inputTaskName}
                    onChange={e => setInputTaskName(e.target.value)} />} */}

        </div>
    )
}
