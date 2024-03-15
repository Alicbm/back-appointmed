import { GraphQLID, GraphQLList } from "graphql";
import { BaseGeneralType } from "../typeDefs/BaseGeneralType";
import { PsychiatryEntity } from "../../entities/Psychiatry.entity";
import connectDB from "../db";

const psychiatrySource = connectDB.getRepository(PsychiatryEntity)

export const GET_ALL_PSYCHIATRY_REQUEST = {
  type: new GraphQLList(BaseGeneralType),
  async resolve() {
    return await psychiatrySource.find()
  }
}

export const GET_ONE_PSYCHIATRY_REQUEST = {
  type: new GraphQLList(BaseGeneralType),
  args: {
    id: { type: GraphQLID }
  },
  async resolve(_: any, { id }: any ) {
    return await psychiatrySource.findOne({
      where: {
        id
      }
    })
  }
}