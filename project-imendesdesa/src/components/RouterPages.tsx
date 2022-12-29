import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Vigor } from '../pages/Vigor'
import { Seaside } from '../pages/Seaside'

export function RoutePages() {
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/vigor' element={<Vigor/>}/>
      <Route path='/seaside' element={<Seaside/>}/>
    </Routes>
  )
}