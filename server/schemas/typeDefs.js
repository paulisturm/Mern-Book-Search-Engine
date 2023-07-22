const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]!
  }

type Book {
    bookId: ID
    authors: String
    description: String
    title: String
    image: String
    link: String
}

type Auth {
    token: String
    user: User
}

type Query {
    me: User
  }

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(author: [String!], description: String!, title: String!, bookId: String!, image: String!, link: String!): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;