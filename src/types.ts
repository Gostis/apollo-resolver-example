export type UserModel = {
  _id: string;
  services: {
    email: {
      address: string;
    };
  };
  profile?: UserProfile;
};

export type UserProfile = {
  firstName?: string;
  lastName?: string;
  age?: number;
};

export type AuthorResponse = {
  id: number;
  name: String;
  books: Book[];
};

export type Author = {
  id: number;
  name: string;
};

export type Book = {
  id: number;
  title: string;
  authorId: number;
};

interface TranslationWithSameas extends Translation {
  sameAs: Array<string>;
}

type Location = {
  city: Translation;
  country: Translation;
  cityNow: TranslationWithSameas;
  countryNow: TranslationWithSameas;
  continent: Translation;
  locationString: Translation;
};

type Event = {
  date: string;
  place: Location;
};

type Person = {
  knownName: Translation;
  givenName: Translation;
  familyName: Translation;
  fullName: Translation;
  filename: string;
  gender: string;
  birth: Event;
  death: Event;
};

type Organization = {
  orgName: Translation;
  nativeName: string;
  acronym: string;
  founded: Event;
  dissolution: Event;
  headquarters: Location;
};

type Wikipedia = {
  slug: string;
  english: string;
};

type WikiData = {
  id: string;
  url: string;
};

type Entity = {
  name: Translation;
  nameNow: Translation;
  nativeName: string;
  city: Translation;
  country: Translation;
  cityNow: TranslationWithSameas;
  countryNow: TranslationWithSameas;
  locationString: Translation;
};

type Residence = {
  city: Translation;
  country: Translation;
  cityNow: TranslationWithSameas;
  countryNow: TranslationWithSameas;
  locationString: Translation;
};

type NobelPrizePerLaureate = {
  awardYear: number;
  category: Translation;
  categoryFullName: Translation;
  sortOrder: string;
  portion: string;
  dateAwarded: string;
  prizeStatus: string;
  motivation: Translation;
  prizeAmount: number;
  prizeAmountAdjusted: number;
  affiliations: Array<Entity>;
  residences: Array<Residence>;
  links: Array<ItemLinks>;
};

type Translation = {
  en: string;
  sn: string;
  no: string;
};

type ItemLinks = {
  rel: string;
  href: string;
  action: string;
  types: string;
};

type LaureateBasic = {
  id: number;
  knownName: Translation;
  fullName: Translation;
  portion: string;
  sortOrder: string;
  motivation: Translation;
  links: Array<ItemLinks>;
};

type NobelPrize = {
  awardYear: number;
  category: Translation;
  categoryFullName: Translation;
  prizeAmount: number;
  prizeAmountAdjusted: number;
  links: ItemLinks;
  laureates: Array<LaureateBasic>;
};

type Laureate = {
  id: number;
  wikipedia: Wikipedia;
  wikiData: WikiData;
  sameAs: Array<string>;
  links: ItemLinks;
  nobelPrizes: Array<NobelPrizePerLaureate>;
};

export interface LaureatePerson extends Laureate, Person {}

export interface LaureateOrganization extends Laureate, Organization {}

type LaureateExtended = LaureatePerson | LaureateOrganization;
export type LaureateExtendedOnSpecificNobelPrize =
  | LaureatePerson
  | LaureateOrganization
  | LaureateBasic;

export type LaureatesAPIResponse = {
  laureates: Array<LaureateExtended>;
};

export type NobelPrizesAPIResponse = {
  nobelPrizes: Array<NobelPrize>;
};

export type NobelPrizeSpecificAPIResponse = Array<NobelPrizeSpecific>;

export type LaureateAPIResponse = Array<LaureateExtended>;

type NobelPrizeSpecific = {
  awardYear: number;
  category: Translation;
  categoryFullName: Translation;
  prizeAmount: number;
  prizeAmountAdjusted: number;
  links: ItemLinks;
  laureates: Array<LaureateExtendedOnSpecificNobelPrize>;
};
