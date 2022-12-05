import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import css from './task.module.css'
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

const Task = (props) => {
  const { mosk } = props
  const { id } = useParams()
  const [taskItem, setTaskItem] = useState([])
  

  useEffect(() => {
    mosk.map((item) => {
      // eslint-disable-next-line
      if (item.id == id) {
        setTaskItem(item)
      } return true 
    })
  }, [mosk, id])

  

  return (
    taskItem.length !== 0 && taskItem !== 0 ?

      <div className={css.body}>
        <div className={css.task}>
          <div className={css.title}>
            <div className={css.name}>{taskItem.name}</div>
            <div className={css.close}><Link to={`/`}>&#10006;</Link></div>
          </div>
          
          {/* <p className={css.status}>Статус задачи: {taskItem.status}</p> */}
          <p className={css.description}>{taskItem.description}</p>
          

          <Button>Редактировать</Button>
        </div>

      </div>
      


      : <NotFound />
  )
}

export default Task;