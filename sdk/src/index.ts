import { GraphQLClient, RequestOptions } from 'graphql-request';
import { GraphQLError, print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  JSON: { input: any; output: any; }
};

export type AddMessageExampleInput = {
  content: Scalars['String']['input'];
  context?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type AddPostExampleInput = {
  content: Scalars['String']['input'];
  context?: InputMaybe<Scalars['String']['input']>;
  platform: Scalars['String']['input'];
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type AddSemanticKnowledgeInput = {
  content: Scalars['String']['input'];
  context?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  type: Scalars['String']['input'];
};

export type Agent = {
  __typename?: 'Agent';
  characterData?: Maybe<CharacterData>;
  config?: Maybe<AgentConfig>;
  createdAt: Scalars['String']['output'];
  developerId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  rewardsGiven?: Maybe<Array<Maybe<Reward>>>;
  updatedAt: Scalars['String']['output'];
};

export type AgentConfig = {
  __typename?: 'AgentConfig';
  agentId: Scalars['ID']['output'];
  apis: Scalars['JSON']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  preferences: Scalars['JSON']['output'];
  updatedAt: Scalars['String']['output'];
};

export type AgentPersonalityTrait = {
  __typename?: 'AgentPersonalityTrait';
  agentId: Scalars['ID']['output'];
  aspectId?: Maybe<Scalars['ID']['output']>;
  confidence: Scalars['Float']['output'];
  createdAt: Scalars['String']['output'];
  dimensionId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  isCoreTrait: Scalars['Boolean']['output'];
  lastObservedAt: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  observationCount: Scalars['Int']['output'];
  relativeWeight: Scalars['Float']['output'];
  systemWeight: Scalars['Float']['output'];
  traitId?: Maybe<Scalars['ID']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type AgentPersonalityTraitFiltersInput = {
  agentId?: InputMaybe<Scalars['ID']['input']>;
  aspectId?: InputMaybe<Scalars['ID']['input']>;
  dimensionId?: InputMaybe<Scalars['ID']['input']>;
  isCoreTrait?: InputMaybe<Scalars['Boolean']['input']>;
  traitId?: InputMaybe<Scalars['ID']['input']>;
};

export type Aspect = {
  __typename?: 'Aspect';
  createdAt: Scalars['String']['output'];
  description: Scalars['String']['output'];
  dimensionId: Scalars['ID']['output'];
  handle: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type Audience = {
  __typename?: 'Audience';
  apiKeyId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  pricingModel?: Maybe<Scalars['JSON']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type AuthToken = {
  __typename?: 'AuthToken';
  createdAt: Scalars['String']['output'];
  developerId: Scalars['ID']['output'];
  expiresAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  token: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type CharacterData = {
  __typename?: 'CharacterData';
  adjectives: Array<Scalars['String']['output']>;
  agentId: Scalars['ID']['output'];
  bio: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lore?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type CreateAgentInput = {
  audienceId?: InputMaybe<Scalars['ID']['input']>;
  characterData?: InputMaybe<CreateCharacterDataInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAgentPersonalityTraitInput = {
  confidence?: InputMaybe<Scalars['Float']['input']>;
  isCoreTrait?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  relativeWeight?: InputMaybe<Scalars['Float']['input']>;
  systemWeight?: InputMaybe<Scalars['Float']['input']>;
  traitId: Scalars['ID']['input'];
};

export type CreateAspectInput = {
  description: Scalars['String']['input'];
  dimensionId: Scalars['ID']['input'];
  handle: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
};

export type CreateAudienceInput = {
  apiKeyId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  pricingModel?: InputMaybe<Scalars['JSON']['input']>;
};

export type CreateAuthTokenInput = {
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCharacterDataInput = {
  adjectives?: InputMaybe<Array<Scalars['String']['input']>>;
  bio: Scalars['String']['input'];
  lore?: InputMaybe<Scalars['String']['input']>;
};

export type CreateDeveloperInput = {
  email: Scalars['String']['input'];
};

export type CreateDeveloperTraitInput = {
  aspectId: Scalars['ID']['input'];
  description: Scalars['String']['input'];
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
};

export type CreateDimensionInput = {
  description: Scalars['String']['input'];
  handle: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
};

export type CreateGroupInput = {
  audienceId: Scalars['ID']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  prompt?: InputMaybe<Scalars['String']['input']>;
  status: Scalars['String']['input'];
  targetSize?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateTraitInput = {
  aspectId: Scalars['ID']['input'];
  description: Scalars['String']['input'];
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
};

export type Developer = {
  __typename?: 'Developer';
  agents?: Maybe<Array<Maybe<Agent>>>;
  authTokens?: Maybe<Array<Maybe<AuthToken>>>;
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['String']['output'];
};

export type Dimension = {
  __typename?: 'Dimension';
  createdAt: Scalars['String']['output'];
  description: Scalars['String']['output'];
  handle: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type Group = {
  __typename?: 'Group';
  audienceId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  prompt?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  targetSize?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type MessageExample = {
  __typename?: 'MessageExample';
  agentId: Scalars['ID']['output'];
  content: Scalars['String']['output'];
  context?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  tags?: Maybe<Array<Scalars['String']['output']>>;
  updatedAt: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addMessageExamples: Array<MessageExample>;
  addPostExamples: Array<PostExample>;
  addSemanticKnowledge: Array<SemanticKnowledge>;
  claimReward: Scalars['Boolean']['output'];
  createAgent: Agent;
  createAgentPersonalityTrait: AgentPersonalityTrait;
  createAspect: Aspect;
  createAudience: Audience;
  createAuthToken: AuthToken;
  createDeveloper: Developer;
  createDimension: Dimension;
  createGroup: Group;
  createTrait: Trait;
  createTraitAndAddToAgentPersonality: AgentPersonalityTrait;
  deleteAgent: Scalars['Boolean']['output'];
  deleteAgentPersonalityTrait: Scalars['Boolean']['output'];
  deleteAspect: Scalars['Boolean']['output'];
  deleteAudience: Scalars['Boolean']['output'];
  deleteAuthToken: Scalars['Boolean']['output'];
  deleteDeveloper: Scalars['Boolean']['output'];
  deleteDimension: Scalars['Boolean']['output'];
  deleteGroup: Scalars['Boolean']['output'];
  deleteMessageExample: Scalars['Boolean']['output'];
  deletePostExample: Scalars['Boolean']['output'];
  deleteSemanticKnowledge: Scalars['Boolean']['output'];
  deleteTrait: Scalars['Boolean']['output'];
  getOrCreateDeveloper: Developer;
  updateAgent: Scalars['Boolean']['output'];
  updateAspect: Scalars['Boolean']['output'];
  updateAudience: Scalars['Boolean']['output'];
  updateAuthToken: AuthToken;
  updateDimension: Scalars['Boolean']['output'];
  updateGroup: Scalars['Boolean']['output'];
  updateMessageExample: MessageExample;
  updatePostExample: PostExample;
  updateSemanticKnowledge: SemanticKnowledge;
  updateTrait: Scalars['Boolean']['output'];
};


export type MutationAddMessageExamplesArgs = {
  agentId: Scalars['ID']['input'];
  items: Array<AddMessageExampleInput>;
};


export type MutationAddPostExamplesArgs = {
  agentId: Scalars['ID']['input'];
  items: Array<AddPostExampleInput>;
};


export type MutationAddSemanticKnowledgeArgs = {
  agentId: Scalars['ID']['input'];
  items: Array<AddSemanticKnowledgeInput>;
};


export type MutationClaimRewardArgs = {
  agentId: Scalars['ID']['input'];
  rewardId: Scalars['ID']['input'];
};


export type MutationCreateAgentArgs = {
  developerId: Scalars['ID']['input'];
  input?: InputMaybe<CreateAgentInput>;
};


export type MutationCreateAgentPersonalityTraitArgs = {
  agentId: Scalars['ID']['input'];
  input: CreateAgentPersonalityTraitInput;
};


export type MutationCreateAspectArgs = {
  input: CreateAspectInput;
};


export type MutationCreateAudienceArgs = {
  input: CreateAudienceInput;
};


export type MutationCreateAuthTokenArgs = {
  developerId: Scalars['ID']['input'];
  input: CreateAuthTokenInput;
};


export type MutationCreateDeveloperArgs = {
  email: Scalars['String']['input'];
};


export type MutationCreateDimensionArgs = {
  input: CreateDimensionInput;
};


export type MutationCreateGroupArgs = {
  input: CreateGroupInput;
};


export type MutationCreateTraitArgs = {
  input: CreateTraitInput;
};


export type MutationCreateTraitAndAddToAgentPersonalityArgs = {
  agentId: Scalars['ID']['input'];
  input: CreateTraitInput;
};


export type MutationDeleteAgentArgs = {
  developerId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationDeleteAgentPersonalityTraitArgs = {
  agentId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationDeleteAspectArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteAudienceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteAuthTokenArgs = {
  developerId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationDeleteDeveloperArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteDimensionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteGroupArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMessageExampleArgs = {
  agentId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationDeletePostExampleArgs = {
  agentId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationDeleteSemanticKnowledgeArgs = {
  agentId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationDeleteTraitArgs = {
  id: Scalars['ID']['input'];
};


export type MutationGetOrCreateDeveloperArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateAgentArgs = {
  developerId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  input: UpdateAgentInput;
};


export type MutationUpdateAspectArgs = {
  id: Scalars['ID']['input'];
  input: UpdateAspectInput;
};


export type MutationUpdateAudienceArgs = {
  id: Scalars['ID']['input'];
  input: UpdateAudienceInput;
};


export type MutationUpdateAuthTokenArgs = {
  developerId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  input: UpdateAuthTokenInput;
};


export type MutationUpdateDimensionArgs = {
  id: Scalars['ID']['input'];
  input: UpdateDimensionInput;
};


export type MutationUpdateGroupArgs = {
  id: Scalars['ID']['input'];
  input: UpdateGroupInput;
};


export type MutationUpdateMessageExampleArgs = {
  agentId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  input: UpdateMessageExampleInput;
};


export type MutationUpdatePostExampleArgs = {
  agentId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  input: UpdatePostExampleInput;
};


export type MutationUpdateSemanticKnowledgeArgs = {
  agentId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  input: UpdateSemanticKnowledgeInput;
};


export type MutationUpdateTraitArgs = {
  id: Scalars['ID']['input'];
  input: UpdateTraitInput;
};

export type PostExample = {
  __typename?: 'PostExample';
  agentId: Scalars['ID']['output'];
  content: Scalars['String']['output'];
  context?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  platform: Scalars['String']['output'];
  tags?: Maybe<Array<Scalars['String']['output']>>;
  updatedAt: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  agent?: Maybe<Agent>;
  agentPersonalityTrait?: Maybe<AgentPersonalityTrait>;
  agentPersonalityTraits: Array<AgentPersonalityTrait>;
  agentRewards?: Maybe<Array<Maybe<Reward>>>;
  agents: Array<Agent>;
  aspect?: Maybe<Aspect>;
  aspects: Array<Aspect>;
  audience?: Maybe<Audience>;
  audiences: Array<Audience>;
  authToken?: Maybe<AuthToken>;
  authTokens: Array<AuthToken>;
  developer?: Maybe<Developer>;
  dimension?: Maybe<Dimension>;
  dimensions: Array<Dimension>;
  getLevelTwoTraits?: Maybe<Scalars['JSON']['output']>;
  group?: Maybe<Group>;
  groups: Array<Group>;
  messageExample?: Maybe<MessageExample>;
  messageExamples: Array<MessageExample>;
  postExample?: Maybe<PostExample>;
  postExamples: Array<PostExample>;
  semanticKnowledge: Array<SemanticKnowledge>;
  trait?: Maybe<Trait>;
  traits: Array<Trait>;
};


export type QueryAgentArgs = {
  developerId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type QueryAgentPersonalityTraitArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAgentPersonalityTraitsArgs = {
  filters?: InputMaybe<AgentPersonalityTraitFiltersInput>;
};


export type QueryAgentRewardsArgs = {
  agentId: Scalars['ID']['input'];
};


export type QueryAgentsArgs = {
  developerId: Scalars['ID']['input'];
};


export type QueryAspectArgs = {
  idOrHandle: Scalars['String']['input'];
};


export type QueryAudienceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAuthTokenArgs = {
  developerId: Scalars['ID']['input'];
  token: Scalars['String']['input'];
};


export type QueryAuthTokensArgs = {
  developerId: Scalars['ID']['input'];
};


export type QueryDeveloperArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDimensionArgs = {
  idOrHandle: Scalars['String']['input'];
};


export type QueryGetLevelTwoTraitsArgs = {
  agentId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMessageExampleArgs = {
  agentId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type QueryMessageExamplesArgs = {
  agentId: Scalars['ID']['input'];
  context?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPostExampleArgs = {
  agentId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type QueryPostExamplesArgs = {
  agentId: Scalars['ID']['input'];
  context?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySemanticKnowledgeArgs = {
  agentId: Scalars['ID']['input'];
  context?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTraitArgs = {
  id: Scalars['ID']['input'];
};

export type Reward = {
  __typename?: 'Reward';
  amount: Scalars['Float']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  rewardSpecificationId: Scalars['ID']['output'];
  txHash?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type SemanticKnowledge = {
  __typename?: 'SemanticKnowledge';
  agentId: Scalars['ID']['output'];
  content: Scalars['String']['output'];
  context?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type Trait = {
  __typename?: 'Trait';
  aspectId: Scalars['ID']['output'];
  createdAt: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type UpdateAgentInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAspectInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAudienceInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pricingModel?: InputMaybe<Scalars['JSON']['input']>;
};

export type UpdateAuthTokenInput = {
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDeveloperInput = {
  email: Scalars['String']['input'];
};

export type UpdateDimensionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateGroupInput = {
  audienceId?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  prompt?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  targetSize?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateMessageExampleInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  context?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdatePostExampleInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  context?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateSemanticKnowledgeInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  context?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTraitInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateDeveloperMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type CreateDeveloperMutation = { __typename?: 'Mutation', createDeveloper: { __typename?: 'Developer', id: string, email: string, createdAt: string, updatedAt: string } };

export type GetDeveloperQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetDeveloperQuery = { __typename?: 'Query', developer?: { __typename?: 'Developer', id: string, email: string, createdAt: string, updatedAt: string, authTokens?: Array<{ __typename?: 'AuthToken', id: string, developerId: string, token: string, name?: string | null, metadata?: any | null, expiresAt?: string | null, createdAt: string, updatedAt: string } | null> | null, agents?: Array<{ __typename?: 'Agent', id: string, name: string, developerId: string, createdAt: string, updatedAt: string } | null> | null } | null };

export type DeveloperFieldsFragment = { __typename?: 'Developer', id: string, email: string, createdAt: string, updatedAt: string };

export type AuthTokenFieldsFragment = { __typename?: 'AuthToken', id: string, developerId: string, token: string, name?: string | null, metadata?: any | null, expiresAt?: string | null, createdAt: string, updatedAt: string };

export type AgentWithRewardsFieldsFragment = { __typename?: 'Agent', id: string, name: string, developerId: string, createdAt: string, updatedAt: string };

export type AgentFieldsFragment = { __typename?: 'Agent', id: string, name: string, developerId: string, createdAt: string, updatedAt: string };

export type AudienceFieldsFragment = { __typename?: 'Audience', id: string, name: string, description?: string | null, apiKeyId?: string | null, pricingModel?: any | null, metadata?: any | null, createdAt: string, updatedAt: string };

export type AgentWithRewardsAndHistoryFieldsFragment = { __typename?: 'Agent', id: string, name: string, developerId: string, createdAt: string, updatedAt: string, rewardsGiven?: Array<{ __typename?: 'Reward', id: string, createdAt: string, updatedAt: string } | null> | null };

export type AgentWithRelationsFieldsFragment = { __typename?: 'Agent', id: string, name: string, developerId: string, createdAt: string, updatedAt: string, characterData?: { __typename?: 'CharacterData', id: string, createdAt: string, updatedAt: string } | null, config?: { __typename?: 'AgentConfig', id: string, createdAt: string, updatedAt: string } | null };

export type SemanticKnowledgeFieldsFragment = { __typename?: 'SemanticKnowledge', id: string, agentId: string, type: string, content: string, context?: string | null, metadata?: any | null, createdAt: string, updatedAt: string };

export type PostExampleFieldsFragment = { __typename?: 'PostExample', id: string, agentId: string, content: string, platform: string, context?: string | null, tags?: Array<string> | null, createdAt: string, updatedAt: string };

export type MessageExampleFieldsFragment = { __typename?: 'MessageExample', id: string, agentId: string, content: string, context?: string | null, tags?: Array<string> | null, createdAt: string, updatedAt: string };

export type AgentPersonalityTraitFieldsFragment = { __typename?: 'AgentPersonalityTrait', id: string, agentId: string, aspectId?: string | null, traitId?: string | null, dimensionId?: string | null, systemWeight: number, relativeWeight: number, confidence: number, lastObservedAt: string, observationCount: number, metadata?: any | null, isCoreTrait: boolean, createdAt: string, updatedAt: string };

export type GroupFieldsFragment = { __typename?: 'Group', id: string, audienceId?: string | null, name?: string | null, prompt?: string | null, targetSize?: number | null, status: string, metadata?: any | null, createdAt: string, updatedAt: string };

export const DeveloperFieldsFragmentDoc = gql`
    fragment DeveloperFields on Developer {
  id
  email
  createdAt
  updatedAt
}
    `;
export const AuthTokenFieldsFragmentDoc = gql`
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
export const AgentWithRewardsFieldsFragmentDoc = gql`
    fragment AgentWithRewardsFields on Agent {
  id
  name
  developerId
  createdAt
  updatedAt
}
    `;
export const AudienceFieldsFragmentDoc = gql`
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
export const AgentFieldsFragmentDoc = gql`
    fragment AgentFields on Agent {
  id
  name
  developerId
  createdAt
  updatedAt
}
    `;
export const AgentWithRewardsAndHistoryFieldsFragmentDoc = gql`
    fragment AgentWithRewardsAndHistoryFields on Agent {
  ...AgentFields
  rewardsGiven {
    id
    createdAt
    updatedAt
  }
}
    ${AgentFieldsFragmentDoc}`;
export const AgentWithRelationsFieldsFragmentDoc = gql`
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
    ${AgentFieldsFragmentDoc}`;
export const SemanticKnowledgeFieldsFragmentDoc = gql`
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
export const PostExampleFieldsFragmentDoc = gql`
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
export const MessageExampleFieldsFragmentDoc = gql`
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
export const AgentPersonalityTraitFieldsFragmentDoc = gql`
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
export const GroupFieldsFragmentDoc = gql`
    fragment GroupFields on Group {
  id
  audienceId
  name
  prompt
  targetSize
  status
  metadata
  createdAt
  updatedAt
}
    `;
export const CreateDeveloperDocument = gql`
    mutation createDeveloper($email: String!) {
  createDeveloper(email: $email) {
    ...DeveloperFields
  }
}
    ${DeveloperFieldsFragmentDoc}`;
export const GetDeveloperDocument = gql`
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
    ${DeveloperFieldsFragmentDoc}
${AuthTokenFieldsFragmentDoc}
${AgentWithRewardsFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();
const CreateDeveloperDocumentString = print(CreateDeveloperDocument);
const GetDeveloperDocumentString = print(GetDeveloperDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createDeveloper(variables: CreateDeveloperMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: CreateDeveloperMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<CreateDeveloperMutation>(CreateDeveloperDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createDeveloper', 'mutation', variables);
    },
    getDeveloper(variables: GetDeveloperQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetDeveloperQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetDeveloperQuery>(GetDeveloperDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getDeveloper', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;