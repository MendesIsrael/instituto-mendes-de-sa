import { Home } from './pages/Home'
import { RoutePages } from './components/RouterPages'
import { BrowserRouter } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import './global.css'

export function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <RoutePages/>
    </BrowserRouter> 
  )
}

