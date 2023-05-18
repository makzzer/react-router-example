import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const BlogDetails = () => {

    //capturo el parametro que recibo cuando le doy click a la lista de articulos que llegan desde la API
    const idParametro = useParams()
    console.log(idParametro)

    const { data, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${idParametro.id}`);

    if (error) {
        <h1>Error....</h1>

    } if (loading) {
        <h1>Loading...</h1>

    } else {

        return (
            <>

                {
                    data ?

                        <>
                            <h1>Blog details variable</h1>
                            <h1>{data.id} </h1>
                            <h2>{data.title}</h2>
                            <Link to="/blog" className="btn btn-outline-danger">Volver</Link>
                        </>

                        : <h1>LOADING...</h1>
                }
            </>
        )
    }
}
export default BlogDetails;