import { Navigate, Route, Routes } from 'react-router-dom'
import './styles/App.css'
import { Login } from './routers/Login'
import { Home } from './routers/Home'
import { Stadiums } from './routers/Stadiums'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={ <Login></Login>}></Route>
        <Route path="/Home" element= { <Home></Home> }></Route>
        <Route path='/Stadiums' element= { <Stadiums></Stadiums> }></Route>
        <Route path="/*" element= { <Navigate to="/" /> }></Route>
      </Routes> 
    </>
  )
}

export default App
