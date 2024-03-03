import { GraphQLID, GraphQLList } from "graphql";
import { MedicinaGeneralType } from "../typeDefs/GeneralMedicine.type";
import { GeneralMedicineEntity } from "../../entities/GeneralMedicine.entity";
import connectDB from "../db";

const generalMedicineSource = connectDB.getRepository(GeneralMedicineEntity)

export const GET_ALL_GENERAL_MEDICINE_REQUEST = {
  type: new GraphQLList(MedicinaGeneralType),
  async resolve() {
    return await generalMedicineSource.find()
  }
}

export const GET_ONE_GENERAL_MEDICINE_REQUEST = {
  type: new GraphQLList(MedicinaGeneralType),
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