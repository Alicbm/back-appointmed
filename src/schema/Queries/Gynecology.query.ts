import { GraphQLID, GraphQLList } from "graphql";
import { BaseGeneralType } from "../typeDefs/BaseGeneralType";
import { GynecologyEntity } from "../../entities/Gynecology.entity";
import connectDB from "../db";

const gynecologySource = connectDB.getRepository(GynecologyEntity)

export const GET_ALL_GYNECOLOGY_REQUEST = {
  type: new GraphQLList(BaseGeneralType),
  async resolve() {
    return await gynecologySource.find()
  }
}

export const GET_ONE_GYNECOLOGY_REQUEST = {
  type: new GraphQLList(BaseGeneralType),
  args: {
    id: { type: GraphQLID }
  },
  async resolve(_: any, { id }: any ) {
    return await gynecologySource.findOne({
      where: {
        id
      }
    })
  }
}