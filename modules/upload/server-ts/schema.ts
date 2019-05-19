import gql from 'graphql-tag';

export default gql`
  scalar FileUpload

  type File {
    id: Int!
    name: String!
    type: String!
    size: Int!
    path: String!
  }

  extend type Query {
    files: [File]
  }

  extend type Mutation {
    uploadFiles(files: [FileUpload]!): Boolean!
    removeFile(id: Int!): Boolean!
  }
`;
