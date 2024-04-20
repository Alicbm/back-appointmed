import { GraphQLObjectType, GraphQLString } from "graphql";
import { UserType } from "./UserType";

export const LoginType = new GraphQLObjectType({
  name: 'login', 
  fields: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    accessToken: { type: GraphQLString },
    user: { type: UserType }
  }
})