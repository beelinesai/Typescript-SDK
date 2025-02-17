import { gql } from "graphql-tag";

export const DEVELOPER_FRAGMENT = gql`
  fragment DeveloperFields on Developer {
    id
    email
    createdAt
    updatedAt
  }
`;

export const AUTH_TOKEN_FRAGMENT = gql`
  fragment AuthTokenFields on AuthToken {
    id
    developerId
    token
    name
    metadata
    expiresAt
    createdAt
    updatedAt
  }
`;

export const AGENT_WITH_REWARDS_FRAGMENT = gql`
  fragment AgentWithRewardsFields on Agent {
    id
    name
    developerId
    createdAt
    updatedAt
  }
`;

export const AGENT_FRAGMENT = gql`
  fragment AgentFields on Agent {
    id
    name
    developerId
    createdAt
    updatedAt
  }
`;

export const AUDIENCE_FRAGMENT = gql`
  fragment AudienceFields on Audience {
    id
    name
    description
    apiKeyId
    pricingModel
    metadata
    createdAt
    updatedAt
  }
`;

export const AGENT_WITH_REWARDS = gql`
  fragment AgentWithRewardsAndHistoryFields on Agent {
    ...AgentFields
    rewardsGiven {
      id
      createdAt
      updatedAt
    }
  }
  ${AGENT_FRAGMENT}
`;

export const AGENT_WITH_RELATIONS_FRAGMENT = gql`
  fragment AgentWithRelationsFields on Agent {
    ...AgentFields
    characterData {
      id
      createdAt
      updatedAt
    }
    config {
      id 
      createdAt
      updatedAt
    }
  }
  ${AGENT_FRAGMENT}
`;

export const SEMANTIC_KNOWLEDGE_FRAGMENT = gql`
  fragment SemanticKnowledgeFields on SemanticKnowledge {
    id
    agentId
    type
    content
    context
    metadata
    createdAt
    updatedAt
  }
`;

export const POST_EXAMPLE_FRAGMENT = gql`
  fragment PostExampleFields on PostExample {
    id
    agentId
    content
    platform
    context
    tags
    createdAt
    updatedAt
  }
`;

export const MESSAGE_EXAMPLE_FRAGMENT = gql`
  fragment MessageExampleFields on MessageExample {
    id
    agentId
    content
    context
    tags
    createdAt
    updatedAt
  }
`;

export const AGENT_PERSONALITY_TRAIT_FRAGMENT = gql`
  fragment AgentPersonalityTraitFields on AgentPersonalityTrait {
    id
    agentId
    aspectId
    traitId
    dimensionId
    systemWeight
    relativeWeight
    confidence
    lastObservedAt
    observationCount
    metadata
    isCoreTrait
    createdAt
    updatedAt
  }
`;

// export const GROUP_FRAGMENT = gql`
//   fragment GroupFields on Group {
//     id
//     name
//     prompt
//     targetSize
//     status
//     metadata
//     createdAt
//     updatedAt
//   }
// `;