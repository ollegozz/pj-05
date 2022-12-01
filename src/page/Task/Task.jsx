import React, { useEffect, useState } from 'react'
import { bdResponse } from '../../BdResponse';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';

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
  }, [id])

  return (
    taskItem.length !== 0 && taskItem !== 0 ?
      <div>
        <h2>{taskItem.name}</h2>
        <p>{taskItem.description}</p>
        <p>{taskItem.status}</p>
        <button>Edit</button>
      </div>
      : <NotFound />
  )
}

export default Task;