export const typeDefs = `#graphql
type Character {
    id: ID! 
    name: String!
    status: String!
    species: String!
    gender: String!
    origin: [String!]!,
    location: [Location!]!,
    image: String!
    episode: [Episode!]!
    url: String!
    created: String!
}
type Episode {
    id: ID! 
    name: String!
    air_date: String!
    episode: String!
    character: [Character!]! 
    url: String!
    created: String!  
}
type Location {
    id: ID! 
    name: String!
    Type: String!
    dimension: String!
    residents: [Character!]! 
    url: String!
    created: String!  
}
type Query {
    character(id: ID!): Character 
    charactersByIds(ids: [ID!]!): [Character] 
}`;