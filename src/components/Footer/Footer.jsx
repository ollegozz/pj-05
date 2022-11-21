import React from 'react'
import css from "./footer.module.css"

export default function Footer() {
  return (
    <div className={css.footer}>
      <div className={css.tasks}>
        <div className={css.active}>Active tasks: </div>
        <div className={css.finished}>Finished tasks: </div>
      </div>
      <div className={css.dev}>Kanban board by aom 2022</div>
    </div>
  )
}
