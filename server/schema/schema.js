const graphql = require("graphql");

const { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLID, GraphQLString, GraphQLFloat } = graphql;

const { movies, genreTypes } = require("../data/data");

const GenreType = new GraphQLObjectType({
    name:"Genres",
    fields:()=> ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
    })
})
const Genre = new GraphQLObjectType({
    name:"Genre",
    fields:()=> ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        movies:{
            type: new GraphQLList(MovieType),
            resolve(parent,args){
                return movies.filter(movie=> {
                    return movie.genreTypes.find(item=> item.id === parent.id)
                })
            }
        }
    })
})
const MovieType = new GraphQLObjectType({
    name:"Movie",
    fields:()=>({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString }, 
        poster_path: { type: GraphQLString },
        release_date:{ type: GraphQLFloat },
        genreTypes: { type: new GraphQLList(GenreType) },
    })
})

const RootQuery = new GraphQLObjectType({
    name:"RootQueryType",
    fields:{
        movies:{
            type: new GraphQLList(MovieType),
            resolve(parent,args){
                return movies
            }
        },
        movie:{
            type: new GraphQLList(MovieType),
            args: { name: { type: GraphQLString} },
            resolve(parent,args){
                return movies.filter(movie=> movie.title.toLowerCase().includes(args.name));
            }
        },
        genres: {
            type: Genre,
            args: { name : { type: GraphQLString } },
            resolve(parent,args){
                return genreTypes.find(genre=> genre.name === args.name)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})