import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";


const Blog = () => {

    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

    if (error) {

        return <p>error...</p>
    }
    if (loading) {
        return <p>loading...</p>

    } else {
        return (
            <>
                <h1>Blog de cositas</h1>
                <ul className="list-group">
                    {/*con agregarle al Link el prop to={`/blog/${dato.id}`}, hago que cuando clickee en el enlace me cree la pagina directamente del blog que elijo ver, eso lo puedo hacer en una tienda para que me lleve al articulo puntual y no tener 100 paginas para diferentes objetos*/}
                    {
                        data.map(dato =>
                        (
                            <Link to={`/blog/${dato.id}`} key={dato.id}
                                className="list-group-item">
                                {dato.id} {dato.title}
                            </Link>)
                        )
                    }
                </ul>
            </>
        )
    }
}



export default Blog;