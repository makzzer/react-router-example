import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { Link, useSearchParams } from "react-router-dom";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  /*pseudo queris para hacer una busqueda con cierto parametro en la barra del navegador
    useEffect(() => {
        console.log(searchParams.get('name'));
    }
        , [searchParams])
*/

  const handleChange = (e) => {
    let loQueEscribioElUsuarioEnElFiltro = e.target.value;
    {
      /*En lo siguiente le seteo que para el "filter" que definí en el value del input dentro de searchParams.get("filter"), y ese filter yo digo que va a ser igual a lo que escribe el usuario en el input*/
    }
    setSearchParams({ filter: loQueEscribioElUsuarioEnElFiltro });
  };

  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (error) {
    return <p>error...</p>;
  }
  if (loading) {
    return <p>loading...</p>;
  } else {
    return (
      <>
        <h1>Blog de cositas</h1>

        <input
          type="text"
          name="filtrotonto"
          value={searchParams.get("filter") || ""}
          onChange={handleChange}
          className="form-control my-3"
        ></input>

        <ul className="list-group">
          {/*con agregarle al Link el prop to={`/blog/${dato.id}`}, hago que cuando clickee en el enlace me cree la pagina directamente del blog que elijo ver, eso lo puedo hacer en una tienda para que me lleve al articulo puntual y no tener 100 paginas para diferentes objetos*/}
          {data.filter(item =>{
          
            //defino el filtro que voy a usar, con el searParams
            let filter = searchParams.get("filter")
            //si el filtro no existe, osea que no hubo busqueda, retorno todos los elementos
            if (!filter) return true;

            //sino si el nombre comienza con lo que dice el filtro, eso me devuelve un nuevo array y ese array recorro con un map
            let name = item.title.toLowerCase()
            return name.startsWith(filter.toLocaleLowerCase())
          }
          )
          
          
          .map((dato) => (
            <Link
              to={`/blog/${dato.id}`}
              key={dato.id}
              className="list-group-item"
            >
              {dato.id} {dato.title}
            </Link>
          ))}
        </ul>
      </>
    );
  }
};

export default Blog;
