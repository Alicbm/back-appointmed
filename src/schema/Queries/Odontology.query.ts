import { GraphQLID, GraphQLList } from "graphql";
import { BaseGeneralType } from "../typeDefs/BaseGeneralType";
import { OdontologyEntity } from "../../entities/Odontology.entity";
import connectDB from "../db";

const odontologySource = connectDB.getRepository(OdontologyEntity)

export const GET_ALL_ODONTOLOGY_REQUEST = {
  type: new GraphQLList(BaseGeneralType),
  async resolve() {
    return await odontologySource.find()
  }
}

export const GET_ONE_ODONTOLOGY_REQUEST = {
  type: new GraphQLList(BaseGeneralType),
  args: {
    id: { type: GraphQLID }
  },
  async resolve(_: any, { id }: any ) {
    return await odontologySource.findOne({
      where: {
        id
      }
    })
  }
}