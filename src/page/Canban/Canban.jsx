import React, { useState } from 'react'
import Tasks from '../../components/Tasks/'
import css from './canban.module.css'
// import { bdResponse } from '../../BdResponse';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';


export default function Canban(props) {
  const { mosk, setMosk } = props
  // const [mosk, setMosk] = useState(bdResponse)
  const [inputTaskName, setInputTaskName] = useState('')
  const [openForm, setOpenForm] = useState(false)
  const [formValid, setFormValid] = useState(true)

  function openCreateTask() {
    setOpenForm(!openForm)
  }

  const isFormValidated = () => {
    if (inputTaskName !== '') {
      setFormValid(true)
      return true
    } else {
      setFormValid(false)
      return false
    }
  }

  function addTask(e) {
    e.preventDefault()
    if (isFormValidated()) {
      const newTask = {
        status: 'Backlog',
        id: mosk.length + 1,
        name: inputTaskName,
        description: 'create description'
      }
      setMosk([...mosk, newTask])
      setInputTaskName('')
      openCreateTask()
    }

  }

  return (
    <div className={css.cards}>

      <div className={css.cardItem}>
        <div className={css.card_backlog}>
          <p className={css.taskName}>Backlog</p>
          <Tasks statusTask='Backlog' mosk={mosk}/>
          {openForm ? <Button onClick={addTask}>Submit</Button> :
            <Button onClick={openCreateTask} >+ Add card</Button>}

          {openForm &&
            <Input placeholder='Create'
              value={inputTaskName}
              onChange={e => setInputTaskName(e.target.value)} />}
        </div>

        <div className={css.card_ready}>
          <p className={css.taskName}>Ready</p>
          <Tasks statusTask='Ready' mosk={mosk} />
        </div>

        <div className={css.card_progress}>
          <p className={css.taskName}>In Progress</p>
          <Tasks statusTask='In progress' mosk={mosk} />
        </div>

        <div className={css.card_finished}>
          <p className={css.taskName}>Finished</p>
          <Tasks statusTask='Finished' mosk={mosk} />
        </div>

      </div>
    </div>
  )
}
