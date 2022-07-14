import { useEffect, useState } from 'react';
import styles from './app.module.css';

// component
import Header from './components/header/header';
import MoviesContainer from './components/moviesContainer/movies';

function App() {
  const [ data, setData ] = useState([]);
  const [ movies, setMovies] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(false)

  useEffect(()=> {
    fetch("http://localhost:4000/graphql",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({
        query:`{
          movies {
            id
            title
            poster_path
            description
            release_date
            genreTypes {
              id
              name
            }
          }
        }`
      })
    })

    .then(res=> { return res.json() })
    .then(res=> {
      setData(res.data.movies);
      setError(false);
      setLoading(false);
    })
    .catch(err=> {
      setError(true);
      setLoading(false);
    })

  },[])

  useEffect(()=>{
    setMovies(data);
  },[data])

  const filterMovies = (title)=> {
    setMovies(data);
    if(title === ''){
      setMovies(data);
    }
    else {
      return setMovies(movies => movies.filter(movie=> movie.genreTypes.find(genre=> genre.name === title)));
    }
  }

  const searchMovie = (title)=> {
    setMovies(data);
    if(title === ""){
      setMovies(data);
    }
    return setMovies(movies => movies.filter(movie=> movie.title.toLowerCase().includes(title)));
  }

  if (loading) return "Loading...";
  if (error) return <p>{error.message}</p>

  return (
    <div className={styles.container}>
      <Header filterMovies={filterMovies} searchMovie={searchMovie} />
      <div className={styles.content}>
        <MoviesContainer data={movies}  />
      </div>
    </div>
  );
}

export default App;