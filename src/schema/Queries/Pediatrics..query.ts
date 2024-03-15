import { GraphQLID, GraphQLList } from "graphql";
import { BaseGeneralType } from "../typeDefs/BaseGeneralType";
import { PediatricsEntity } from "../../entities/Pediatrics.entity";
import connectDB from "../db";

const pediatricsSource = connectDB.getRepository(PediatricsEntity)

export const GET_ALL_PEDIATRICS_REQUEST = {
  type: new GraphQLList(BaseGeneralType),
  async resolve() {
    return await pediatricsSource.find()
  }
}

export const GET_ONE_PEDIATRICS_REQUEST = {
  type: new GraphQLList(BaseGeneralType),
  args: {
    id: { type: GraphQLID }
  },
  async resolve(_: any, { id }: any ) {
    return await pediatricsSource.findOne({
      where: {
        id
      }
    })
  }
}