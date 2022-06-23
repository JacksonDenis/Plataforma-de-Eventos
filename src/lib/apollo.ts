import {ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient ({
    uri:'https://api-sa-east-1.graphcms.com/v2/cl4rdnf4s0yic01z6dc6efl0m/master',
    cache: new InMemoryCache()
})