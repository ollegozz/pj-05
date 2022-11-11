import React from 'react'
import "./footer.css"

export default function Footer() {
  return (
    <div className='footer'>
      <div className='tasks'>
        <div className='active'>Active tasks: </div>
        <div className='finished'>Finished tasks: </div>
      </div>
      <div className='dev'>Kanban board by aom 2022</div>
    </div>
  )
}
