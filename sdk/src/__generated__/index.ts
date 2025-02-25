import type { GraphQLClient, RequestOptions } from 'graphql-request';
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

export type AddToAudienceInput = {
  prompt?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type Agent = {
  audienceMembershipCount?: Maybe<Scalars['Int']['output']>;
  characterData?: Maybe<CharacterData>;
  config?: Maybe<AgentConfig>;
  createdAt: Scalars['String']['output'];
  developerId: Scalars['ID']['output'];
  groupMembershipCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  panelMembershipCount?: Maybe<Scalars['Int']['output']>;
  rewardsGiven?: Maybe<Array<Maybe<Reward>>>;
  updatedAt: Scalars['String']['output'];
};

export type AgentConfig = {
  agentId: Scalars['ID']['output'];
  apis: Scalars['JSON']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  preferences: Scalars['JSON']['output'];
  updatedAt: Scalars['String']['output'];
};

export type AgentPersonalityTrait = {
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
  apiKeyId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  memberCount?: Maybe<Scalars['Int']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  pricingModel?: Maybe<Scalars['JSON']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type AuthToken = {
  createdAt: Scalars['String']['output'];
  developerId: Scalars['ID']['output'];
  expiresAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  token: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export enum AvailableModels {
  Gemini_1_5Flash = 'gemini_1_5_flash',
  Gemini_1_5Flash_001 = 'gemini_1_5_flash_001',
  Gemini_1_5Flash_002 = 'gemini_1_5_flash_002',
  Gemini_1_5Flash_8b = 'gemini_1_5_flash_8b',
  Gemini_1_5Flash_8b_001 = 'gemini_1_5_flash_8b_001',
  Gemini_1_5Flash_8bLatest = 'gemini_1_5_flash_8b_latest',
  Gemini_1_5FlashLatest = 'gemini_1_5_flash_latest',
  Gemini_1_5Pro = 'gemini_1_5_pro',
  Gemini_1_5Pro_001 = 'gemini_1_5_pro_001',
  Gemini_1_5Pro_002 = 'gemini_1_5_pro_002',
  Gemini_1_5ProLatest = 'gemini_1_5_pro_latest',
  Gemini_2_0Flash_001 = 'gemini_2_0_flash_001',
  Gemini_2_0FlashExp = 'gemini_2_0_flash_exp',
  Gemini_2_0FlashLitePreview_02_05 = 'gemini_2_0_flash_lite_preview_02_05',
  Gemini_2_0FlashThinkingExp_01_21 = 'gemini_2_0_flash_thinking_exp_01_21',
  Gemini_2_0ProExp_02_05 = 'gemini_2_0_pro_exp_02_05',
  GeminiExp_1206 = 'gemini_exp_1206',
  Gpt_3_5Turbo = 'gpt_3_5_turbo',
  Gpt_3_5Turbo_0125 = 'gpt_3_5_turbo_0125',
  Gpt_3_5Turbo_1106 = 'gpt_3_5_turbo_1106',
  Gpt_4 = 'gpt_4',
  Gpt_4_0125Preview = 'gpt_4_0125_preview',
  Gpt_4_0613 = 'gpt_4_0613',
  Gpt_4_1106Preview = 'gpt_4_1106_preview',
  Gpt_4Turbo = 'gpt_4_turbo',
  Gpt_4Turbo_2024_04_09 = 'gpt_4_turbo_2024_04_09',
  Gpt_4TurboPreview = 'gpt_4_turbo_preview',
  Gpt_4o = 'gpt_4o',
  Gpt_4o_2024_05_13 = 'gpt_4o_2024_05_13',
  Gpt_4o_2024_08_06 = 'gpt_4o_2024_08_06',
  Gpt_4o_2024_11_20 = 'gpt_4o_2024_11_20',
  Gpt_4oAudioPreview = 'gpt_4o_audio_preview',
  Gpt_4oAudioPreview_2024_10_01 = 'gpt_4o_audio_preview_2024_10_01',
  Gpt_4oAudioPreview_2024_12_17 = 'gpt_4o_audio_preview_2024_12_17',
  Gpt_4oMini = 'gpt_4o_mini',
  Gpt_4oMini_2024_07_18 = 'gpt_4o_mini_2024_07_18',
  Learnlm_1_5ProExperimental = 'learnlm_1_5_pro_experimental',
  O1 = 'o1',
  O1_2024_12_17 = 'o1_2024_12_17',
  O1Mini = 'o1_mini',
  O1Mini_2024_09_12 = 'o1_mini_2024_09_12',
  O1Preview = 'o1_preview',
  O1Preview_2024_09_12 = 'o1_preview_2024_09_12',
  O3Mini = 'o3_mini',
  O3Mini_2025_01_31 = 'o3_mini_2025_01_31'
}

export type Beeline = {
  cohortSummary?: Maybe<Scalars['String']['output']>;
  cohorts?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  errorDetails?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  organizationId?: Maybe<Scalars['ID']['output']>;
  responses?: Maybe<Array<Maybe<BeelineResponse>>>;
  status?: Maybe<BeelineStatus>;
  summarizationPrompt?: Maybe<Scalars['String']['output']>;
  targetId?: Maybe<Scalars['ID']['output']>;
  targetType?: Maybe<Scalars['String']['output']>;
  threadId?: Maybe<Scalars['ID']['output']>;
  threadMessageId?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type BeelineResponse = {
  agentId: Scalars['ID']['output'];
  agentName: Scalars['String']['output'];
  response?: Maybe<Scalars['JSON']['output']>;
};

export enum BeelineStatus {
  Completed = 'completed',
  Error = 'error',
  Pending = 'pending',
  Processing = 'processing'
}

export type CharacterData = {
  adjectives: Array<Scalars['String']['output']>;
  agentId: Scalars['ID']['output'];
  bio: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lore?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type Chat = {
  latestThread: LatestThread;
  threads: Array<ThreadLite>;
};

export type ChatSource = {
  sourceId: Scalars['ID']['input'];
  sourceType: ChatSourceType;
};

export enum ChatSourceType {
  Agent = 'agent',
  Group = 'group'
}

export type CompletedBeeline = {
  responses?: Maybe<Array<Maybe<BeelineResponse>>>;
  status: BeelineStatus;
  summary?: Maybe<Scalars['String']['output']>;
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

export type CreateBeelineInput = {
  content: Scalars['String']['input'];
  inResponseToId?: InputMaybe<Scalars['ID']['input']>;
  interactionId?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  model?: InputMaybe<AvailableModels>;
  responseType?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
  senderId?: InputMaybe<Scalars['ID']['input']>;
  senderType: SenderType;
  summarizationPrompt?: InputMaybe<Scalars['String']['input']>;
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
  agentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  prompt?: InputMaybe<Scalars['String']['input']>;
  sourceId: Scalars['ID']['input'];
  sourceType: SourceType;
  status?: InputMaybe<GroupStatus>;
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
  agents?: Maybe<Array<Maybe<Agent>>>;
  authTokens?: Maybe<Array<Maybe<AuthToken>>>;
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  organizationId?: Maybe<Scalars['ID']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type Dimension = {
  createdAt: Scalars['String']['output'];
  description: Scalars['String']['output'];
  handle: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type GenerateAgentsInput = {
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type GenerateAudienceInput = {
  apiKeyId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  pricingModel?: InputMaybe<Scalars['JSON']['input']>;
  prompt?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type Group = {
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  prompt?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['JSON']['output']>;
  sourceId: Scalars['ID']['output'];
  sourceType: SourceType;
  status: Scalars['String']['output'];
  targetSize?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['String']['output'];
};

export enum GroupStatus {
  Active = 'active',
  Completed = 'completed',
  Forming = 'forming',
  Paused = 'paused'
}

export type LatestThread = {
  beelines?: Maybe<Array<Maybe<Beeline>>>;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  messages: Array<Maybe<ThreadMessage>>;
  metadata?: Maybe<ThreadMetadata>;
  name: Scalars['String']['output'];
  organizationId: Scalars['ID']['output'];
  pendingBeeline?: Maybe<Scalars['Boolean']['output']>;
  pendingBeelineId?: Maybe<Scalars['ID']['output']>;
  settings?: Maybe<ThreadSetting>;
  source?: Maybe<ThreadSource>;
  sourceId: Scalars['String']['output'];
  sourceType: ChatSourceType;
  stats?: Maybe<ThreadStats>;
  status: ThreadStatus;
  updatedAt: Scalars['String']['output'];
};

export type MessageExample = {
  agentId: Scalars['ID']['output'];
  content: Scalars['String']['output'];
  context?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  tags?: Maybe<Array<Scalars['String']['output']>>;
  updatedAt: Scalars['String']['output'];
};

export type Mutation = {
  addMessageExamples: Array<MessageExample>;
  addPostExamples: Array<PostExample>;
  addSemanticKnowledge: Array<SemanticKnowledge>;
  addToAudience: Audience;
  claimReward: Scalars['Boolean']['output'];
  createAgent: Agent;
  createAgentPersonalityTrait: AgentPersonalityTrait;
  createAudience: Audience;
  createAuthToken: AuthToken;
  createBeeline: Scalars['ID']['output'];
  createDeveloper: Developer;
  createGroup: Group;
  createThread: Scalars['ID']['output'];
  createTrait: Trait;
  createTraitAndAddToAgentPersonality: AgentPersonalityTrait;
  deleteAgent: Scalars['Boolean']['output'];
  deleteAgentPersonalityTrait: Scalars['Boolean']['output'];
  deleteAudience: Scalars['Boolean']['output'];
  deleteAuthToken: Scalars['Boolean']['output'];
  deleteDeveloper: Scalars['Boolean']['output'];
  deleteGroup: Scalars['Boolean']['output'];
  deleteMessageExample: Scalars['Boolean']['output'];
  deletePostExample: Scalars['Boolean']['output'];
  deleteSemanticKnowledge: Scalars['Boolean']['output'];
  deleteTrait: Scalars['Boolean']['output'];
  generateAgents: Array<Agent>;
  generateAudience: Audience;
  getOrCreateDeveloper: Developer;
  importElizaAgent: Agent;
  openChat: Chat;
  updateAgent: Scalars['Boolean']['output'];
  updateAudience: Scalars['Boolean']['output'];
  updateAuthToken: AuthToken;
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


export type MutationAddToAudienceArgs = {
  id: Scalars['ID']['input'];
  input: AddToAudienceInput;
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


export type MutationCreateAudienceArgs = {
  input: CreateAudienceInput;
};


export type MutationCreateAuthTokenArgs = {
  developerId: Scalars['ID']['input'];
  input: CreateAuthTokenInput;
};


export type MutationCreateBeelineArgs = {
  input: CreateBeelineInput;
  threadId: Scalars['ID']['input'];
};


export type MutationCreateDeveloperArgs = {
  email: Scalars['String']['input'];
};


export type MutationCreateGroupArgs = {
  input: CreateGroupInput;
};


export type MutationCreateThreadArgs = {
  config?: InputMaybe<ThreadConfig>;
  source: ChatSource;
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


export type MutationGenerateAgentsArgs = {
  developerId: Scalars['ID']['input'];
  input: GenerateAgentsInput;
};


export type MutationGenerateAudienceArgs = {
  input: GenerateAudienceInput;
};


export type MutationGetOrCreateDeveloperArgs = {
  email: Scalars['String']['input'];
};


export type MutationImportElizaAgentArgs = {
  developerId: Scalars['ID']['input'];
  input: Scalars['JSON']['input'];
};


export type MutationOpenChatArgs = {
  source: ChatSource;
};


export type MutationUpdateAgentArgs = {
  developerId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  input: UpdateAgentInput;
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
  agentId: Scalars['ID']['output'];
  content: Scalars['String']['output'];
  context?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  platform: Scalars['String']['output'];
  tags?: Maybe<Array<Scalars['String']['output']>>;
  updatedAt: Scalars['String']['output'];
};

export enum PrivacyLevel {
  Private = 'private',
  Protected = 'protected',
  Public = 'public'
}

export type Query = {
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
  availableAudiences: Array<Audience>;
  developer?: Maybe<Developer>;
  dimension?: Maybe<Dimension>;
  dimensions: Array<Dimension>;
  getCompletedBeeline?: Maybe<CompletedBeeline>;
  getLevelTwoTraits?: Maybe<Scalars['JSON']['output']>;
  getRecentThreads: Array<LatestThread>;
  getThreadById: LatestThread;
  getThreadsBySource: Array<LatestThread>;
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


export type QueryGetCompletedBeelineArgs = {
  beelineId: Scalars['ID']['input'];
};


export type QueryGetLevelTwoTraitsArgs = {
  agentId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetThreadByIdArgs = {
  threadId: Scalars['ID']['input'];
};


export type QueryGetThreadsBySourceArgs = {
  source: ChatSource;
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
  amount: Scalars['Float']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  rewardSpecificationId: Scalars['ID']['output'];
  txHash?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export enum Role {
  Assistant = 'assistant',
  System = 'system',
  User = 'user'
}

export type SemanticKnowledge = {
  agentId: Scalars['ID']['output'];
  content: Scalars['String']['output'];
  context?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export enum SenderType {
  Agent = 'agent',
  System = 'system',
  User = 'user'
}

export enum SourceType {
  Audience = 'audience',
  Developer = 'developer',
  Panel = 'panel'
}

export type Thread = {
  beelines?: Maybe<Array<Maybe<Beeline>>>;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  metadata?: Maybe<ThreadMetadata>;
  name: Scalars['String']['output'];
  organizationId: Scalars['ID']['output'];
  settings?: Maybe<ThreadSetting>;
  sourceId: Scalars['String']['output'];
  sourceType: ChatSourceType;
  stats?: Maybe<ThreadStats>;
  status: ThreadStatus;
  updatedAt: Scalars['String']['output'];
};

export type ThreadConfig = {
  metadata?: InputMaybe<ThreadMetadataInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ThreadLite = {
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  status: ThreadStatus;
  updatedAt: Scalars['String']['output'];
};

export type ThreadMessage = {
  beelineId?: Maybe<Scalars['ID']['output']>;
  contentEmbedding?: Maybe<Scalars['JSON']['output']>;
  contentText: Scalars['String']['output'];
  contentTool?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  inResponseToId?: Maybe<Scalars['ID']['output']>;
  interactionId?: Maybe<Scalars['ID']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  responseType?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  senderId?: Maybe<Scalars['ID']['output']>;
  senderType?: Maybe<Scalars['String']['output']>;
  threadId?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type ThreadMetadata = {
  customData?: Maybe<Scalars['JSON']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ThreadMetadataInput = {
  customData?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ThreadSetting = {
  contextWindow?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  maxMessages?: Maybe<Scalars['Int']['output']>;
  privacyLevel?: Maybe<PrivacyLevel>;
  retentionPeriod?: Maybe<Scalars['Int']['output']>;
  threadId: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type ThreadSource = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type: ChatSourceType;
};

export type ThreadStats = {
  lastActivity?: Maybe<Scalars['String']['output']>;
  messageCount?: Maybe<Scalars['Int']['output']>;
};

export enum ThreadStatus {
  Active = 'active',
  Archived = 'archived',
  Completed = 'completed',
  Paused = 'paused'
}

export type Trait = {
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
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  prompt?: InputMaybe<Scalars['String']['input']>;
  sourceId?: InputMaybe<Scalars['ID']['input']>;
  sourceType?: InputMaybe<SourceType>;
  status?: InputMaybe<GroupStatus>;
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

export type GroupFieldsFragment = { id: string, sourceId: string, sourceType: SourceType, name?: string | null, prompt?: string | null, targetSize?: number | null, status: string, metadata?: any | null, createdAt: string, updatedAt: string, source?: any | null };

export type DeveloperFieldsFragment = { id: string, email: string, createdAt: string, updatedAt: string, organizationId?: string | null };

export type AuthTokenFieldsFragment = { id: string, developerId: string, token: string, name?: string | null, metadata?: any | null, expiresAt?: string | null, createdAt: string, updatedAt: string };

export type AgentFieldsFragment = { id: string, developerId: string, name: string, createdAt: string, updatedAt: string, audienceMembershipCount?: number | null, panelMembershipCount?: number | null, groupMembershipCount?: number | null, characterData?: { id: string, agentId: string, bio: string, lore?: string | null, adjectives: Array<string>, createdAt: string, updatedAt: string } | null, config?: { id: string, agentId: string, apis: any, preferences: any, createdAt: string, updatedAt: string } | null, rewardsGiven?: Array<{ id: string, amount: number, txHash?: string | null, createdAt: string, updatedAt: string } | null> | null };

export type SemanticKnowledgeFieldsFragment = { id: string, agentId: string, type: string, content: string, context?: string | null, metadata?: any | null, createdAt: string, updatedAt: string };

export type DimensionFieldsFragment = { id: string, name: string, description: string, handle: string, metadata?: any | null, createdAt: string, updatedAt: string };

export type AspectFieldsFragment = { id: string, dimensionId: string, name: string, description: string, handle: string, metadata?: any | null, createdAt: string, updatedAt: string };

export type TraitFieldsFragment = { id: string, aspectId: string, name: string, description: string, metadata?: any | null, createdAt: string, updatedAt: string };

export type PostExampleFieldsFragment = { id: string, agentId: string, content: string, platform: string, context?: string | null, tags?: Array<string> | null, createdAt: string, updatedAt: string };

export type MessageExampleFieldsFragment = { id: string, agentId: string, content: string, context?: string | null, tags?: Array<string> | null, createdAt: string, updatedAt: string };

export type AgentPersonalityTraitFieldsFragment = { id: string, agentId: string, dimensionId?: string | null, aspectId?: string | null, traitId?: string | null, systemWeight: number, relativeWeight: number, confidence: number, isCoreTrait: boolean, observationCount: number, lastObservedAt: string, metadata?: any | null, createdAt: string, updatedAt: string };

export type AudienceFieldsFragment = { id: string, name: string, description?: string | null, apiKeyId?: string | null, pricingModel?: any | null, metadata?: any | null, createdAt: string, updatedAt: string };

export type ThreadLiteFieldsFragment = { id: string, name: string, status: ThreadStatus, createdAt: string, updatedAt: string };

export type ThreadMetadataFieldsFragment = { title?: string | null, description?: string | null, tags?: Array<string> | null, customData?: any | null };

export type ThreadSettingFieldsFragment = { threadId: string, retentionPeriod?: number | null, maxMessages?: number | null, privacyLevel?: PrivacyLevel | null, contextWindow?: number | null, createdAt?: string | null, updatedAt?: string | null };

export type ThreadStatsFieldsFragment = { messageCount?: number | null, lastActivity?: string | null };

export type ThreadMessageFieldsFragment = { id: string, threadId?: string | null, senderType?: string | null, senderId?: string | null, role?: string | null, contentText: string, contentTool?: any | null, inResponseToId?: string | null, responseType?: string | null, interactionId?: string | null, beelineId?: string | null, metadata?: any | null, createdAt?: string | null, updatedAt?: string | null, contentEmbedding?: any | null };

export type BeelineFieldsFragment = { id: string, threadId?: string | null, threadMessageId?: string | null, targetType?: string | null, targetId?: string | null, status?: BeelineStatus | null, summarizationPrompt?: string | null, cohorts?: any | null, cohortSummary?: string | null, errorDetails?: string | null, createdAt?: string | null, updatedAt?: string | null, organizationId?: string | null, responses?: Array<{ agentId: string, agentName: string, response?: any | null } | null> | null };

export type BeelineResponseFieldsFragment = { agentId: string, agentName: string, response?: any | null };

export type CompletedBeelineFieldsFragment = { status: BeelineStatus, summary?: string | null, responses?: Array<{ agentId: string, agentName: string, response?: any | null } | null> | null };

export type ThreadFieldsFragment = { id: string, name: string, status: ThreadStatus, sourceType: ChatSourceType, sourceId: string, createdAt: string, updatedAt: string, organizationId: string, metadata?: { title?: string | null, description?: string | null, tags?: Array<string> | null, customData?: any | null } | null, beelines?: Array<{ id: string, threadId?: string | null, threadMessageId?: string | null, targetType?: string | null, targetId?: string | null, status?: BeelineStatus | null, summarizationPrompt?: string | null, cohorts?: any | null, cohortSummary?: string | null, errorDetails?: string | null, createdAt?: string | null, updatedAt?: string | null, organizationId?: string | null, responses?: Array<{ agentId: string, agentName: string, response?: any | null } | null> | null } | null> | null, settings?: { threadId: string, retentionPeriod?: number | null, maxMessages?: number | null, privacyLevel?: PrivacyLevel | null, contextWindow?: number | null, createdAt?: string | null, updatedAt?: string | null } | null, stats?: { messageCount?: number | null, lastActivity?: string | null } | null };

export type LatestThreadFieldsFragment = { id: string, name: string, status: ThreadStatus, sourceType: ChatSourceType, sourceId: string, createdAt: string, updatedAt: string, organizationId: string, pendingBeeline?: boolean | null, pendingBeelineId?: string | null, metadata?: { title?: string | null, description?: string | null, tags?: Array<string> | null, customData?: any | null } | null, source?: { id: string, name: string, type: ChatSourceType } | null, beelines?: Array<{ id: string, threadId?: string | null, threadMessageId?: string | null, targetType?: string | null, targetId?: string | null, status?: BeelineStatus | null, summarizationPrompt?: string | null, cohorts?: any | null, cohortSummary?: string | null, errorDetails?: string | null, createdAt?: string | null, updatedAt?: string | null, organizationId?: string | null, responses?: Array<{ agentId: string, agentName: string, response?: any | null } | null> | null } | null> | null, settings?: { threadId: string, retentionPeriod?: number | null, maxMessages?: number | null, privacyLevel?: PrivacyLevel | null, contextWindow?: number | null, createdAt?: string | null, updatedAt?: string | null } | null, stats?: { messageCount?: number | null, lastActivity?: string | null } | null, messages: Array<{ id: string, threadId?: string | null, senderType?: string | null, senderId?: string | null, role?: string | null, contentText: string, contentTool?: any | null, inResponseToId?: string | null, responseType?: string | null, interactionId?: string | null, beelineId?: string | null, metadata?: any | null, createdAt?: string | null, updatedAt?: string | null, contentEmbedding?: any | null } | null> };

export type ChatFieldsFragment = { threads: Array<{ id: string, name: string, status: ThreadStatus, createdAt: string, updatedAt: string }>, latestThread: { id: string, name: string, status: ThreadStatus, sourceType: ChatSourceType, sourceId: string, createdAt: string, updatedAt: string, organizationId: string, pendingBeeline?: boolean | null, pendingBeelineId?: string | null, metadata?: { title?: string | null, description?: string | null, tags?: Array<string> | null, customData?: any | null } | null, source?: { id: string, name: string, type: ChatSourceType } | null, beelines?: Array<{ id: string, threadId?: string | null, threadMessageId?: string | null, targetType?: string | null, targetId?: string | null, status?: BeelineStatus | null, summarizationPrompt?: string | null, cohorts?: any | null, cohortSummary?: string | null, errorDetails?: string | null, createdAt?: string | null, updatedAt?: string | null, organizationId?: string | null, responses?: Array<{ agentId: string, agentName: string, response?: any | null } | null> | null } | null> | null, settings?: { threadId: string, retentionPeriod?: number | null, maxMessages?: number | null, privacyLevel?: PrivacyLevel | null, contextWindow?: number | null, createdAt?: string | null, updatedAt?: string | null } | null, stats?: { messageCount?: number | null, lastActivity?: string | null } | null, messages: Array<{ id: string, threadId?: string | null, senderType?: string | null, senderId?: string | null, role?: string | null, contentText: string, contentTool?: any | null, inResponseToId?: string | null, responseType?: string | null, interactionId?: string | null, beelineId?: string | null, metadata?: any | null, createdAt?: string | null, updatedAt?: string | null, contentEmbedding?: any | null } | null> } };

export type GroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GroupsQuery = { groups: Array<{ id: string, sourceId: string, sourceType: SourceType, name?: string | null, prompt?: string | null, targetSize?: number | null, status: string, metadata?: any | null, createdAt: string, updatedAt: string, source?: any | null }> };

export type GroupQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GroupQuery = { group?: { id: string, sourceId: string, sourceType: SourceType, name?: string | null, prompt?: string | null, targetSize?: number | null, status: string, metadata?: any | null, createdAt: string, updatedAt: string, source?: any | null } | null };

export type DeveloperQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type DeveloperQuery = { developer?: { id: string, email: string, createdAt: string, updatedAt: string, organizationId?: string | null, authTokens?: Array<{ id: string, developerId: string, token: string, name?: string | null, metadata?: any | null, expiresAt?: string | null, createdAt: string, updatedAt: string } | null> | null } | null };

export type AuthTokensQueryVariables = Exact<{
  developerId: Scalars['ID']['input'];
}>;


export type AuthTokensQuery = { authTokens: Array<{ id: string, developerId: string, token: string, name?: string | null, metadata?: any | null, expiresAt?: string | null, createdAt: string, updatedAt: string }> };

export type AuthTokenQueryVariables = Exact<{
  token: Scalars['String']['input'];
  developerId: Scalars['ID']['input'];
}>;


export type AuthTokenQuery = { authToken?: { id: string, developerId: string, token: string, name?: string | null, metadata?: any | null, expiresAt?: string | null, createdAt: string, updatedAt: string } | null };

export type AgentQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  developerId: Scalars['ID']['input'];
}>;


export type AgentQuery = { agent?: { id: string, developerId: string, name: string, createdAt: string, updatedAt: string, audienceMembershipCount?: number | null, panelMembershipCount?: number | null, groupMembershipCount?: number | null, characterData?: { id: string, agentId: string, bio: string, lore?: string | null, adjectives: Array<string>, createdAt: string, updatedAt: string } | null, config?: { id: string, agentId: string, apis: any, preferences: any, createdAt: string, updatedAt: string } | null, rewardsGiven?: Array<{ id: string, amount: number, txHash?: string | null, createdAt: string, updatedAt: string } | null> | null } | null };

export type AgentsQueryVariables = Exact<{
  developerId: Scalars['ID']['input'];
}>;


export type AgentsQuery = { agents: Array<{ id: string, developerId: string, name: string, createdAt: string, updatedAt: string, audienceMembershipCount?: number | null, panelMembershipCount?: number | null, groupMembershipCount?: number | null, characterData?: { id: string, agentId: string, bio: string, lore?: string | null, adjectives: Array<string>, createdAt: string, updatedAt: string } | null, config?: { id: string, agentId: string, apis: any, preferences: any, createdAt: string, updatedAt: string } | null, rewardsGiven?: Array<{ id: string, amount: number, txHash?: string | null, createdAt: string, updatedAt: string } | null> | null }> };

export type SemanticKnowledgeQueryVariables = Exact<{
  agentId: Scalars['ID']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
  context?: InputMaybe<Scalars['String']['input']>;
}>;


export type SemanticKnowledgeQuery = { semanticKnowledge: Array<{ id: string, agentId: string, type: string, content: string, context?: string | null, metadata?: any | null, createdAt: string, updatedAt: string }> };

export type DimensionQueryVariables = Exact<{
  idOrHandle: Scalars['String']['input'];
}>;


export type DimensionQuery = { dimension?: { id: string, name: string, description: string, handle: string, metadata?: any | null, createdAt: string, updatedAt: string } | null };

export type DimensionsQueryVariables = Exact<{ [key: string]: never; }>;


export type DimensionsQuery = { dimensions: Array<{ id: string, name: string, description: string, handle: string, metadata?: any | null, createdAt: string, updatedAt: string }> };

export type AspectQueryVariables = Exact<{
  idOrHandle: Scalars['String']['input'];
}>;


export type AspectQuery = { aspect?: { id: string, dimensionId: string, name: string, description: string, handle: string, metadata?: any | null, createdAt: string, updatedAt: string } | null };

export type AspectsQueryVariables = Exact<{ [key: string]: never; }>;


export type AspectsQuery = { aspects: Array<{ id: string, dimensionId: string, name: string, description: string, handle: string, metadata?: any | null, createdAt: string, updatedAt: string }> };

export type TraitQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type TraitQuery = { trait?: { id: string, aspectId: string, name: string, description: string, metadata?: any | null, createdAt: string, updatedAt: string } | null };

export type TraitsQueryVariables = Exact<{ [key: string]: never; }>;


export type TraitsQuery = { traits: Array<{ id: string, aspectId: string, name: string, description: string, metadata?: any | null, createdAt: string, updatedAt: string }> };

export type PostExamplesQueryVariables = Exact<{
  agentId: Scalars['ID']['input'];
  platform?: InputMaybe<Scalars['String']['input']>;
  context?: InputMaybe<Scalars['String']['input']>;
}>;


export type PostExamplesQuery = { postExamples: Array<{ id: string, agentId: string, content: string, platform: string, context?: string | null, tags?: Array<string> | null, createdAt: string, updatedAt: string }> };

export type PostExampleQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  agentId: Scalars['ID']['input'];
}>;


export type PostExampleQuery = { postExample?: { id: string, agentId: string, content: string, platform: string, context?: string | null, tags?: Array<string> | null, createdAt: string, updatedAt: string } | null };

export type MessageExamplesQueryVariables = Exact<{
  agentId: Scalars['ID']['input'];
  context?: InputMaybe<Scalars['String']['input']>;
}>;


export type MessageExamplesQuery = { messageExamples: Array<{ id: string, agentId: string, content: string, context?: string | null, tags?: Array<string> | null, createdAt: string, updatedAt: string }> };

export type MessageExampleQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  agentId: Scalars['ID']['input'];
}>;


export type MessageExampleQuery = { messageExample?: { id: string, agentId: string, content: string, context?: string | null, tags?: Array<string> | null, createdAt: string, updatedAt: string } | null };

export type AgentPersonalityTraitQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type AgentPersonalityTraitQuery = { agentPersonalityTrait?: { id: string, agentId: string, dimensionId?: string | null, aspectId?: string | null, traitId?: string | null, systemWeight: number, relativeWeight: number, confidence: number, isCoreTrait: boolean, observationCount: number, lastObservedAt: string, metadata?: any | null, createdAt: string, updatedAt: string } | null };

export type AgentPersonalityTraitsQueryVariables = Exact<{
  filters?: InputMaybe<AgentPersonalityTraitFiltersInput>;
}>;


export type AgentPersonalityTraitsQuery = { agentPersonalityTraits: Array<{ id: string, agentId: string, dimensionId?: string | null, aspectId?: string | null, traitId?: string | null, systemWeight: number, relativeWeight: number, confidence: number, isCoreTrait: boolean, observationCount: number, lastObservedAt: string, metadata?: any | null, createdAt: string, updatedAt: string }> };

export type AvailableAudiencesQueryVariables = Exact<{ [key: string]: never; }>;


export type AvailableAudiencesQuery = { availableAudiences: Array<{ id: string, name: string, description?: string | null, apiKeyId?: string | null, pricingModel?: any | null, metadata?: any | null, createdAt: string, updatedAt: string }> };

export type AudiencesQueryVariables = Exact<{ [key: string]: never; }>;


export type AudiencesQuery = { audiences: Array<{ id: string, name: string, description?: string | null, apiKeyId?: string | null, pricingModel?: any | null, metadata?: any | null, createdAt: string, updatedAt: string }> };

export type AudienceQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type AudienceQuery = { audience?: { id: string, name: string, description?: string | null, apiKeyId?: string | null, pricingModel?: any | null, metadata?: any | null, createdAt: string, updatedAt: string } | null };

export type GetCompletedBeelineQueryVariables = Exact<{
  beelineId: Scalars['ID']['input'];
}>;


export type GetCompletedBeelineQuery = { getCompletedBeeline?: { status: BeelineStatus, summary?: string | null, responses?: Array<{ agentId: string, agentName: string, response?: any | null } | null> | null } | null };

export type GetThreadsBySourceQueryVariables = Exact<{
  source: ChatSource;
}>;


export type GetThreadsBySourceQuery = { getThreadsBySource: Array<{ id: string, name: string, status: ThreadStatus, sourceType: ChatSourceType, sourceId: string, createdAt: string, updatedAt: string, organizationId: string, pendingBeeline?: boolean | null, pendingBeelineId?: string | null, metadata?: { title?: string | null, description?: string | null, tags?: Array<string> | null, customData?: any | null } | null, source?: { id: string, name: string, type: ChatSourceType } | null, beelines?: Array<{ id: string, threadId?: string | null, threadMessageId?: string | null, targetType?: string | null, targetId?: string | null, status?: BeelineStatus | null, summarizationPrompt?: string | null, cohorts?: any | null, cohortSummary?: string | null, errorDetails?: string | null, createdAt?: string | null, updatedAt?: string | null, organizationId?: string | null, responses?: Array<{ agentId: string, agentName: string, response?: any | null } | null> | null } | null> | null, settings?: { threadId: string, retentionPeriod?: number | null, maxMessages?: number | null, privacyLevel?: PrivacyLevel | null, contextWindow?: number | null, createdAt?: string | null, updatedAt?: string | null } | null, stats?: { messageCount?: number | null, lastActivity?: string | null } | null, messages: Array<{ id: string, threadId?: string | null, senderType?: string | null, senderId?: string | null, role?: string | null, contentText: string, contentTool?: any | null, inResponseToId?: string | null, responseType?: string | null, interactionId?: string | null, beelineId?: string | null, metadata?: any | null, createdAt?: string | null, updatedAt?: string | null, contentEmbedding?: any | null } | null> }> };

export type GetThreadByIdQueryVariables = Exact<{
  threadId: Scalars['ID']['input'];
}>;


export type GetThreadByIdQuery = { getThreadById: { id: string, name: string, status: ThreadStatus, sourceType: ChatSourceType, sourceId: string, createdAt: string, updatedAt: string, organizationId: string, pendingBeeline?: boolean | null, pendingBeelineId?: string | null, metadata?: { title?: string | null, description?: string | null, tags?: Array<string> | null, customData?: any | null } | null, source?: { id: string, name: string, type: ChatSourceType } | null, beelines?: Array<{ id: string, threadId?: string | null, threadMessageId?: string | null, targetType?: string | null, targetId?: string | null, status?: BeelineStatus | null, summarizationPrompt?: string | null, cohorts?: any | null, cohortSummary?: string | null, errorDetails?: string | null, createdAt?: string | null, updatedAt?: string | null, organizationId?: string | null, responses?: Array<{ agentId: string, agentName: string, response?: any | null } | null> | null } | null> | null, settings?: { threadId: string, retentionPeriod?: number | null, maxMessages?: number | null, privacyLevel?: PrivacyLevel | null, contextWindow?: number | null, createdAt?: string | null, updatedAt?: string | null } | null, stats?: { messageCount?: number | null, lastActivity?: string | null } | null, messages: Array<{ id: string, threadId?: string | null, senderType?: string | null, senderId?: string | null, role?: string | null, contentText: string, contentTool?: any | null, inResponseToId?: string | null, responseType?: string | null, interactionId?: string | null, beelineId?: string | null, metadata?: any | null, createdAt?: string | null, updatedAt?: string | null, contentEmbedding?: any | null } | null> } };

export type GetRecentThreadsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRecentThreadsQuery = { getRecentThreads: Array<{ id: string, name: string, status: ThreadStatus, sourceType: ChatSourceType, sourceId: string, createdAt: string, updatedAt: string, organizationId: string, pendingBeeline?: boolean | null, pendingBeelineId?: string | null, metadata?: { title?: string | null, description?: string | null, tags?: Array<string> | null, customData?: any | null } | null, source?: { id: string, name: string, type: ChatSourceType } | null, beelines?: Array<{ id: string, threadId?: string | null, threadMessageId?: string | null, targetType?: string | null, targetId?: string | null, status?: BeelineStatus | null, summarizationPrompt?: string | null, cohorts?: any | null, cohortSummary?: string | null, errorDetails?: string | null, createdAt?: string | null, updatedAt?: string | null, organizationId?: string | null, responses?: Array<{ agentId: string, agentName: string, response?: any | null } | null> | null } | null> | null, settings?: { threadId: string, retentionPeriod?: number | null, maxMessages?: number | null, privacyLevel?: PrivacyLevel | null, contextWindow?: number | null, createdAt?: string | null, updatedAt?: string | null } | null, stats?: { messageCount?: number | null, lastActivity?: string | null } | null, messages: Array<{ id: string, threadId?: string | null, senderType?: string | null, senderId?: string | null, role?: string | null, contentText: string, contentTool?: any | null, inResponseToId?: string | null, responseType?: string | null, interactionId?: string | null, beelineId?: string | null, metadata?: any | null, createdAt?: string | null, updatedAt?: string | null, contentEmbedding?: any | null } | null> }> };

export type CreateGroupMutationVariables = Exact<{
  input: CreateGroupInput;
}>;


export type CreateGroupMutation = { createGroup: { id: string, sourceId: string, sourceType: SourceType, name?: string | null, prompt?: string | null, targetSize?: number | null, status: string, metadata?: any | null, createdAt: string, updatedAt: string, source?: any | null } };

export type UpdateGroupMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateGroupInput;
}>;


export type UpdateGroupMutation = { updateGroup: boolean };

export type DeleteGroupMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteGroupMutation = { deleteGroup: boolean };

export type CreateDeveloperMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type CreateDeveloperMutation = { createDeveloper: { id: string, email: string, createdAt: string, updatedAt: string, organizationId?: string | null } };

export type GetOrCreateDeveloperMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type GetOrCreateDeveloperMutation = { getOrCreateDeveloper: { id: string, email: string, createdAt: string, updatedAt: string, organizationId?: string | null } };

export type DeleteDeveloperMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteDeveloperMutation = { deleteDeveloper: boolean };

export type CreateAuthTokenMutationVariables = Exact<{
  developerId: Scalars['ID']['input'];
  input: CreateAuthTokenInput;
}>;


export type CreateAuthTokenMutation = { createAuthToken: { id: string, developerId: string, token: string, name?: string | null, metadata?: any | null, expiresAt?: string | null, createdAt: string, updatedAt: string } };

export type UpdateAuthTokenMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  developerId: Scalars['ID']['input'];
  input: UpdateAuthTokenInput;
}>;


export type UpdateAuthTokenMutation = { updateAuthToken: { id: string, developerId: string, token: string, name?: string | null, metadata?: any | null, expiresAt?: string | null, createdAt: string, updatedAt: string } };

export type DeleteAuthTokenMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  developerId: Scalars['ID']['input'];
}>;


export type DeleteAuthTokenMutation = { deleteAuthToken: boolean };

export type CreateAgentMutationVariables = Exact<{
  developerId: Scalars['ID']['input'];
  input: CreateAgentInput;
}>;


export type CreateAgentMutation = { createAgent: { id: string, developerId: string, name: string, createdAt: string, updatedAt: string, audienceMembershipCount?: number | null, panelMembershipCount?: number | null, groupMembershipCount?: number | null, characterData?: { id: string, agentId: string, bio: string, lore?: string | null, adjectives: Array<string>, createdAt: string, updatedAt: string } | null, config?: { id: string, agentId: string, apis: any, preferences: any, createdAt: string, updatedAt: string } | null, rewardsGiven?: Array<{ id: string, amount: number, txHash?: string | null, createdAt: string, updatedAt: string } | null> | null } };

export type UpdateAgentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  developerId: Scalars['ID']['input'];
  input: UpdateAgentInput;
}>;


export type UpdateAgentMutation = { updateAgent: boolean };

export type DeleteAgentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  developerId: Scalars['ID']['input'];
}>;


export type DeleteAgentMutation = { deleteAgent: boolean };

export type AddSemanticKnowledgeMutationVariables = Exact<{
  agentId: Scalars['ID']['input'];
  items: Array<AddSemanticKnowledgeInput> | AddSemanticKnowledgeInput;
}>;


export type AddSemanticKnowledgeMutation = { addSemanticKnowledge: Array<{ id: string, agentId: string, type: string, content: string, context?: string | null, metadata?: any | null, createdAt: string, updatedAt: string }> };

export type UpdateSemanticKnowledgeMutationVariables = Exact<{
  agentId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  input: UpdateSemanticKnowledgeInput;
}>;


export type UpdateSemanticKnowledgeMutation = { updateSemanticKnowledge: { id: string, agentId: string, type: string, content: string, context?: string | null, metadata?: any | null, createdAt: string, updatedAt: string } };

export type DeleteSemanticKnowledgeMutationVariables = Exact<{
  agentId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
}>;


export type DeleteSemanticKnowledgeMutation = { deleteSemanticKnowledge: boolean };

export type CreateTraitMutationVariables = Exact<{
  input: CreateTraitInput;
}>;


export type CreateTraitMutation = { createTrait: { id: string, aspectId: string, name: string, description: string, metadata?: any | null, createdAt: string, updatedAt: string } };

export type UpdateTraitMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateTraitInput;
}>;


export type UpdateTraitMutation = { updateTrait: boolean };

export type DeleteTraitMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteTraitMutation = { deleteTrait: boolean };

export type AddPostExamplesMutationVariables = Exact<{
  agentId: Scalars['ID']['input'];
  items: Array<AddPostExampleInput> | AddPostExampleInput;
}>;


export type AddPostExamplesMutation = { addPostExamples: Array<{ id: string, agentId: string, content: string, platform: string, context?: string | null, tags?: Array<string> | null, createdAt: string, updatedAt: string }> };

export type UpdatePostExampleMutationVariables = Exact<{
  agentId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  input: UpdatePostExampleInput;
}>;


export type UpdatePostExampleMutation = { updatePostExample: { id: string, agentId: string, content: string, platform: string, context?: string | null, tags?: Array<string> | null, createdAt: string, updatedAt: string } };

export type DeletePostExampleMutationVariables = Exact<{
  agentId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
}>;


export type DeletePostExampleMutation = { deletePostExample: boolean };

export type AddMessageExamplesMutationVariables = Exact<{
  agentId: Scalars['ID']['input'];
  items: Array<AddMessageExampleInput> | AddMessageExampleInput;
}>;


export type AddMessageExamplesMutation = { addMessageExamples: Array<{ id: string, agentId: string, content: string, context?: string | null, tags?: Array<string> | null, createdAt: string, updatedAt: string }> };

export type UpdateMessageExampleMutationVariables = Exact<{
  agentId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  input: UpdateMessageExampleInput;
}>;


export type UpdateMessageExampleMutation = { updateMessageExample: { id: string, agentId: string, content: string, context?: string | null, tags?: Array<string> | null, createdAt: string, updatedAt: string } };

export type DeleteMessageExampleMutationVariables = Exact<{
  agentId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
}>;


export type DeleteMessageExampleMutation = { deleteMessageExample: boolean };

export type CreateAgentPersonalityTraitMutationVariables = Exact<{
  agentId: Scalars['ID']['input'];
  input: CreateAgentPersonalityTraitInput;
}>;


export type CreateAgentPersonalityTraitMutation = { createAgentPersonalityTrait: { id: string, agentId: string, dimensionId?: string | null, aspectId?: string | null, traitId?: string | null, systemWeight: number, relativeWeight: number, confidence: number, isCoreTrait: boolean, observationCount: number, lastObservedAt: string, metadata?: any | null, createdAt: string, updatedAt: string } };

export type DeleteAgentPersonalityTraitMutationVariables = Exact<{
  agentId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
}>;


export type DeleteAgentPersonalityTraitMutation = { deleteAgentPersonalityTrait: boolean };

export type CreateTraitAndAddToAgentPersonalityMutationVariables = Exact<{
  agentId: Scalars['ID']['input'];
  input: CreateTraitInput;
}>;


export type CreateTraitAndAddToAgentPersonalityMutation = { createTraitAndAddToAgentPersonality: { id: string, agentId: string, dimensionId?: string | null, aspectId?: string | null, traitId?: string | null, systemWeight: number, relativeWeight: number, confidence: number, isCoreTrait: boolean, observationCount: number, lastObservedAt: string, metadata?: any | null, createdAt: string, updatedAt: string } };

export type CreateAudienceMutationVariables = Exact<{
  input: CreateAudienceInput;
}>;


export type CreateAudienceMutation = { createAudience: { id: string, name: string, description?: string | null, apiKeyId?: string | null, pricingModel?: any | null, metadata?: any | null, createdAt: string, updatedAt: string } };

export type UpdateAudienceMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateAudienceInput;
}>;


export type UpdateAudienceMutation = { updateAudience: boolean };

export type DeleteAudienceMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteAudienceMutation = { deleteAudience: boolean };

export type GenerateAgentsMutationVariables = Exact<{
  developerId: Scalars['ID']['input'];
  input: GenerateAgentsInput;
}>;


export type GenerateAgentsMutation = { generateAgents: Array<{ id: string, developerId: string, name: string, createdAt: string, updatedAt: string, audienceMembershipCount?: number | null, panelMembershipCount?: number | null, groupMembershipCount?: number | null, characterData?: { id: string, agentId: string, bio: string, lore?: string | null, adjectives: Array<string>, createdAt: string, updatedAt: string } | null, config?: { id: string, agentId: string, apis: any, preferences: any, createdAt: string, updatedAt: string } | null, rewardsGiven?: Array<{ id: string, amount: number, txHash?: string | null, createdAt: string, updatedAt: string } | null> | null }> };

export type ImportElizaAgentMutationVariables = Exact<{
  developerId: Scalars['ID']['input'];
  input: Scalars['JSON']['input'];
}>;


export type ImportElizaAgentMutation = { importElizaAgent: { id: string, developerId: string, name: string, createdAt: string, updatedAt: string, audienceMembershipCount?: number | null, panelMembershipCount?: number | null, groupMembershipCount?: number | null, characterData?: { id: string, agentId: string, bio: string, lore?: string | null, adjectives: Array<string>, createdAt: string, updatedAt: string } | null, config?: { id: string, agentId: string, apis: any, preferences: any, createdAt: string, updatedAt: string } | null, rewardsGiven?: Array<{ id: string, amount: number, txHash?: string | null, createdAt: string, updatedAt: string } | null> | null } };

export type AddToAudienceMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: AddToAudienceInput;
}>;


export type AddToAudienceMutation = { addToAudience: { id: string, name: string, description?: string | null, apiKeyId?: string | null, pricingModel?: any | null, metadata?: any | null, createdAt: string, updatedAt: string } };

export type GenerateAudienceMutationVariables = Exact<{
  input: GenerateAudienceInput;
}>;


export type GenerateAudienceMutation = { generateAudience: { id: string, name: string, description?: string | null, apiKeyId?: string | null, pricingModel?: any | null, metadata?: any | null, createdAt: string, updatedAt: string } };

export type OpenChatMutationVariables = Exact<{
  source: ChatSource;
}>;


export type OpenChatMutation = { openChat: { threads: Array<{ id: string, name: string, status: ThreadStatus, createdAt: string, updatedAt: string }>, latestThread: { id: string, name: string, status: ThreadStatus, sourceType: ChatSourceType, sourceId: string, createdAt: string, updatedAt: string, organizationId: string, pendingBeeline?: boolean | null, pendingBeelineId?: string | null, metadata?: { title?: string | null, description?: string | null, tags?: Array<string> | null, customData?: any | null } | null, source?: { id: string, name: string, type: ChatSourceType } | null, beelines?: Array<{ id: string, threadId?: string | null, threadMessageId?: string | null, targetType?: string | null, targetId?: string | null, status?: BeelineStatus | null, summarizationPrompt?: string | null, cohorts?: any | null, cohortSummary?: string | null, errorDetails?: string | null, createdAt?: string | null, updatedAt?: string | null, organizationId?: string | null, responses?: Array<{ agentId: string, agentName: string, response?: any | null } | null> | null } | null> | null, settings?: { threadId: string, retentionPeriod?: number | null, maxMessages?: number | null, privacyLevel?: PrivacyLevel | null, contextWindow?: number | null, createdAt?: string | null, updatedAt?: string | null } | null, stats?: { messageCount?: number | null, lastActivity?: string | null } | null, messages: Array<{ id: string, threadId?: string | null, senderType?: string | null, senderId?: string | null, role?: string | null, contentText: string, contentTool?: any | null, inResponseToId?: string | null, responseType?: string | null, interactionId?: string | null, beelineId?: string | null, metadata?: any | null, createdAt?: string | null, updatedAt?: string | null, contentEmbedding?: any | null } | null> } } };

export type CreateBeelineMutationVariables = Exact<{
  threadId: Scalars['ID']['input'];
  input: CreateBeelineInput;
}>;


export type CreateBeelineMutation = { createBeeline: string };

export type CreateThreadMutationVariables = Exact<{
  source: ChatSource;
  config?: InputMaybe<ThreadConfig>;
}>;


export type CreateThreadMutation = { createThread: string };

export const GroupFieldsFragmentDoc = gql`
    fragment GroupFields on Group {
  id
  sourceId
  sourceType
  name
  prompt
  targetSize
  status
  metadata
  createdAt
  updatedAt
  source
}
    `;
export const DeveloperFieldsFragmentDoc = gql`
    fragment DeveloperFields on Developer {
  id
  email
  createdAt
  updatedAt
  organizationId
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
export const AgentFieldsFragmentDoc = gql`
    fragment AgentFields on Agent {
  id
  developerId
  name
  characterData {
    id
    agentId
    bio
    lore
    adjectives
    createdAt
    updatedAt
  }
  config {
    id
    agentId
    apis
    preferences
    createdAt
    updatedAt
  }
  createdAt
  updatedAt
  audienceMembershipCount
  panelMembershipCount
  groupMembershipCount
  rewardsGiven {
    id
    amount
    txHash
    createdAt
    updatedAt
  }
}
    `;
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
export const DimensionFieldsFragmentDoc = gql`
    fragment DimensionFields on Dimension {
  id
  name
  description
  handle
  metadata
  createdAt
  updatedAt
}
    `;
export const AspectFieldsFragmentDoc = gql`
    fragment AspectFields on Aspect {
  id
  dimensionId
  name
  description
  handle
  metadata
  createdAt
  updatedAt
}
    `;
export const TraitFieldsFragmentDoc = gql`
    fragment TraitFields on Trait {
  id
  aspectId
  name
  description
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
  dimensionId
  aspectId
  traitId
  systemWeight
  relativeWeight
  confidence
  isCoreTrait
  observationCount
  lastObservedAt
  metadata
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
export const BeelineResponseFieldsFragmentDoc = gql`
    fragment BeelineResponseFields on BeelineResponse {
  agentId
  agentName
  response
}
    `;
export const CompletedBeelineFieldsFragmentDoc = gql`
    fragment CompletedBeelineFields on CompletedBeeline {
  status
  responses {
    ...BeelineResponseFields
  }
  summary
}
    ${BeelineResponseFieldsFragmentDoc}`;
export const ThreadMetadataFieldsFragmentDoc = gql`
    fragment ThreadMetadataFields on ThreadMetadata {
  title
  description
  tags
  customData
}
    `;
export const BeelineFieldsFragmentDoc = gql`
    fragment BeelineFields on Beeline {
  id
  threadId
  threadMessageId
  targetType
  targetId
  status
  summarizationPrompt
  cohorts
  cohortSummary
  errorDetails
  createdAt
  updatedAt
  organizationId
  responses {
    ...BeelineResponseFields
  }
}
    ${BeelineResponseFieldsFragmentDoc}`;
export const ThreadSettingFieldsFragmentDoc = gql`
    fragment ThreadSettingFields on ThreadSetting {
  threadId
  retentionPeriod
  maxMessages
  privacyLevel
  contextWindow
  createdAt
  updatedAt
}
    `;
export const ThreadStatsFieldsFragmentDoc = gql`
    fragment ThreadStatsFields on ThreadStats {
  messageCount
  lastActivity
}
    `;
export const ThreadFieldsFragmentDoc = gql`
    fragment ThreadFields on Thread {
  id
  name
  status
  sourceType
  sourceId
  metadata {
    ...ThreadMetadataFields
  }
  createdAt
  updatedAt
  organizationId
  beelines {
    ...BeelineFields
  }
  settings {
    ...ThreadSettingFields
  }
  stats {
    ...ThreadStatsFields
  }
}
    ${ThreadMetadataFieldsFragmentDoc}
${BeelineFieldsFragmentDoc}
${ThreadSettingFieldsFragmentDoc}
${ThreadStatsFieldsFragmentDoc}`;
export const ThreadLiteFieldsFragmentDoc = gql`
    fragment ThreadLiteFields on ThreadLite {
  id
  name
  status
  createdAt
  updatedAt
}
    `;
export const ThreadMessageFieldsFragmentDoc = gql`
    fragment ThreadMessageFields on ThreadMessage {
  id
  threadId
  senderType
  senderId
  role
  contentText
  contentTool
  inResponseToId
  responseType
  interactionId
  beelineId
  metadata
  createdAt
  updatedAt
  contentEmbedding
}
    `;
export const LatestThreadFieldsFragmentDoc = gql`
    fragment LatestThreadFields on LatestThread {
  id
  name
  status
  sourceType
  sourceId
  metadata {
    ...ThreadMetadataFields
  }
  createdAt
  updatedAt
  organizationId
  source {
    id
    name
    type
  }
  beelines {
    ...BeelineFields
  }
  settings {
    ...ThreadSettingFields
  }
  stats {
    ...ThreadStatsFields
  }
  pendingBeeline
  pendingBeelineId
  messages {
    ...ThreadMessageFields
  }
}
    ${ThreadMetadataFieldsFragmentDoc}
${BeelineFieldsFragmentDoc}
${ThreadSettingFieldsFragmentDoc}
${ThreadStatsFieldsFragmentDoc}
${ThreadMessageFieldsFragmentDoc}`;
export const ChatFieldsFragmentDoc = gql`
    fragment ChatFields on Chat {
  threads {
    ...ThreadLiteFields
  }
  latestThread {
    ...LatestThreadFields
  }
}
    ${ThreadLiteFieldsFragmentDoc}
${LatestThreadFieldsFragmentDoc}`;
export const GroupsDocument = gql`
    query groups {
  groups {
    ...GroupFields
  }
}
    ${GroupFieldsFragmentDoc}`;
export const GroupDocument = gql`
    query group($id: ID!) {
  group(id: $id) {
    ...GroupFields
  }
}
    ${GroupFieldsFragmentDoc}`;
export const DeveloperDocument = gql`
    query developer($id: ID) {
  developer(id: $id) {
    ...DeveloperFields
    authTokens {
      ...AuthTokenFields
    }
  }
}
    ${DeveloperFieldsFragmentDoc}
${AuthTokenFieldsFragmentDoc}`;
export const AuthTokensDocument = gql`
    query authTokens($developerId: ID!) {
  authTokens(developerId: $developerId) {
    ...AuthTokenFields
  }
}
    ${AuthTokenFieldsFragmentDoc}`;
export const AuthTokenDocument = gql`
    query authToken($token: String!, $developerId: ID!) {
  authToken(token: $token, developerId: $developerId) {
    ...AuthTokenFields
  }
}
    ${AuthTokenFieldsFragmentDoc}`;
export const AgentDocument = gql`
    query agent($id: ID!, $developerId: ID!) {
  agent(id: $id, developerId: $developerId) {
    ...AgentFields
  }
}
    ${AgentFieldsFragmentDoc}`;
export const AgentsDocument = gql`
    query agents($developerId: ID!) {
  agents(developerId: $developerId) {
    ...AgentFields
  }
}
    ${AgentFieldsFragmentDoc}`;
export const SemanticKnowledgeDocument = gql`
    query semanticKnowledge($agentId: ID!, $type: String, $context: String) {
  semanticKnowledge(agentId: $agentId, type: $type, context: $context) {
    ...SemanticKnowledgeFields
  }
}
    ${SemanticKnowledgeFieldsFragmentDoc}`;
export const DimensionDocument = gql`
    query dimension($idOrHandle: String!) {
  dimension(idOrHandle: $idOrHandle) {
    ...DimensionFields
  }
}
    ${DimensionFieldsFragmentDoc}`;
export const DimensionsDocument = gql`
    query dimensions {
  dimensions {
    ...DimensionFields
  }
}
    ${DimensionFieldsFragmentDoc}`;
export const AspectDocument = gql`
    query aspect($idOrHandle: String!) {
  aspect(idOrHandle: $idOrHandle) {
    ...AspectFields
  }
}
    ${AspectFieldsFragmentDoc}`;
export const AspectsDocument = gql`
    query aspects {
  aspects {
    ...AspectFields
  }
}
    ${AspectFieldsFragmentDoc}`;
export const TraitDocument = gql`
    query trait($id: ID!) {
  trait(id: $id) {
    ...TraitFields
  }
}
    ${TraitFieldsFragmentDoc}`;
export const TraitsDocument = gql`
    query traits {
  traits {
    ...TraitFields
  }
}
    ${TraitFieldsFragmentDoc}`;
export const PostExamplesDocument = gql`
    query postExamples($agentId: ID!, $platform: String, $context: String) {
  postExamples(agentId: $agentId, platform: $platform, context: $context) {
    ...PostExampleFields
  }
}
    ${PostExampleFieldsFragmentDoc}`;
export const PostExampleDocument = gql`
    query postExample($id: ID!, $agentId: ID!) {
  postExample(id: $id, agentId: $agentId) {
    ...PostExampleFields
  }
}
    ${PostExampleFieldsFragmentDoc}`;
export const MessageExamplesDocument = gql`
    query messageExamples($agentId: ID!, $context: String) {
  messageExamples(agentId: $agentId, context: $context) {
    ...MessageExampleFields
  }
}
    ${MessageExampleFieldsFragmentDoc}`;
export const MessageExampleDocument = gql`
    query messageExample($id: ID!, $agentId: ID!) {
  messageExample(id: $id, agentId: $agentId) {
    ...MessageExampleFields
  }
}
    ${MessageExampleFieldsFragmentDoc}`;
export const AgentPersonalityTraitDocument = gql`
    query agentPersonalityTrait($id: ID!) {
  agentPersonalityTrait(id: $id) {
    ...AgentPersonalityTraitFields
  }
}
    ${AgentPersonalityTraitFieldsFragmentDoc}`;
export const AgentPersonalityTraitsDocument = gql`
    query agentPersonalityTraits($filters: AgentPersonalityTraitFiltersInput) {
  agentPersonalityTraits(filters: $filters) {
    ...AgentPersonalityTraitFields
  }
}
    ${AgentPersonalityTraitFieldsFragmentDoc}`;
export const AvailableAudiencesDocument = gql`
    query availableAudiences {
  availableAudiences {
    ...AudienceFields
  }
}
    ${AudienceFieldsFragmentDoc}`;
export const AudiencesDocument = gql`
    query audiences {
  audiences {
    ...AudienceFields
  }
}
    ${AudienceFieldsFragmentDoc}`;
export const AudienceDocument = gql`
    query audience($id: ID!) {
  audience(id: $id) {
    ...AudienceFields
  }
}
    ${AudienceFieldsFragmentDoc}`;
export const GetCompletedBeelineDocument = gql`
    query getCompletedBeeline($beelineId: ID!) {
  getCompletedBeeline(beelineId: $beelineId) {
    ...CompletedBeelineFields
  }
}
    ${CompletedBeelineFieldsFragmentDoc}`;
export const GetThreadsBySourceDocument = gql`
    query getThreadsBySource($source: ChatSource!) {
  getThreadsBySource(source: $source) {
    ...LatestThreadFields
  }
}
    ${LatestThreadFieldsFragmentDoc}`;
export const GetThreadByIdDocument = gql`
    query getThreadById($threadId: ID!) {
  getThreadById(threadId: $threadId) {
    ...LatestThreadFields
  }
}
    ${LatestThreadFieldsFragmentDoc}`;
export const GetRecentThreadsDocument = gql`
    query getRecentThreads {
  getRecentThreads {
    ...LatestThreadFields
  }
}
    ${LatestThreadFieldsFragmentDoc}`;
export const CreateGroupDocument = gql`
    mutation createGroup($input: CreateGroupInput!) {
  createGroup(input: $input) {
    ...GroupFields
  }
}
    ${GroupFieldsFragmentDoc}`;
export const UpdateGroupDocument = gql`
    mutation updateGroup($id: ID!, $input: UpdateGroupInput!) {
  updateGroup(id: $id, input: $input)
}
    `;
export const DeleteGroupDocument = gql`
    mutation deleteGroup($id: ID!) {
  deleteGroup(id: $id)
}
    `;
export const CreateDeveloperDocument = gql`
    mutation createDeveloper($email: String!) {
  createDeveloper(email: $email) {
    ...DeveloperFields
  }
}
    ${DeveloperFieldsFragmentDoc}`;
export const GetOrCreateDeveloperDocument = gql`
    mutation getOrCreateDeveloper($email: String!) {
  getOrCreateDeveloper(email: $email) {
    ...DeveloperFields
  }
}
    ${DeveloperFieldsFragmentDoc}`;
export const DeleteDeveloperDocument = gql`
    mutation deleteDeveloper($id: ID!) {
  deleteDeveloper(id: $id)
}
    `;
export const CreateAuthTokenDocument = gql`
    mutation createAuthToken($developerId: ID!, $input: CreateAuthTokenInput!) {
  createAuthToken(developerId: $developerId, input: $input) {
    ...AuthTokenFields
  }
}
    ${AuthTokenFieldsFragmentDoc}`;
export const UpdateAuthTokenDocument = gql`
    mutation updateAuthToken($id: ID!, $developerId: ID!, $input: UpdateAuthTokenInput!) {
  updateAuthToken(id: $id, developerId: $developerId, input: $input) {
    ...AuthTokenFields
  }
}
    ${AuthTokenFieldsFragmentDoc}`;
export const DeleteAuthTokenDocument = gql`
    mutation deleteAuthToken($id: ID!, $developerId: ID!) {
  deleteAuthToken(id: $id, developerId: $developerId)
}
    `;
export const CreateAgentDocument = gql`
    mutation createAgent($developerId: ID!, $input: CreateAgentInput!) {
  createAgent(developerId: $developerId, input: $input) {
    ...AgentFields
  }
}
    ${AgentFieldsFragmentDoc}`;
export const UpdateAgentDocument = gql`
    mutation updateAgent($id: ID!, $developerId: ID!, $input: UpdateAgentInput!) {
  updateAgent(id: $id, developerId: $developerId, input: $input)
}
    `;
export const DeleteAgentDocument = gql`
    mutation deleteAgent($id: ID!, $developerId: ID!) {
  deleteAgent(id: $id, developerId: $developerId)
}
    `;
export const AddSemanticKnowledgeDocument = gql`
    mutation addSemanticKnowledge($agentId: ID!, $items: [AddSemanticKnowledgeInput!]!) {
  addSemanticKnowledge(agentId: $agentId, items: $items) {
    ...SemanticKnowledgeFields
  }
}
    ${SemanticKnowledgeFieldsFragmentDoc}`;
export const UpdateSemanticKnowledgeDocument = gql`
    mutation updateSemanticKnowledge($agentId: ID!, $id: ID!, $input: UpdateSemanticKnowledgeInput!) {
  updateSemanticKnowledge(agentId: $agentId, id: $id, input: $input) {
    ...SemanticKnowledgeFields
  }
}
    ${SemanticKnowledgeFieldsFragmentDoc}`;
export const DeleteSemanticKnowledgeDocument = gql`
    mutation deleteSemanticKnowledge($agentId: ID!, $id: ID!) {
  deleteSemanticKnowledge(agentId: $agentId, id: $id)
}
    `;
export const CreateTraitDocument = gql`
    mutation createTrait($input: CreateTraitInput!) {
  createTrait(input: $input) {
    ...TraitFields
  }
}
    ${TraitFieldsFragmentDoc}`;
export const UpdateTraitDocument = gql`
    mutation updateTrait($id: ID!, $input: UpdateTraitInput!) {
  updateTrait(id: $id, input: $input)
}
    `;
export const DeleteTraitDocument = gql`
    mutation deleteTrait($id: ID!) {
  deleteTrait(id: $id)
}
    `;
export const AddPostExamplesDocument = gql`
    mutation addPostExamples($agentId: ID!, $items: [AddPostExampleInput!]!) {
  addPostExamples(agentId: $agentId, items: $items) {
    ...PostExampleFields
  }
}
    ${PostExampleFieldsFragmentDoc}`;
export const UpdatePostExampleDocument = gql`
    mutation updatePostExample($agentId: ID!, $id: ID!, $input: UpdatePostExampleInput!) {
  updatePostExample(agentId: $agentId, id: $id, input: $input) {
    ...PostExampleFields
  }
}
    ${PostExampleFieldsFragmentDoc}`;
export const DeletePostExampleDocument = gql`
    mutation deletePostExample($agentId: ID!, $id: ID!) {
  deletePostExample(agentId: $agentId, id: $id)
}
    `;
export const AddMessageExamplesDocument = gql`
    mutation addMessageExamples($agentId: ID!, $items: [AddMessageExampleInput!]!) {
  addMessageExamples(agentId: $agentId, items: $items) {
    ...MessageExampleFields
  }
}
    ${MessageExampleFieldsFragmentDoc}`;
export const UpdateMessageExampleDocument = gql`
    mutation updateMessageExample($agentId: ID!, $id: ID!, $input: UpdateMessageExampleInput!) {
  updateMessageExample(agentId: $agentId, id: $id, input: $input) {
    ...MessageExampleFields
  }
}
    ${MessageExampleFieldsFragmentDoc}`;
export const DeleteMessageExampleDocument = gql`
    mutation deleteMessageExample($agentId: ID!, $id: ID!) {
  deleteMessageExample(agentId: $agentId, id: $id)
}
    `;
export const CreateAgentPersonalityTraitDocument = gql`
    mutation createAgentPersonalityTrait($agentId: ID!, $input: CreateAgentPersonalityTraitInput!) {
  createAgentPersonalityTrait(agentId: $agentId, input: $input) {
    ...AgentPersonalityTraitFields
  }
}
    ${AgentPersonalityTraitFieldsFragmentDoc}`;
export const DeleteAgentPersonalityTraitDocument = gql`
    mutation deleteAgentPersonalityTrait($agentId: ID!, $id: ID!) {
  deleteAgentPersonalityTrait(agentId: $id, id: $id)
}
    `;
export const CreateTraitAndAddToAgentPersonalityDocument = gql`
    mutation createTraitAndAddToAgentPersonality($agentId: ID!, $input: CreateTraitInput!) {
  createTraitAndAddToAgentPersonality(agentId: $agentId, input: $input) {
    ...AgentPersonalityTraitFields
  }
}
    ${AgentPersonalityTraitFieldsFragmentDoc}`;
export const CreateAudienceDocument = gql`
    mutation createAudience($input: CreateAudienceInput!) {
  createAudience(input: $input) {
    ...AudienceFields
  }
}
    ${AudienceFieldsFragmentDoc}`;
export const UpdateAudienceDocument = gql`
    mutation updateAudience($id: ID!, $input: UpdateAudienceInput!) {
  updateAudience(id: $id, input: $input)
}
    `;
export const DeleteAudienceDocument = gql`
    mutation deleteAudience($id: ID!) {
  deleteAudience(id: $id)
}
    `;
export const GenerateAgentsDocument = gql`
    mutation generateAgents($developerId: ID!, $input: GenerateAgentsInput!) {
  generateAgents(developerId: $developerId, input: $input) {
    ...AgentFields
  }
}
    ${AgentFieldsFragmentDoc}`;
export const ImportElizaAgentDocument = gql`
    mutation importElizaAgent($developerId: ID!, $input: JSON!) {
  importElizaAgent(developerId: $developerId, input: $input) {
    ...AgentFields
  }
}
    ${AgentFieldsFragmentDoc}`;
export const AddToAudienceDocument = gql`
    mutation addToAudience($id: ID!, $input: AddToAudienceInput!) {
  addToAudience(id: $id, input: $input) {
    ...AudienceFields
  }
}
    ${AudienceFieldsFragmentDoc}`;
export const GenerateAudienceDocument = gql`
    mutation generateAudience($input: GenerateAudienceInput!) {
  generateAudience(input: $input) {
    ...AudienceFields
  }
}
    ${AudienceFieldsFragmentDoc}`;
export const OpenChatDocument = gql`
    mutation openChat($source: ChatSource!) {
  openChat(source: $source) {
    ...ChatFields
  }
}
    ${ChatFieldsFragmentDoc}`;
export const CreateBeelineDocument = gql`
    mutation createBeeline($threadId: ID!, $input: CreateBeelineInput!) {
  createBeeline(threadId: $threadId, input: $input)
}
    `;
export const CreateThreadDocument = gql`
    mutation createThread($source: ChatSource!, $config: ThreadConfig) {
  createThread(source: $source, config: $config)
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();
const GroupsDocumentString = print(GroupsDocument);
const GroupDocumentString = print(GroupDocument);
const DeveloperDocumentString = print(DeveloperDocument);
const AuthTokensDocumentString = print(AuthTokensDocument);
const AuthTokenDocumentString = print(AuthTokenDocument);
const AgentDocumentString = print(AgentDocument);
const AgentsDocumentString = print(AgentsDocument);
const SemanticKnowledgeDocumentString = print(SemanticKnowledgeDocument);
const DimensionDocumentString = print(DimensionDocument);
const DimensionsDocumentString = print(DimensionsDocument);
const AspectDocumentString = print(AspectDocument);
const AspectsDocumentString = print(AspectsDocument);
const TraitDocumentString = print(TraitDocument);
const TraitsDocumentString = print(TraitsDocument);
const PostExamplesDocumentString = print(PostExamplesDocument);
const PostExampleDocumentString = print(PostExampleDocument);
const MessageExamplesDocumentString = print(MessageExamplesDocument);
const MessageExampleDocumentString = print(MessageExampleDocument);
const AgentPersonalityTraitDocumentString = print(AgentPersonalityTraitDocument);
const AgentPersonalityTraitsDocumentString = print(AgentPersonalityTraitsDocument);
const AvailableAudiencesDocumentString = print(AvailableAudiencesDocument);
const AudiencesDocumentString = print(AudiencesDocument);
const AudienceDocumentString = print(AudienceDocument);
const GetCompletedBeelineDocumentString = print(GetCompletedBeelineDocument);
const GetThreadsBySourceDocumentString = print(GetThreadsBySourceDocument);
const GetThreadByIdDocumentString = print(GetThreadByIdDocument);
const GetRecentThreadsDocumentString = print(GetRecentThreadsDocument);
const CreateGroupDocumentString = print(CreateGroupDocument);
const UpdateGroupDocumentString = print(UpdateGroupDocument);
const DeleteGroupDocumentString = print(DeleteGroupDocument);
const CreateDeveloperDocumentString = print(CreateDeveloperDocument);
const GetOrCreateDeveloperDocumentString = print(GetOrCreateDeveloperDocument);
const DeleteDeveloperDocumentString = print(DeleteDeveloperDocument);
const CreateAuthTokenDocumentString = print(CreateAuthTokenDocument);
const UpdateAuthTokenDocumentString = print(UpdateAuthTokenDocument);
const DeleteAuthTokenDocumentString = print(DeleteAuthTokenDocument);
const CreateAgentDocumentString = print(CreateAgentDocument);
const UpdateAgentDocumentString = print(UpdateAgentDocument);
const DeleteAgentDocumentString = print(DeleteAgentDocument);
const AddSemanticKnowledgeDocumentString = print(AddSemanticKnowledgeDocument);
const UpdateSemanticKnowledgeDocumentString = print(UpdateSemanticKnowledgeDocument);
const DeleteSemanticKnowledgeDocumentString = print(DeleteSemanticKnowledgeDocument);
const CreateTraitDocumentString = print(CreateTraitDocument);
const UpdateTraitDocumentString = print(UpdateTraitDocument);
const DeleteTraitDocumentString = print(DeleteTraitDocument);
const AddPostExamplesDocumentString = print(AddPostExamplesDocument);
const UpdatePostExampleDocumentString = print(UpdatePostExampleDocument);
const DeletePostExampleDocumentString = print(DeletePostExampleDocument);
const AddMessageExamplesDocumentString = print(AddMessageExamplesDocument);
const UpdateMessageExampleDocumentString = print(UpdateMessageExampleDocument);
const DeleteMessageExampleDocumentString = print(DeleteMessageExampleDocument);
const CreateAgentPersonalityTraitDocumentString = print(CreateAgentPersonalityTraitDocument);
const DeleteAgentPersonalityTraitDocumentString = print(DeleteAgentPersonalityTraitDocument);
const CreateTraitAndAddToAgentPersonalityDocumentString = print(CreateTraitAndAddToAgentPersonalityDocument);
const CreateAudienceDocumentString = print(CreateAudienceDocument);
const UpdateAudienceDocumentString = print(UpdateAudienceDocument);
const DeleteAudienceDocumentString = print(DeleteAudienceDocument);
const GenerateAgentsDocumentString = print(GenerateAgentsDocument);
const ImportElizaAgentDocumentString = print(ImportElizaAgentDocument);
const AddToAudienceDocumentString = print(AddToAudienceDocument);
const GenerateAudienceDocumentString = print(GenerateAudienceDocument);
const OpenChatDocumentString = print(OpenChatDocument);
const CreateBeelineDocumentString = print(CreateBeelineDocument);
const CreateThreadDocumentString = print(CreateThreadDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    groups(variables?: GroupsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GroupsQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GroupsQuery>(GroupsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'groups', 'query', variables);
    },
    group(variables: GroupQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GroupQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GroupQuery>(GroupDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'group', 'query', variables);
    },
    developer(variables?: DeveloperQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: DeveloperQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<DeveloperQuery>(DeveloperDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'developer', 'query', variables);
    },
    authTokens(variables: AuthTokensQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AuthTokensQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AuthTokensQuery>(AuthTokensDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'authTokens', 'query', variables);
    },
    authToken(variables: AuthTokenQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AuthTokenQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AuthTokenQuery>(AuthTokenDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'authToken', 'query', variables);
    },
    agent(variables: AgentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AgentQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AgentQuery>(AgentDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'agent', 'query', variables);
    },
    agents(variables: AgentsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AgentsQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AgentsQuery>(AgentsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'agents', 'query', variables);
    },
    semanticKnowledge(variables: SemanticKnowledgeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: SemanticKnowledgeQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<SemanticKnowledgeQuery>(SemanticKnowledgeDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'semanticKnowledge', 'query', variables);
    },
    dimension(variables: DimensionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: DimensionQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<DimensionQuery>(DimensionDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'dimension', 'query', variables);
    },
    dimensions(variables?: DimensionsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: DimensionsQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<DimensionsQuery>(DimensionsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'dimensions', 'query', variables);
    },
    aspect(variables: AspectQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AspectQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AspectQuery>(AspectDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'aspect', 'query', variables);
    },
    aspects(variables?: AspectsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AspectsQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AspectsQuery>(AspectsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'aspects', 'query', variables);
    },
    trait(variables: TraitQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: TraitQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<TraitQuery>(TraitDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'trait', 'query', variables);
    },
    traits(variables?: TraitsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: TraitsQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<TraitsQuery>(TraitsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'traits', 'query', variables);
    },
    postExamples(variables: PostExamplesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: PostExamplesQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<PostExamplesQuery>(PostExamplesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'postExamples', 'query', variables);
    },
    postExample(variables: PostExampleQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: PostExampleQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<PostExampleQuery>(PostExampleDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'postExample', 'query', variables);
    },
    messageExamples(variables: MessageExamplesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: MessageExamplesQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<MessageExamplesQuery>(MessageExamplesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'messageExamples', 'query', variables);
    },
    messageExample(variables: MessageExampleQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: MessageExampleQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<MessageExampleQuery>(MessageExampleDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'messageExample', 'query', variables);
    },
    agentPersonalityTrait(variables: AgentPersonalityTraitQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AgentPersonalityTraitQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AgentPersonalityTraitQuery>(AgentPersonalityTraitDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'agentPersonalityTrait', 'query', variables);
    },
    agentPersonalityTraits(variables?: AgentPersonalityTraitsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AgentPersonalityTraitsQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AgentPersonalityTraitsQuery>(AgentPersonalityTraitsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'agentPersonalityTraits', 'query', variables);
    },
    availableAudiences(variables?: AvailableAudiencesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AvailableAudiencesQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AvailableAudiencesQuery>(AvailableAudiencesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'availableAudiences', 'query', variables);
    },
    audiences(variables?: AudiencesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AudiencesQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AudiencesQuery>(AudiencesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'audiences', 'query', variables);
    },
    audience(variables: AudienceQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AudienceQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AudienceQuery>(AudienceDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'audience', 'query', variables);
    },
    getCompletedBeeline(variables: GetCompletedBeelineQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetCompletedBeelineQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetCompletedBeelineQuery>(GetCompletedBeelineDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCompletedBeeline', 'query', variables);
    },
    getThreadsBySource(variables: GetThreadsBySourceQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetThreadsBySourceQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetThreadsBySourceQuery>(GetThreadsBySourceDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getThreadsBySource', 'query', variables);
    },
    getThreadById(variables: GetThreadByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetThreadByIdQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetThreadByIdQuery>(GetThreadByIdDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getThreadById', 'query', variables);
    },
    getRecentThreads(variables?: GetRecentThreadsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetRecentThreadsQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetRecentThreadsQuery>(GetRecentThreadsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getRecentThreads', 'query', variables);
    },
    createGroup(variables: CreateGroupMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: CreateGroupMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<CreateGroupMutation>(CreateGroupDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createGroup', 'mutation', variables);
    },
    updateGroup(variables: UpdateGroupMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: UpdateGroupMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<UpdateGroupMutation>(UpdateGroupDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateGroup', 'mutation', variables);
    },
    deleteGroup(variables: DeleteGroupMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: DeleteGroupMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<DeleteGroupMutation>(DeleteGroupDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteGroup', 'mutation', variables);
    },
    createDeveloper(variables: CreateDeveloperMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: CreateDeveloperMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<CreateDeveloperMutation>(CreateDeveloperDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createDeveloper', 'mutation', variables);
    },
    getOrCreateDeveloper(variables: GetOrCreateDeveloperMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetOrCreateDeveloperMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetOrCreateDeveloperMutation>(GetOrCreateDeveloperDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getOrCreateDeveloper', 'mutation', variables);
    },
    deleteDeveloper(variables: DeleteDeveloperMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: DeleteDeveloperMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<DeleteDeveloperMutation>(DeleteDeveloperDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteDeveloper', 'mutation', variables);
    },
    createAuthToken(variables: CreateAuthTokenMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: CreateAuthTokenMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<CreateAuthTokenMutation>(CreateAuthTokenDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createAuthToken', 'mutation', variables);
    },
    updateAuthToken(variables: UpdateAuthTokenMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: UpdateAuthTokenMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<UpdateAuthTokenMutation>(UpdateAuthTokenDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateAuthToken', 'mutation', variables);
    },
    deleteAuthToken(variables: DeleteAuthTokenMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: DeleteAuthTokenMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<DeleteAuthTokenMutation>(DeleteAuthTokenDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteAuthToken', 'mutation', variables);
    },
    createAgent(variables: CreateAgentMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: CreateAgentMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<CreateAgentMutation>(CreateAgentDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createAgent', 'mutation', variables);
    },
    updateAgent(variables: UpdateAgentMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: UpdateAgentMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<UpdateAgentMutation>(UpdateAgentDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateAgent', 'mutation', variables);
    },
    deleteAgent(variables: DeleteAgentMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: DeleteAgentMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<DeleteAgentMutation>(DeleteAgentDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteAgent', 'mutation', variables);
    },
    addSemanticKnowledge(variables: AddSemanticKnowledgeMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AddSemanticKnowledgeMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AddSemanticKnowledgeMutation>(AddSemanticKnowledgeDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addSemanticKnowledge', 'mutation', variables);
    },
    updateSemanticKnowledge(variables: UpdateSemanticKnowledgeMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: UpdateSemanticKnowledgeMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<UpdateSemanticKnowledgeMutation>(UpdateSemanticKnowledgeDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateSemanticKnowledge', 'mutation', variables);
    },
    deleteSemanticKnowledge(variables: DeleteSemanticKnowledgeMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: DeleteSemanticKnowledgeMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<DeleteSemanticKnowledgeMutation>(DeleteSemanticKnowledgeDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteSemanticKnowledge', 'mutation', variables);
    },
    createTrait(variables: CreateTraitMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: CreateTraitMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<CreateTraitMutation>(CreateTraitDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createTrait', 'mutation', variables);
    },
    updateTrait(variables: UpdateTraitMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: UpdateTraitMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<UpdateTraitMutation>(UpdateTraitDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateTrait', 'mutation', variables);
    },
    deleteTrait(variables: DeleteTraitMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: DeleteTraitMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<DeleteTraitMutation>(DeleteTraitDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteTrait', 'mutation', variables);
    },
    addPostExamples(variables: AddPostExamplesMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AddPostExamplesMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AddPostExamplesMutation>(AddPostExamplesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addPostExamples', 'mutation', variables);
    },
    updatePostExample(variables: UpdatePostExampleMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: UpdatePostExampleMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<UpdatePostExampleMutation>(UpdatePostExampleDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updatePostExample', 'mutation', variables);
    },
    deletePostExample(variables: DeletePostExampleMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: DeletePostExampleMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<DeletePostExampleMutation>(DeletePostExampleDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deletePostExample', 'mutation', variables);
    },
    addMessageExamples(variables: AddMessageExamplesMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AddMessageExamplesMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AddMessageExamplesMutation>(AddMessageExamplesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addMessageExamples', 'mutation', variables);
    },
    updateMessageExample(variables: UpdateMessageExampleMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: UpdateMessageExampleMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<UpdateMessageExampleMutation>(UpdateMessageExampleDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateMessageExample', 'mutation', variables);
    },
    deleteMessageExample(variables: DeleteMessageExampleMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: DeleteMessageExampleMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<DeleteMessageExampleMutation>(DeleteMessageExampleDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteMessageExample', 'mutation', variables);
    },
    createAgentPersonalityTrait(variables: CreateAgentPersonalityTraitMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: CreateAgentPersonalityTraitMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<CreateAgentPersonalityTraitMutation>(CreateAgentPersonalityTraitDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createAgentPersonalityTrait', 'mutation', variables);
    },
    deleteAgentPersonalityTrait(variables: DeleteAgentPersonalityTraitMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: DeleteAgentPersonalityTraitMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<DeleteAgentPersonalityTraitMutation>(DeleteAgentPersonalityTraitDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteAgentPersonalityTrait', 'mutation', variables);
    },
    createTraitAndAddToAgentPersonality(variables: CreateTraitAndAddToAgentPersonalityMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: CreateTraitAndAddToAgentPersonalityMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<CreateTraitAndAddToAgentPersonalityMutation>(CreateTraitAndAddToAgentPersonalityDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createTraitAndAddToAgentPersonality', 'mutation', variables);
    },
    createAudience(variables: CreateAudienceMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: CreateAudienceMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<CreateAudienceMutation>(CreateAudienceDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createAudience', 'mutation', variables);
    },
    updateAudience(variables: UpdateAudienceMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: UpdateAudienceMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<UpdateAudienceMutation>(UpdateAudienceDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateAudience', 'mutation', variables);
    },
    deleteAudience(variables: DeleteAudienceMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: DeleteAudienceMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<DeleteAudienceMutation>(DeleteAudienceDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteAudience', 'mutation', variables);
    },
    generateAgents(variables: GenerateAgentsMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GenerateAgentsMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GenerateAgentsMutation>(GenerateAgentsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'generateAgents', 'mutation', variables);
    },
    importElizaAgent(variables: ImportElizaAgentMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: ImportElizaAgentMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<ImportElizaAgentMutation>(ImportElizaAgentDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'importElizaAgent', 'mutation', variables);
    },
    addToAudience(variables: AddToAudienceMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AddToAudienceMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AddToAudienceMutation>(AddToAudienceDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addToAudience', 'mutation', variables);
    },
    generateAudience(variables: GenerateAudienceMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GenerateAudienceMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GenerateAudienceMutation>(GenerateAudienceDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'generateAudience', 'mutation', variables);
    },
    openChat(variables: OpenChatMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: OpenChatMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<OpenChatMutation>(OpenChatDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'openChat', 'mutation', variables);
    },
    createBeeline(variables: CreateBeelineMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: CreateBeelineMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<CreateBeelineMutation>(CreateBeelineDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createBeeline', 'mutation', variables);
    },
    createThread(variables: CreateThreadMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: CreateThreadMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<CreateThreadMutation>(CreateThreadDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createThread', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;