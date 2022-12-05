import React, { useState } from 'react'
import Canban from "./page/Canban/Canban";
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Task from './page/Task/Task'
import NotFound from './page/NotFound/NotFound'
import "./app.css"
import { bdResponse } from './BdResponse'
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const [mosk, setMosk] = useState(bdResponse)
  const [drop, setDrop] = useState(false)
  const [task,  setTask] = useState(0)
  const [actTask,  setActTask] = useState(0)

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
        <Footer task={task} actTask={actTask}/>
      </div>
    </div>
  );
}

export default App;
