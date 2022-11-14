import Canban from "./page/Canban";
import Footer from "./components/Footer"
import Header from "./components/Header"
import Task from './page/Task'
import NotFound from './page/NotFound'
import "./app.css"

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="main" >
      <Header />
      <Routes>
        <Route path='/' element={<Canban />} />
        <Route path='/task/:id' element={<Task />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />


    </div>
  );
}

export default App;
