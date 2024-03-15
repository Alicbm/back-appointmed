import { GraphQLID, GraphQLList } from "graphql";
import { BaseGeneralType } from "../typeDefs/BaseGeneralType";
import { OptometryEntity } from "../../entities/Optometry.entity";
import connectDB from "../db";

const optometrySource = connectDB.getRepository(OptometryEntity)

export const GET_ALL_OPTOMETRY_REQUEST = {
  type: new GraphQLList(BaseGeneralType),
  async resolve() {
    return await optometrySource.find()
  }
}

export const GET_ONE_OPTOMETRY_REQUEST = {
  type: new GraphQLList(BaseGeneralType),
  args: {
    id: { type: GraphQLID }
  },
  async resolve(_: any, { id }: any ) {
    return await optometrySource.findOne({
      where: {
        id
      }
    })
  }
}