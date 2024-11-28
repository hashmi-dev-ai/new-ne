import { Routes, Route } from 'react-router-dom'
import PrivateRoutes from './privateRoutes/PrivateRoutes'
import PublicRoutes from './publicRoutes/PublicRoutes'
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
function App() {

  return (
    <Routes>
      <Route path='/' element={<PrivateRoutes/>}>
      <Route path='/home' element={<Home/>}></Route>
      </Route>

      <Route path='/' element={<PublicRoutes/>}>
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      </Route>
    </Routes>
  )
}

export default App
