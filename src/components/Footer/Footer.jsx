import React from 'react'
import css from "./footer.module.css"

export default function Footer(props) {
  const { task, actTask } = props

  return (
    <div className={css.footer}>
      <div className={css.tasks}>
        <div className={css.active}>Active tasks: {actTask} </div>
        <div className={css.finished}>Finished tasks: {task}</div>
      </div>
      <div className={css.dev}>Kanban board by aom 2022</div>
    </div>
  )
}
