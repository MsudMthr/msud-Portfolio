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

const GET_PROJECT_INFO = gql`
  query getProjectInfo($slug: String) {
    project(where: { slug: $slug }) {
      slug
      name
      link
      id
      description {
        html
      }
      feature
      technologies
      cover {
        url
      }
    }
  }
`;

export { GET_ALL_PROJECTS, GET_PROJECT_INFO };
