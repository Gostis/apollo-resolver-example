import { GraphQLResolveInfo } from 'graphql';
import { UserModel, UserProfile, NobelPrizesAPIResponse, NobelPrize, Translation, ItemLinks, LaureateBasic, TranslationWithSameas, Location, Event, Person, Organization, Wikipedia, WikiData, Entity, Residence, NobelPrizePerLaureate, LaureatePerson, LaureateOrganization, LaureatesAPIResponse, LaureateExtended, LaureateExtendedOnSpecificNobelPrize, NobelPrizeSpecific, Author, Book } from 'src/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
};

export type AuthorResponse = {
  __typename?: 'AuthorResponse';
  books?: Maybe<Array<Maybe<Book>>>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
};

export type Book = {
  __typename?: 'Book';
  authorId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
};

export type Entity = {
  __typename?: 'Entity';
  city?: Maybe<Translation>;
  cityNow?: Maybe<TranslationWithSameas>;
  country?: Maybe<Translation>;
  countryNow?: Maybe<TranslationWithSameas>;
  locationString?: Maybe<Translation>;
  name?: Maybe<Translation>;
  nameNow?: Maybe<Translation>;
  nativeName?: Maybe<Scalars['String']>;
};

export type Event = {
  __typename?: 'Event';
  date?: Maybe<Scalars['String']>;
  place?: Maybe<Location>;
};

export type ItemLinks = {
  __typename?: 'ItemLinks';
  action?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
  types?: Maybe<Scalars['String']>;
};

export type Laureate = {
  __typename?: 'Laureate';
  id?: Maybe<Scalars['Int']>;
  links?: Maybe<ItemLinks>;
  nobelPrizes?: Maybe<Array<Maybe<NobelPrizePerLaureate>>>;
  sameAs?: Maybe<Array<Maybe<Scalars['String']>>>;
  wikiData?: Maybe<WikiData>;
  wikipedia?: Maybe<Wikipedia>;
};

export type LaureateBasic = {
  __typename?: 'LaureateBasic';
  fullName?: Maybe<Translation>;
  id?: Maybe<Scalars['Int']>;
  knownName?: Maybe<Translation>;
  links?: Maybe<Array<Maybe<ItemLinks>>>;
  motivation?: Maybe<Translation>;
  portion?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
};

export type LaureateExtended = LaureateOrganization | LaureatePerson;

export type LaureateExtendedOnSpecificNobelPrize = LaureateBasic | LaureateOrganization | LaureatePerson;

export type LaureateOrganization = {
  __typename?: 'LaureateOrganization';
  acronym?: Maybe<Scalars['String']>;
  dissolution?: Maybe<Event>;
  founded?: Maybe<Event>;
  headquarters?: Maybe<Location>;
  id?: Maybe<Scalars['Int']>;
  links?: Maybe<ItemLinks>;
  nativeName?: Maybe<Scalars['String']>;
  nobelPrizes?: Maybe<Array<Maybe<NobelPrizePerLaureate>>>;
  orgName?: Maybe<Translation>;
  sameAs?: Maybe<Array<Maybe<Scalars['String']>>>;
  wikiData?: Maybe<WikiData>;
  wikipedia?: Maybe<Wikipedia>;
};

export type LaureatePerson = {
  __typename?: 'LaureatePerson';
  birth?: Maybe<Event>;
  death?: Maybe<Event>;
  familyName?: Maybe<Translation>;
  filename?: Maybe<Scalars['String']>;
  fullName?: Maybe<Translation>;
  gender?: Maybe<Scalars['String']>;
  givenName?: Maybe<Translation>;
  id?: Maybe<Scalars['Int']>;
  knownName?: Maybe<Translation>;
  links?: Maybe<ItemLinks>;
  nobelPrizes?: Maybe<Array<Maybe<NobelPrizePerLaureate>>>;
  sameAs?: Maybe<Array<Maybe<Scalars['String']>>>;
  wikiData?: Maybe<WikiData>;
  wikipedia?: Maybe<Wikipedia>;
};

export type LaureatesApiResponse = {
  __typename?: 'LaureatesAPIResponse';
  laureates?: Maybe<Array<Maybe<LaureateExtended>>>;
};

export type Location = {
  __typename?: 'Location';
  city?: Maybe<Translation>;
  cityNow?: Maybe<TranslationWithSameas>;
  continent?: Maybe<Translation>;
  country?: Maybe<Translation>;
  countryNow?: Maybe<TranslationWithSameas>;
  locationString?: Maybe<Translation>;
};

