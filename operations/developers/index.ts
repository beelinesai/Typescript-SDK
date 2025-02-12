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

export const GET_DEVELOPER = gql`
  query getDeveloper($id: ID!) {
    developer(id: $id) {
      ...DeveloperFields
      authTokens {
        ...AuthTokenFields
      }
      agents {
        ...AgentWithRewardsFields
      }
    }
  }
  ${DEVELOPER_FRAGMENT}
  ${AUTH_TOKEN_FRAGMENT}
  ${AGENT_WITH_REWARDS_FRAGMENT}
`;
