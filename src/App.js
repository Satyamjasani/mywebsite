
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AiOutlineArrowRight } from "react-icons/gi";
import { Routes, Route, } from 'react-router-dom';
import Match from './Match';
import Home from './Home';
import Pages from './Pages';
function App() {
  return (
    <>
      <Routes>
        <Route  path='/' element={< Home />}></Route>
        <Route  path='/Match' element={< Match />}></Route>
        <Route  path='/Pages' element={< Pages />}></Route>
      </Routes>
    </>
  );
}

export default App;
