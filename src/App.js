import React, { useState, useEffect } from 'react'
import Canban from "./page/Canban/Canban";
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Task from './page/Task/Task'
import NotFound from './page/NotFound/NotFound'
import "./app.css"
import { bdResponse } from './BdResponse'
import { Routes, Route } from 'react-router-dom';

function App() {

  const initialState = JSON.parse(window.localStorage.getItem('mosk')) || bdResponse
  const [mosk, setMosk] = useState(initialState)
  const [drop, setDrop] = useState(false)

  useEffect(() => {
    window.localStorage.setItem('mosk', JSON.stringify(mosk))
  },[mosk])

  function dropMenu() {
    if (drop === false) {
      setDrop(!drop)
    } else {
      setDrop(!drop)
    }
  }
 

  
  return (

    <div className="main">
      <div className="_container" >
        <Header drop={drop} dropMenu={dropMenu} />
        <Routes>
          <Route path='/' element={<Canban mosk={mosk} setMosk={setMosk} />} />
          <Route path='/task/:id' element={<Task mosk={mosk} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer mosk={mosk}/>
      </div>
    </div>
  );
}

export default App;
