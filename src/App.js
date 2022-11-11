import Canban from "./page/Canban";
import Footer from "./components/Footer"
import Header from "./components/Header"
import Cards from './page/Cards'
import NotFound from './page/NotFound'
import "./app.css"

import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="main" >
      <Header />
      <Routes>
        <Route path='/' element={<Canban />} />
        <Route path='/сards/id' element={<Cards />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />


    </div>
  );
}

export default App;
