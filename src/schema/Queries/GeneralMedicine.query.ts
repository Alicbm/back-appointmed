import { GraphQLID, GraphQLList } from "graphql";
import { BaseGeneralType } from "../typeDefs/BaseGeneralType";
import { GeneralMedicineEntity } from "../../entities/GeneralMedicine.entity";
import connectDB from "../db";

const generalMedicineSource = connectDB.getRepository(GeneralMedicineEntity)

export const GET_ALL_GENERAL_MEDICINE_REQUEST = {
  type: new GraphQLList(BaseGeneralType),
  async resolve() {
    return await generalMedicineSource.find()
  }
}

export const GET_ONE_GENERAL_MEDICINE_REQUEST = {
  type: new GraphQLList(BaseGeneralType),
  args: {
    id: { type: GraphQLID }
  },
  async resolve(_: any, { id }: any ) {
    return await generalMedicineSource.findOne({
      where: {
        id
      }
    })
  }
}