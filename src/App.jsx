import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Inicio from './pages/inicio';
import Contacto from './pages/Contacto';
import Blog from './pages/Blog';
import LayoutPublico from './layouts/LayoutPublico';
import NotFound from './pages/NotFound'

 
const App = () => {
  return (

    <>
      <Navbar />
      <h1>Hola react router2</h1>

      {/*en lo siguiente con Router defino las rutas y como se va a mover entre archivos en la SPA*/}

      {/*envuelvo todo en un componente Routes*/}
      <Routes>

        {/*anido las rutas  en un componente Route apuntando a un layoutPublico donde voy a usar Outlet*/}
        <Route element={<LayoutPublico />} path='/'>

          {/*Rutas referenciadas por el Outlet desde el componente LayoutPublico*/}
           {/*Ruta 404 la uso con path='*' */}
          <Route element={<Inicio />} path='/Inicio' />
          <Route element={<Contacto />} path='/Contacto'></Route>
          <Route element={<Blog />} path='/Blog'></Route>
          <Route element={<NotFound />} path='*'></Route>
        </Route>
      </Routes>


    </>

  )
}

export default App;