export type NobelPrize = {
  __typename?: 'NobelPrize';
  awardYear?: Maybe<Scalars['Int']>;
  category?: Maybe<Translation>;
  categoryFullName?: Maybe<Translation>;
  dateAwarded?: Maybe<Scalars['String']>;
  laureates?: Maybe<Array<Maybe<LaureateBasic>>>;
  prizeAmount?: Maybe<Scalars['Int']>;
  prizeAmountAdjusted?: Maybe<Scalars['Int']>;
  topMotivation?: Maybe<Translation>;
};

export type NobelPrizePerLaureate = {
  __typename?: 'NobelPrizePerLaureate';
  affiliations?: Maybe<Array<Maybe<Entity>>>;
  awardYear?: Maybe<Scalars['Int']>;
  category?: Maybe<Translation>;
  categoryFullName?: Maybe<Translation>;
  dateAwarded?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Maybe<ItemLinks>>>;
  motivation?: Maybe<Translation>;
  portion?: Maybe<Scalars['String']>;
  prizeAmount?: Maybe<Scalars['Int']>;
  prizeAmountAdjusted?: Maybe<Scalars['Int']>;
  prizeStatus?: Maybe<Scalars['String']>;
  residences?: Maybe<Array<Maybe<Residence>>>;
  sortOrder?: Maybe<Scalars['String']>;
};

export type NobelPrizeSpecific = {
  __typename?: 'NobelPrizeSpecific';
  awardYear?: Maybe<Scalars['Int']>;
  category?: Maybe<Translation>;
  categoryFullName?: Maybe<Translation>;
  dateAwarded?: Maybe<Scalars['String']>;
  laureates?: Maybe<Array<Maybe<LaureateExtendedOnSpecificNobelPrize>>>;
  prizeAmount?: Maybe<Scalars['Int']>;
  prizeAmountAdjusted?: Maybe<Scalars['Int']>;
  topMotivation?: Maybe<Translation>;
};

export type NobelPrizesApiResponse = {
  __typename?: 'NobelPrizesAPIResponse';
  nobelPrizes?: Maybe<Array<Maybe<NobelPrize>>>;
};

export type Organization = {
  __typename?: 'Organization';
  acronym?: Maybe<Scalars['String']>;
  dissolution?: Maybe<Event>;
  founded?: Maybe<Event>;
  headquarters?: Maybe<Location>;
  nativeName?: Maybe<Scalars['String']>;
  orgName?: Maybe<Translation>;
};

export type Person = {
  __typename?: 'Person';
  birth?: Maybe<Event>;
  death?: Maybe<Event>;
  familyName?: Maybe<Translation>;
  filename?: Maybe<Scalars['String']>;
  fullName?: Maybe<Translation>;
  gender?: Maybe<Scalars['String']>;
  givenName?: Maybe<Translation>;
  knownName?: Maybe<Translation>;
};

export type Profile = {
  __typename?: 'Profile';
  age?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  authors: Array<Maybe<AuthorResponse>>;
  laureates: LaureatesApiResponse;
  nobelPrizeSpecific: NobelPrizeSpecific;
  nobelPrizes: NobelPrizesApiResponse;
  user: User;
};


