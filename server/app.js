const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const app = express();
const cors = require("cors");

// allow cross origin requests
app.use(cors());

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true,
}))

app.listen(4000,()=>{
    console.log("LISTENING FOR REQUESTS ON PORT 4000");
})