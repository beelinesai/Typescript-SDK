import { gql } from "graphql-tag";
import { DEVELOPER_FRAGMENT, AUTH_TOKEN_FRAGMENT, AGENT_WITH_REWARDS_FRAGMENT } from "../fragments";

export const CREATE_DEVELOPER = gql`
  mutation createDeveloper($email: String!) {
    createDeveloper(email: $email) {
      ...DeveloperFields
    }
  }
  ${DEVELOPER_FRAGMENT}
`;

export const DEVELOPER = gql`
  query developer($id: ID!) {
    developer(id: $id) {
      ...DeveloperFields
    }
  }
  ${DEVELOPER_FRAGMENT}
`;
