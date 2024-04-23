import { Navigate, Route, Routes } from 'react-router-dom'
import './styles/App.css'
import { Login } from './routers/Login'
import { Home } from './routers/Home'
import { Courts } from './routers/Courts'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={ <Login></Login>}></Route>
        <Route path="/Home" element= { <Home></Home> }></Route>
        <Route path='/Courts' element= { <Courts></Courts> }></Route>
        <Route path="/*" element= { <Navigate to="/" /> }></Route>
      </Routes> 
    </>
  )
}

export default App
