import axios from "axios";
import DataLoader from "dataloader";
import { GraphQLResolveInfo } from "graphql";
import { fieldsList } from "graphql-fields-list";
import fakeDb from "./fakeDb";
import {
  AuthorResponse,
  QueryNobelPrizeSpecificArgs,
  QueryUserArgs,
  Resolvers,
} from "./generated-types/resolversTypes";
import {
  Author,
  Book,
  LaureateAPIResponse,
  LaureateExtendedOnSpecificNobelPrize,
  LaureatesAPIResponse,
  NobelPrizesAPIResponse,
  NobelPrizeSpecificAPIResponse,
  UserModel,
} from "./types";

const USERS: UserModel[] = [
  {
    _id: "1",
    services: { email: { address: "test@email.com" } },
    profile: { age: 20, firstName: "Dotan", lastName: "Simha" },
  },
];

const batchGetBooksByAuthorId = async (
  authorIds: readonly number[]
): Promise<Promise<Book[]>[]> => {
  const books = authorIds.map((authorId) => {
    return fakeDb.getBookById(authorId);
  });
  console.log("I only get fired once");
  return books;
};

const bookLoader = new DataLoader(batchGetBooksByAuthorId);

export const resolvers: Resolvers = {
  // These are used to specify types of a Field that can have multiple e.g. Book | Author
  LaureateExtended: {
    __resolveType(obj, contextValue, info) {
      // Only LaureatePerson has a fullName field
      if (obj.fullName) {
        return "LaureatePerson";
      }
      // Only LaureatePerson has a orgName field
      if (obj.orgName) {
        return "LaureateOrganization";
      }
      return null; // GraphQLError is thrown
    },
  },
  // These are used to specify types of a Field that can have multiple e.g. Book | Author
  LaureateExtendedOnSpecificNobelPrize: {
    __resolveType(obj, contextValue, info) {
      // Only LaureatePerson has a fullName field
      if (obj.familyName) {
        return "LaureatePerson";
      }
      // Only LaureatePerson has a orgName field
      if (obj.orgName) {
        return "LaureateOrganization";
      }
      if (obj.motivation) return "LaureateBasic";
      return null; // GraphQLError is thrown
    },
  },
  Query: {
    // Simple graphql resolver
    user: (
      _parent: any,
      args: QueryUserArgs,
      _context: any,
      info: GraphQLResolveInfo
    ) => {
      return USERS.find((u) => u._id === args.id);
    },
    // graphql resolver returning data from API
    nobelPrizes: async (_parent, _args, _context, info) => {
      try {
        const nobelPrizesResponse = await axios.get<NobelPrizesAPIResponse>(
          "https://api.nobelprize.org/2.1/nobelPrizes"
        );
        return nobelPrizesResponse.data;
      } catch (error) {
        throw new Error("Failed to get data");
      }
    },
    // graphql resolver returning data from API
    laureates: async (
      _parent: any,
      _args: any,
      _context: any,
      info: GraphQLResolveInfo
    ) => {
      try {
        const laureatesResponse = await axios.get<LaureatesAPIResponse>(
          "https://api.nobelprize.org/2.1/laureates"
        );
        return laureatesResponse.data;
      } catch (error) {
        throw new Error("Failed to get data");
      }
    },
    // graphql resolver combining two API responses
    nobelPrizeSpecific: async (
      _parent: any,
      { year, category }: QueryNobelPrizeSpecificArgs,
      _context: any,
      info: GraphQLResolveInfo
    ) => {
      try {
        const nobelPrizeResponse =
          await axios.get<NobelPrizeSpecificAPIResponse>(
            `https://api.nobelprize.org/2.1/nobelPrize/${category}/${year}`
          );

        const nobelPrizeData = nobelPrizeResponse.data[0];
        // Here we are getting the selected fields for the query
        const laureatesFields = fieldsList(info, { path: "laureates" });

        if (
          !laureatesFields.includes("orgName") &&
          !laureatesFields.includes("familyName")
        )
          return nobelPrizeData;

        const laureatesInfo = await Promise.all(
          nobelPrizeData.laureates.map(async (laureate) => {
            console.log("test", laureate);
            const laureateResponse = await axios.get<LaureateAPIResponse>(
              `https://api.nobelprize.org/2.1/laureate/${laureate.id}`
            );
            return laureateResponse
              .data[0] as LaureateExtendedOnSpecificNobelPrize;
          })
        );

        const nobelPrizeEnriched = {
          ...nobelPrizeData,
          laureates: laureatesInfo,
        };
        return nobelPrizeEnriched;
      } catch (error) {
        console.log(error);
        throw new Error("Failed to get data");
      }
    },
    // simple graphql resolver using dataloader in child resolvers
    authors: async (
      _parent: any,
      _args: any,
      _context: any,
      _info: GraphQLResolveInfo
    ) => {
      try {
        const response = await fakeDb.getAllAuthors();
        return response;
      } catch (error) {
        throw new Error("Failed to get authors");
      }
    },
  },
  // Child resolvers
  Author: {
    id: (author: Author) => author.id,
  },
  AuthorResponse: {
    // Child resolver with dataloader
    // books: async (author: AuthorResponse) => {
    //   try {
    //     const books = await bookLoader.load(author.id);
    //     return books;
    //   } catch (error) {
    //     throw new Error("Failed to get books");
    //   }
    // },
    // Child resolver without dataloader
    books: async (author: AuthorResponse) => {
      try {
        const books = await fakeDb.getBookById(author.id);
        return books;
      } catch (error) {
        throw new Error("Failed to get books");
      }
    },
  },
  User: {
    id: (user) => user._id,
    email: (user) => user.services.email.address,
    profile: (user) => user.profile,
  },
  Profile: {
    age: (profile) => profile.age,
  },
};
