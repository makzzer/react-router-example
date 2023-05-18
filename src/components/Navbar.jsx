import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className='navbar navbar-dark bg-dark'>
                <div className='container'>
                    {/*la diferencia entre usar el componente de React : Link y usar el componente html a es que Link no vuelve a crear toda la pagina web otra vez, usa caché para ser mas performante*/}
                    <NavLink className='btn btn-outline-primary' to="inicio">Inicio</NavLink>
                    <NavLink className='btn btn-outline-danger' to="contacto">Contacto</NavLink>
                    <NavLink className='btn btn-outline-warning' to="blog">Blog</NavLink>
                </div>
            </div>
        </>

    )
}

export default Navbar;