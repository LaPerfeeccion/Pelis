import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Form, BrowserRouter } from "react-router-dom";
import Generos from './pages/Generos';
import principal from './pages/principal';
import { useNavigate } from "react-router-dom";
import { InfoProvider } from "./contex/useinfo";
import AllGeneros from './pages/all';
import Informations from './pages/informations';
import Pelis from './pages/Pelis';
import DenseAppBar from './components/appsbar';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InfoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/all/:generoId" element={<AllGeneros />} />
          <Route path="/Generos" Component={Generos} />
          <Route path="/" Component={principal} />
          <Route path="/informations" element={<Informations />} />
          <Route path='/Pelis' element={Pelis}></Route>
          <Route path="/appsbar" Component={DenseAppBar} />
        </Routes>
      </BrowserRouter>
    </InfoProvider>
    </>
  )
}

export default App
