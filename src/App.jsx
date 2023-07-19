import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import Noticias from './Pages/Noticias/Noticias'
import Header from './Components/Header/Header'
import Cadastro from './Pages/Cadastro/Cadastro'
import { AuthContext } from './context/AuthContext'
import { useContext } from 'react'


import './App.css'



function App() {

  const { isLoggedIn } = useContext(AuthContext)

  return (
    <div className='App'>
      <Router>
        { isLoggedIn && <Header /> }
        <Routes>
          <Route path='/login' exact element={!isLoggedIn ? <Login /> : <Navigate to='/home' />} />
          <Route path='/' exact element={isLoggedIn ? <Home /> : <Navigate to='/login' />} />
          <Route path='/login' exact element={isLoggedIn ? <Login /> : <Navigate to='/login' />} />
          <Route path='/home' element={isLoggedIn ? <Home /> : <Navigate to='/login' />} />
          <Route path='/noticias' element={isLoggedIn ? <Noticias /> : <Navigate to='/login' />} />
          <Route path='/cadastro' element={isLoggedIn ? <Cadastro /> : <Navigate to='/login' />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
