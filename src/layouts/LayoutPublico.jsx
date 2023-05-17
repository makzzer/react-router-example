//tengo que importar el elemento Outlet desde react-router-dom
//ese outlet va a representar a los links que se muestren y el resto va a ser por ejemplo un footer customizable
//que puedo usar en el resto de las paginas

import { Outlet } from "react-router-dom";

const LayoutPublico = () => {
    return (

        <div className="container">
            {/*el siguiente outlet corresponde a las rutas que le paso en el app*/}
            <Outlet />
            <footer><h3>Hola soy el footer</h3></footer>
        </div>



    )
}

export default LayoutPublico;