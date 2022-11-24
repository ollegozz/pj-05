import React, { useState } from 'react'
import Tasks from '../../components/Tasks/'
import css from './canban.module.css'
// import { bdResponse } from '../../BdResponse';


export default function Canban() {
  // const [mosk, setMosk] = useState(bdResponse)

  return (
    <div className={css.cards}>

      <div className={css.cardItem}>
        <div className={css.card_backlog}>
          <p className={css.taskName}>Backlog</p>
          <Tasks statusTask='Backlog'/>
        </div>

        <div className={css.card_ready}>
          <p className={css.taskName}>Ready</p>
          <Tasks statusTask='Ready' />
        </div>

        <div className={css.card_progress}>
          <p className={css.taskName}>In Progress</p>
          <Tasks statusTask='In progress' />
        </div>

        <div className={css.card_finished}>
          <p className={css.taskName}>Finished</p>
          <Tasks statusTask='Finished'/>
        </div>

      </div>
    </div>
  )
}
