import React from 'react'
import Tasks from '../../components/Tasks/'
import Input from '../../components/Input/Input'
import css from './canban.module.css'


export default function Canban() {


  return (
    <div className={css.cards}>

      <div className={css.cardItem}>
        <div className={css.card_backlog}>
          <p className={css.taskName}>Backlog</p>
          <Tasks statusTask='Backlog' />
          <Input />
          {/* <button>+ Add card</button> */} 
        </div>

        <div className={css.card_ready}>
          <p className={css.taskName}>Ready</p>
          <Tasks statusTask='Ready' />
          <button>+ Add card</button>
        </div>

        <div className={css.card_progress}>
          <p className={css.taskName}>In Progress</p>
          <Tasks statusTask='In progress' />
          <button>+ Add card</button>
        </div>

        <div className={css.card_finished}>
          <p className={css.taskName}>Finished</p>
          <Tasks statusTask='Finished' />
          <button>+ Add card</button>
        </div>

      </div>
    </div>
  )
}
