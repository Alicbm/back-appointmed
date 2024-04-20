import { GraphQLString, GraphQLList } from "graphql";
import { UserType } from "../typeDefs/UserType";
import { UserEntity } from "../../entities/User.entity";
import connectDB from "../db";

const userSource = connectDB.getRepository(UserEntity)

export const GET_ALL_USER = {
  type: new GraphQLList(UserType),
  async resolve() {
    return await userSource.find()
  }
}

export const GET_ONE_USER = {
  type: new GraphQLList(UserType),
  args: {
    email: { type: GraphQLString }
  },
  async resolve(_: any, { email }: any ) {

    const res = await userSource.findOne({
      where: {
        email
      }
    })

    return [res]
  }
}