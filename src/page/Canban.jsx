import React from 'react'
import './canban.css'

const bdResponse = [
  {
    status: 'Backlog',
    id: '1',
    name: 'TestTT',
    description: 'descriptiondescriptiondescription'
  }, {
    status: 'Backlog',
    id: '2',
    name: 'TestTT222',
    description: 'descriptiondescriptiondescription222'
  },
  {
    status: 'In progress',
    id: '3',
    name: 'TestTT3',
    description: 'descriptiondescriptiondescription3'
  }, {
    status: 'Finished',
    id: '4',
    name: 'TestTT4',
    description: 'descriptiondescriptiondescription4'
  },
  {
    status: 'Ready',
    id: '5',
    name: 'TestTT5',
    description: 'descriptiondescriptiondescription5'
  },
  {
    status: 'Backlog',
    id: '6',
    name: 'TestTT6',
    description: 'descriptiondescriptiondescription5'
  },
]

export default function Canban() {
  return (
    <div className='cards'>
      <div className='card-item'>
        <div className='card_backlog card'>
          <p>Backlog</p>
          {bdResponse.map(item => (
            item.status === 'Backlog' ?
              <div className='item' key={item.id}>
                <p>{item.name}</p>
                <p>{item.description}</p>
              </div>
              : ""))}
          <button>+ Add card</button>
        </div>
        <div className='card_ready card'>
          <p>Ready</p>
          {bdResponse.map(item => (
            item.status === 'Ready' ?
              <div className='item' key={item.id}>
                <p>{item.name}</p>
                <p>{item.description}</p>
              </div>
              : ""))}
              <button>+ Add card</button>
        </div>
        <div className='card_progress card'>
          <p>In Progress</p>
          {bdResponse.map(item => (
            item.status === 'In progress' ?
              <div className='item' key={item.id}>
                <p>{item.name}</p>
                <p>{item.description}</p>
              </div>
              : ""))}
          <button>+ Add card</button>
        </div>
        <div className='card_finished card'>
          <p>Finished</p>
          {bdResponse.map(item => (
            item.status === 'Finished' ?
              <div className='item' key={item.id}>
                <p>{item.name}</p>
                <p>{item.description}</p>
              </div>
              : ""))}
          <button>+ Add card</button>
        </div>
      </div>
    </div>
  )
}
