import { useFetch } from "../hooks/useFetch";


const Blog = () => {

    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

    if (error) {

    return <p>error...</p>}
    if (loading) {
        return <p>loading...</p>

    } else {
        return (
            <>
                <h1>Blog de cositas</h1>
                <ul>
                    {
                        data.map(dato =>
                        (
                            <li key={dato.id}>{dato.title} </li>)
                        )
                    }
                </ul>
            </>
        )
    }
}



export default Blog;