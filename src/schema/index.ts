import { GraphQLObjectType, GraphQLSchema } from "graphql";
import {
  GET_ALL_GENERAL_MEDICINE_REQUEST,
  GET_ONE_GENERAL_MEDICINE_REQUEST,
} from "./Queries/GeneralMedicine.query";
import {
  CREATE_GENERAL_MEDICINE_REQUEST,
  DELETE_GENERAL_MEDICINE_REQUEST,
  UPDATE_GENERAL_MEDICINE_REQUEST,
} from "./Mutation/GeneralMedicine.mutation";
import {
  GET_ALL_ODONTOLOGY_REQUEST,
  GET_ONE_ODONTOLOGY_REQUEST,
} from "./Queries/Odontology.query";
import {
  CREATE_ODONTOLOGY_REQUEST,
  UPDATE_ODONTOLOGY_REQUEST,
  DELETE_ODONTOLOGY_REQUEST,
} from "./Mutation/Odontology.mutation";
import {
  GET_ALL_GYNECOLOGY_REQUEST,
  GET_ONE_GYNECOLOGY_REQUEST,
} from "./Queries/Gynecology.query";
import {
  CREATE_GYNECOLOGY_REQUEST,
  DELETE_GYNECOLOGY_REQUEST,
  UPDATE_GYNECOLOGY_REQUEST,
} from "./Mutation/Gynecology.mutation";
import {
  GET_ALL_PSYCHIATRY_REQUEST,
  GET_ONE_PSYCHIATRY_REQUEST,
} from "./Queries/Psychiatry.query";
import {
  CREATE_PSYCHIATRY_REQUEST,
  DELETE_PSYCHIATRY_REQUEST,
  UPDATE_PSYCHIATRY_REQUEST,
} from "./Mutation/Psychiatry.mutation";
import {
  GET_ALL_PEDIATRICS_REQUEST,
  GET_ONE_PEDIATRICS_REQUEST,
} from "./Queries/Pediatrics..query";
import {
  CREATE_PEDIATRICS_REQUEST,
  DELETE_PEDIATRICS_REQUEST,
  UPDATE_PEDIATRICS_REQUEST,
} from "./Mutation/Pediatrics.mutation";
import {
  GET_ALL_OPTOMETRY_REQUEST,
  GET_ONE_OPTOMETRY_REQUEST,
} from "./Queries/Optometry.query";
import {
  CREATE_OPTOMETRY_REQUEST,
  UPDATE_OPTOMETRY_REQUEST,
  DELETE_OPTOMETRY_REQUEST,
} from "./Mutation/Optometry.mutation";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllGeneralMedicineRequest: GET_ALL_GENERAL_MEDICINE_REQUEST,
    getOneGeneralMedicineRequest: GET_ONE_GENERAL_MEDICINE_REQUEST,
    getAllOdontologyRequest: GET_ALL_ODONTOLOGY_REQUEST,
    getOneOdontologyRequest: GET_ONE_ODONTOLOGY_REQUEST,
    getAllGynecologyRequest: GET_ALL_GYNECOLOGY_REQUEST,
    getOneGynecologyRequest: GET_ONE_GYNECOLOGY_REQUEST,
    getAllPsychiatryRequest: GET_ALL_PSYCHIATRY_REQUEST,
    getOnePsychiatryRequest: GET_ONE_PSYCHIATRY_REQUEST,
    getAllPediatricsRequest: GET_ALL_PEDIATRICS_REQUEST,
    getOnePediatricsRequest: GET_ONE_PEDIATRICS_REQUEST,
    getAllOptometryRequest: GET_ALL_OPTOMETRY_REQUEST,
    getOneOptometryRequest: GET_ONE_OPTOMETRY_REQUEST,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createGeneralMedicineRequest: CREATE_GENERAL_MEDICINE_REQUEST,
    updateGeneralMedicineRequest: UPDATE_GENERAL_MEDICINE_REQUEST,
    deleteGeneralMedicineRequest: DELETE_GENERAL_MEDICINE_REQUEST,
    createOdontologyRequest: CREATE_ODONTOLOGY_REQUEST,
    updateOdontologyRequest: UPDATE_ODONTOLOGY_REQUEST,
    deleteOdontologyRequest: DELETE_ODONTOLOGY_REQUEST,
    createGynecologyRequest: CREATE_GYNECOLOGY_REQUEST,
    updateGynecologyRequest: UPDATE_GYNECOLOGY_REQUEST,
    deleteGynecologyRequest: DELETE_GYNECOLOGY_REQUEST,
    createPsychiatryRequest: CREATE_PSYCHIATRY_REQUEST,
    updatePsychiatryRequest: UPDATE_PSYCHIATRY_REQUEST,
    deletePsychiatryRequest: DELETE_PSYCHIATRY_REQUEST,
    createPediatricsRequest: CREATE_PEDIATRICS_REQUEST,
    updatePediatricsRequest: UPDATE_PEDIATRICS_REQUEST,
    deletePediatricsRequest: DELETE_PEDIATRICS_REQUEST,
    createOptometryRequest: CREATE_OPTOMETRY_REQUEST,
    updateOptometryRequest: UPDATE_OPTOMETRY_REQUEST,
    deleteOptometryRequest: DELETE_OPTOMETRY_REQUEST,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
