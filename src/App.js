import React, { useState } from 'react'
import Canban from "./page/Canban/Canban";
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Task from './page/Task/Task'
import NotFound from './page/NotFound/NotFound'
import "./app.css"
import { bdResponse } from './BdResponse'

import { Routes, Route } from 'react-router-dom';

function App() {
  const [mosk, setMosk] = useState(bdResponse)

  return (

    <div className="main">
      <div className="_container" >
        <Header />
        <Routes>
          <Route path='/' element={<Canban mosk={mosk} setMosk={setMosk}/>} />
          <Route path='/task/:id' element={<Task mosk={mosk} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
