// import { useState } from 'react'
import './App.css'
import Detail from "./pages/DetailPage/Detail.jsx"
import Form from "./pages/FormPage/Form.jsx";
import Home from './pages/HomePage/Home.jsx';
import Landing from "./pages/LandingPage/Landing.jsx";
import {Routes,Route} from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)

  return (

      <div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/create" element={<Form />} />
            <Route path="/detail/:idPais" element={<Detail />} />
          </Routes>
      </div>
  )
}

export default App
