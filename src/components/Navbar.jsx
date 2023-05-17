import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className='navbar navbar-dark bg-dark'>
                <div className='container'>
                    <Link className='btn btn-outline-primary' to="inicio">Inicio</Link>
                    <Link className='btn btn-outline-danger' to="contacto">Contacto</Link>
                    <Link className='btn btn-outline-warning' to="blog">Blog</Link>
                </div>
            </div>
        </>

    )
}

export default Navbar;