export type QueryLaureatesArgs = {
  ID?: InputMaybe<Scalars['Int']>;
  Residence?: InputMaybe<Scalars['String']>;
  affiliation?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  motivation?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryNobelPrizeSpecificArgs = {
  category: Scalars['String'];
  year: Scalars['Int'];
};


export type QueryNobelPrizesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  nobelPrizeCategory?: InputMaybe<Scalars['String']>;
  nobelPrizeYear?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  yearTo?: InputMaybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type Residence = {
  __typename?: 'Residence';
  city?: Maybe<Translation>;
  cityNow?: Maybe<TranslationWithSameas>;
  country?: Maybe<Translation>;
  countryNow?: Maybe<TranslationWithSameas>;
  locationString?: Maybe<Translation>;
};

export type Translation = {
  __typename?: 'Translation';
  en?: Maybe<Scalars['String']>;
  no?: Maybe<Scalars['String']>;
  sn?: Maybe<Scalars['String']>;
};

export type TranslationWithSameas = {
  __typename?: 'TranslationWithSameas';
  en?: Maybe<Scalars['String']>;
  no?: Maybe<Scalars['String']>;
  sameAs?: Maybe<Array<Maybe<Scalars['String']>>>;
  sn?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  profile?: Maybe<Profile>;
};

export type WikiData = {
  __typename?: 'WikiData';
  id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Wikipedia = {
  __typename?: 'Wikipedia';
  english?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Author: ResolverTypeWrapper<Author>;
  AuthorResponse: ResolverTypeWrapper<Omit<AuthorResponse, 'books'> & { books?: Maybe<Array<Maybe<ResolversTypes['Book']>>> }>;
  Book: ResolverTypeWrapper<Book>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Entity: ResolverTypeWrapper<Entity>;
  Event: ResolverTypeWrapper<Event>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  ItemLinks: ResolverTypeWrapper<ItemLinks>;
  Laureate: ResolverTypeWrapper<Omit<Laureate, 'links' | 'nobelPrizes' | 'wikiData' | 'wikipedia'> & { links?: Maybe<ResolversTypes['ItemLinks']>, nobelPrizes?: Maybe<Array<Maybe<ResolversTypes['NobelPrizePerLaureate']>>>, wikiData?: Maybe<ResolversTypes['WikiData']>, wikipedia?: Maybe<ResolversTypes['Wikipedia']> }>;
  LaureateBasic: ResolverTypeWrapper<LaureateBasic>;
  LaureateExtended: ResolverTypeWrapper<LaureateExtended>;
  LaureateExtendedOnSpecificNobelPrize: ResolverTypeWrapper<LaureateExtendedOnSpecificNobelPrize>;
  LaureateOrganization: ResolverTypeWrapper<LaureateOrganization>;
  LaureatePerson: ResolverTypeWrapper<LaureatePerson>;
  LaureatesAPIResponse: ResolverTypeWrapper<LaureatesAPIResponse>;
  Location: ResolverTypeWrapper<Location>;
  NobelPrize: ResolverTypeWrapper<NobelPrize>;
  NobelPrizePerLaureate: ResolverTypeWrapper<NobelPrizePerLaureate>;
  NobelPrizeSpecific: ResolverTypeWrapper<NobelPrizeSpecific>;
  NobelPrizesAPIResponse: ResolverTypeWrapper<NobelPrizesAPIResponse>;
  Organization: ResolverTypeWrapper<Organization>;
  Person: ResolverTypeWrapper<Person>;
  Profile: ResolverTypeWrapper<UserProfile>;
  Query: ResolverTypeWrapper<{}>;
  Residence: ResolverTypeWrapper<Residence>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Translation: ResolverTypeWrapper<Translation>;
  TranslationWithSameas: ResolverTypeWrapper<TranslationWithSameas>;
  User: ResolverTypeWrapper<UserModel>;
  WikiData: ResolverTypeWrapper<WikiData>;
  Wikipedia: ResolverTypeWrapper<Wikipedia>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Author: Author;
  AuthorResponse: Omit<AuthorResponse, 'books'> & { books?: Maybe<Array<Maybe<ResolversParentTypes['Book']>>> };
  Book: Book;
  Boolean: Scalars['Boolean'];
  Entity: Entity;
  Event: Event;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  ItemLinks: ItemLinks;
  Laureate: Omit<Laureate, 'links' | 'nobelPrizes' | 'wikiData' | 'wikipedia'> & { links?: Maybe<ResolversParentTypes['ItemLinks']>, nobelPrizes?: Maybe<Array<Maybe<ResolversParentTypes['NobelPrizePerLaureate']>>>, wikiData?: Maybe<ResolversParentTypes['WikiData']>, wikipedia?: Maybe<ResolversParentTypes['Wikipedia']> };
  LaureateBasic: LaureateBasic;
  LaureateExtended: LaureateExtended;
  LaureateExtendedOnSpecificNobelPrize: LaureateExtendedOnSpecificNobelPrize;
  LaureateOrganization: LaureateOrganization;
  LaureatePerson: LaureatePerson;
  LaureatesAPIResponse: LaureatesAPIResponse;
  Location: Location;
  NobelPrize: NobelPrize;
  NobelPrizePerLaureate: NobelPrizePerLaureate;
  NobelPrizeSpecific: NobelPrizeSpecific;
  NobelPrizesAPIResponse: NobelPrizesAPIResponse;
  Organization: Organization;
  Person: Person;
  Profile: UserProfile;
  Query: {};
  Residence: Residence;
  String: Scalars['String'];
  Translation: Translation;
  TranslationWithSameas: TranslationWithSameas;
  User: UserModel;
  WikiData: WikiData;
  Wikipedia: Wikipedia;
};

export type AuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthorResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthorResponse'] = ResolversParentTypes['AuthorResponse']> = {
  books?: Resolver<Maybe<Array<Maybe<ResolversTypes['Book']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookResolvers<ContextType = any, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = {
  authorId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Entity'] = ResolversParentTypes['Entity']> = {
  city?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  cityNow?: Resolver<Maybe<ResolversTypes['TranslationWithSameas']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  countryNow?: Resolver<Maybe<ResolversTypes['TranslationWithSameas']>, ParentType, ContextType>;
  locationString?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  nameNow?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  nativeName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = {
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  place?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemLinksResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemLinks'] = ResolversParentTypes['ItemLinks']> = {
  action?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  types?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LaureateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Laureate'] = ResolversParentTypes['Laureate']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  links?: Resolver<Maybe<ResolversTypes['ItemLinks']>, ParentType, ContextType>;
  nobelPrizes?: Resolver<Maybe<Array<Maybe<ResolversTypes['NobelPrizePerLaureate']>>>, ParentType, ContextType>;
  sameAs?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  wikiData?: Resolver<Maybe<ResolversTypes['WikiData']>, ParentType, ContextType>;
  wikipedia?: Resolver<Maybe<ResolversTypes['Wikipedia']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LaureateBasicResolvers<ContextType = any, ParentType extends ResolversParentTypes['LaureateBasic'] = ResolversParentTypes['LaureateBasic']> = {
  fullName?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  knownName?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemLinks']>>>, ParentType, ContextType>;
  motivation?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  portion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sortOrder?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LaureateExtendedResolvers<ContextType = any, ParentType extends ResolversParentTypes['LaureateExtended'] = ResolversParentTypes['LaureateExtended']> = {
  __resolveType: TypeResolveFn<'LaureateOrganization' | 'LaureatePerson', ParentType, ContextType>;
};

export type LaureateExtendedOnSpecificNobelPrizeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LaureateExtendedOnSpecificNobelPrize'] = ResolversParentTypes['LaureateExtendedOnSpecificNobelPrize']> = {
  __resolveType: TypeResolveFn<'LaureateBasic' | 'LaureateOrganization' | 'LaureatePerson', ParentType, ContextType>;
};

export type LaureateOrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['LaureateOrganization'] = ResolversParentTypes['LaureateOrganization']> = {
  acronym?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dissolution?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  founded?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  headquarters?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  links?: Resolver<Maybe<ResolversTypes['ItemLinks']>, ParentType, ContextType>;
  nativeName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nobelPrizes?: Resolver<Maybe<Array<Maybe<ResolversTypes['NobelPrizePerLaureate']>>>, ParentType, ContextType>;
  orgName?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  sameAs?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  wikiData?: Resolver<Maybe<ResolversTypes['WikiData']>, ParentType, ContextType>;
  wikipedia?: Resolver<Maybe<ResolversTypes['Wikipedia']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LaureatePersonResolvers<ContextType = any, ParentType extends ResolversParentTypes['LaureatePerson'] = ResolversParentTypes['LaureatePerson']> = {
  birth?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  death?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  familyName?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  filename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullName?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  givenName?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  knownName?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  links?: Resolver<Maybe<ResolversTypes['ItemLinks']>, ParentType, ContextType>;
  nobelPrizes?: Resolver<Maybe<Array<Maybe<ResolversTypes['NobelPrizePerLaureate']>>>, ParentType, ContextType>;
  sameAs?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  wikiData?: Resolver<Maybe<ResolversTypes['WikiData']>, ParentType, ContextType>;
  wikipedia?: Resolver<Maybe<ResolversTypes['Wikipedia']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LaureatesApiResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LaureatesAPIResponse'] = ResolversParentTypes['LaureatesAPIResponse']> = {
  laureates?: Resolver<Maybe<Array<Maybe<ResolversTypes['LaureateExtended']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = {
  city?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  cityNow?: Resolver<Maybe<ResolversTypes['TranslationWithSameas']>, ParentType, ContextType>;
  continent?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  countryNow?: Resolver<Maybe<ResolversTypes['TranslationWithSameas']>, ParentType, ContextType>;
  locationString?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NobelPrizeResolvers<ContextType = any, ParentType extends ResolversParentTypes['NobelPrize'] = ResolversParentTypes['NobelPrize']> = {
  awardYear?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  categoryFullName?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  dateAwarded?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  laureates?: Resolver<Maybe<Array<Maybe<ResolversTypes['LaureateBasic']>>>, ParentType, ContextType>;
  prizeAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  prizeAmountAdjusted?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  topMotivation?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NobelPrizePerLaureateResolvers<ContextType = any, ParentType extends ResolversParentTypes['NobelPrizePerLaureate'] = ResolversParentTypes['NobelPrizePerLaureate']> = {
  affiliations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Entity']>>>, ParentType, ContextType>;
  awardYear?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  categoryFullName?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  dateAwarded?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemLinks']>>>, ParentType, ContextType>;
  motivation?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  portion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prizeAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  prizeAmountAdjusted?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  prizeStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  residences?: Resolver<Maybe<Array<Maybe<ResolversTypes['Residence']>>>, ParentType, ContextType>;
  sortOrder?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NobelPrizeSpecificResolvers<ContextType = any, ParentType extends ResolversParentTypes['NobelPrizeSpecific'] = ResolversParentTypes['NobelPrizeSpecific']> = {
  awardYear?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  categoryFullName?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  dateAwarded?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  laureates?: Resolver<Maybe<Array<Maybe<ResolversTypes['LaureateExtendedOnSpecificNobelPrize']>>>, ParentType, ContextType>;
  prizeAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  prizeAmountAdjusted?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  topMotivation?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NobelPrizesApiResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['NobelPrizesAPIResponse'] = ResolversParentTypes['NobelPrizesAPIResponse']> = {
  nobelPrizes?: Resolver<Maybe<Array<Maybe<ResolversTypes['NobelPrize']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']> = {
  acronym?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dissolution?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  founded?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  headquarters?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  nativeName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orgName?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = {
  birth?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  death?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  familyName?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  filename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullName?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  givenName?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  knownName?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']> = {
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  authors?: Resolver<Array<Maybe<ResolversTypes['AuthorResponse']>>, ParentType, ContextType>;
  laureates?: Resolver<ResolversTypes['LaureatesAPIResponse'], ParentType, ContextType, Partial<QueryLaureatesArgs>>;
  nobelPrizeSpecific?: Resolver<ResolversTypes['NobelPrizeSpecific'], ParentType, ContextType, RequireFields<QueryNobelPrizeSpecificArgs, 'category' | 'year'>>;
  nobelPrizes?: Resolver<ResolversTypes['NobelPrizesAPIResponse'], ParentType, ContextType, Partial<QueryNobelPrizesArgs>>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
};

export type ResidenceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Residence'] = ResolversParentTypes['Residence']> = {
  city?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  cityNow?: Resolver<Maybe<ResolversTypes['TranslationWithSameas']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  countryNow?: Resolver<Maybe<ResolversTypes['TranslationWithSameas']>, ParentType, ContextType>;
  locationString?: Resolver<Maybe<ResolversTypes['Translation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TranslationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Translation'] = ResolversParentTypes['Translation']> = {
  en?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  no?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TranslationWithSameasResolvers<ContextType = any, ParentType extends ResolversParentTypes['TranslationWithSameas'] = ResolversParentTypes['TranslationWithSameas']> = {
  en?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  no?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sameAs?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  sn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WikiDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['WikiData'] = ResolversParentTypes['WikiData']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WikipediaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Wikipedia'] = ResolversParentTypes['Wikipedia']> = {
  english?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Author?: AuthorResolvers<ContextType>;
  AuthorResponse?: AuthorResponseResolvers<ContextType>;
  Book?: BookResolvers<ContextType>;
  Entity?: EntityResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  ItemLinks?: ItemLinksResolvers<ContextType>;
  Laureate?: LaureateResolvers<ContextType>;
  LaureateBasic?: LaureateBasicResolvers<ContextType>;
  LaureateExtended?: LaureateExtendedResolvers<ContextType>;
  LaureateExtendedOnSpecificNobelPrize?: LaureateExtendedOnSpecificNobelPrizeResolvers<ContextType>;
  LaureateOrganization?: LaureateOrganizationResolvers<ContextType>;
  LaureatePerson?: LaureatePersonResolvers<ContextType>;
  LaureatesAPIResponse?: LaureatesApiResponseResolvers<ContextType>;
  Location?: LocationResolvers<ContextType>;
  NobelPrize?: NobelPrizeResolvers<ContextType>;
  NobelPrizePerLaureate?: NobelPrizePerLaureateResolvers<ContextType>;
  NobelPrizeSpecific?: NobelPrizeSpecificResolvers<ContextType>;
  NobelPrizesAPIResponse?: NobelPrizesApiResponseResolvers<ContextType>;
  Organization?: OrganizationResolvers<ContextType>;
  Person?: PersonResolvers<ContextType>;
  Profile?: ProfileResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Residence?: ResidenceResolvers<ContextType>;
  Translation?: TranslationResolvers<ContextType>;
  TranslationWithSameas?: TranslationWithSameasResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  WikiData?: WikiDataResolvers<ContextType>;
  Wikipedia?: WikipediaResolvers<ContextType>;
};

