import { gql } from "@apollo/client";

const GET_ALL_PROJECTS = gql`
  query {
    projects {
      id
      link
      name
      feature
      slug
      technologies
    }
  }
`;

export { GET_ALL_PROJECTS };
