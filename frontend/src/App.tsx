import { Navigate, Route, Routes } from 'react-router-dom'
import './styles/App.css'
import { Login } from './routers/Login'
import { Home } from './routers/Home'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={ <Login></Login>}></Route>
        <Route path="/Home" element= { <Home></Home> }></Route>
        <Route path="/*" element= { <Navigate to="/" /> }></Route>
      </Routes> 
    </>
  )
}

export default App
