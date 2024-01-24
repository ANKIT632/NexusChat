import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home.page'
import NavBar from './components/navbar.component'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>


  )
}

export default App
