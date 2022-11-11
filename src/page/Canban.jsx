import React from 'react'
import './canban.css'
import { bdResponse } from '../BdResponse';

// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Canban() {
  return (
    <div className='cards'>
      <div className='card-item'>
        <div className='card_backlog card'>
          <p>Backlog</p>
          {bdResponse.map(item => (
            item.status === 'Backlog' ?
              <div className='item' key={item.id}>
                <Link to={`сards/${item.id}`}><p>{item.name}</p></Link>
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
                <Link><p>{item.name}</p></Link>
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
                <Link><p>{item.name}</p></Link>
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
                <Link><p>{item.name}</p></Link>
                <p>{item.description}</p>
              </div>
              : ""))}
          <button>+ Add card</button>
        </div>
      </div>
    </div>
  )
}
