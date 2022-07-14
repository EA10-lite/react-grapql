import { gql } from '@apollo/client' 

export const getMoviesQuery = gql`
  {
    movies {
        id
        title
        description
        poster_path
        release_date
        genreTypes {
            id
            name
        }
    }
  }
`;

export const getMovieBasedOnFilter = gql`
  query($name: String){
    genres(name: $name){
      id
      name
      movies{
        id
        title
        description
        release_date
        poster_path
        genreTypes {
          name
          id
        }
      }
    }
  }
`

export const searchMovieByName = gql`
  query($name: String) {
    movie(name: $name){
      id
      title
      description
      release_date
      poster_path
      genreTypes {
        name
        id
      }
    }
  }
`