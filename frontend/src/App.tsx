import { Navigate, Route, Routes } from 'react-router-dom'
import './styles/App.css'
import { Login } from './routers/Login'
import { Home } from './routers/Home'
import { Stadiums } from './routers/Stadiums'
import { ReservationStadium } from './routers/ReservationStadium'
import { ConsultStadium } from './routers/ConsultStadium'
import { Navbar } from './components/Navbar'
import { useSelector } from 'react-redux'
import { UserLogin } from './types/TypesUtils'
import { EditReservationStadium } from './routers/EditReservationStadium'

function App() {

  const userLogin = useSelector((state:UserLogin) => state.userLogin)
  return (
    <>
      <div className='container-general'>
        {
          (userLogin.id > 0 && userLogin.username !== "") && (<Navbar></Navbar>)
        }
        <Routes>
          <Route path='/' element={ <Login></Login> }></Route>
          <Route path="/Home" element= { <Home></Home> }></Route>
          <Route path='/Stadiums' element= { <Stadiums></Stadiums> }></Route>
          <Route path='/Stadiums/Reserve' element= { <ReservationStadium></ReservationStadium> }></Route>
          <Route path='/Stadiums/Consult' element= { <ConsultStadium></ConsultStadium> }></Route>
          <Route path='/Stadiums/Reserve/Edit' element= { <EditReservationStadium></EditReservationStadium> } ></Route>
          <Route path="/*" element= { <Navigate to="/Home" /> }></Route>
        </Routes> 
      </div>
    </>

  )
}

export default App
