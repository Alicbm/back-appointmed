import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_GENERAL_MEDICINE_REQUEST, GET_ONE_GENERAL_MEDICINE_REQUEST } from "./Queries/GeneralMedicine.query";
import { CREATE_GENERAL_MEDICINE_REQUEST, DELETE_GENERAL_MEDICINE_REQUEST, UPDATE_GENERAL_MEDICINE_REQUEST } from "./Mutation/GeneralMedicine.mutation";

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getAllGeneralMedicineRequest: GET_ALL_GENERAL_MEDICINE_REQUEST,
    getOneGeneralMedicineRequest: GET_ONE_GENERAL_MEDICINE_REQUEST
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createGeneralMedicineRequest: CREATE_GENERAL_MEDICINE_REQUEST,
    updateGeneralMedicineRequest: UPDATE_GENERAL_MEDICINE_REQUEST,
    deleteGeneralMedicineRequest: DELETE_GENERAL_MEDICINE_REQUEST
  }
})

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})