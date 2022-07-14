import styles from './app.module.css';

import { Route, Routes } from 'react-router-dom'


// component
import Header from './components/header/header';
import MoviesContainer from './components/moviesContainer/movies';
import FilteredMovies from './components/filter/filteredMovies';

// apollo-client
import { ApolloProvider, ApolloClient, InMemoryCache, gql } from "@apollo/client";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql/",
    cache: new InMemoryCache()
  });

  return (
      <ApolloProvider client={client}>
          <div className={styles.container}>
            <Header />
              <div className={styles.content}>
              <Routes>
                <Route path="/" element={<MoviesContainer /> } />
                <Route path="genre">
                  <Route path=":id" element={<FilteredMovies />} />
                </Route>
              </Routes>
            </div>
          </div>
      </ApolloProvider>
  );
}

export default App;
