import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Inicio from './pages/inicio';
import Contacto from './pages/Contacto';
import Blog from './pages/Blog';

const App = () => {
  return (

    <>
      <Navbar></Navbar>
      <h1>Hola react router2</h1>

      <Routes>
        <Route element={<Inicio />} path='/Inicio'> </Route>
        <Route element={<Contacto/>} path='/Contacto'></Route>
        <Route element={<Blog/>} path='/Blog'></Route>
      </Routes>



    </>

  )
}

export default App;