import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Vigor } from '../pages/Vigor'
import { Seaside } from '../pages/Seaside'
import { LoginVigor } from '../pages/LoginVigor'
import { LoginSeaside } from '../pages/LoginSeaside'


export function RoutePages() {
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/vigor' element={<Vigor/>}/>
      <Route path='/seaside' element={<Seaside/>}/>
      <Route path='/loginvigor' element={<LoginVigor/>}/>
      <Route path='/loginseaside' element={<LoginSeaside/>}/>
    </Routes>
  )
}