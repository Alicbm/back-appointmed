import {
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLString,
} from "graphql";
import { MedicinaGeneralType } from "../typeDefs/GeneralMedicine.type";
import { CreateGeneralMedicineIN } from "../../types";
import { GeneralMedicineEntity } from "../../entities/GeneralMedicine.entity";
import { randomUUID } from "crypto";
import connectDB from "../db";

const generalMedicineSource = connectDB.getRepository(GeneralMedicineEntity);

export const CREATE_GENERAL_MEDICINE_REQUEST = {
  type: MedicinaGeneralType,
  args: {
    typeService: { type: GraphQLString },
    registryNumber: { type: GraphQLInt },
    firsName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    eps: { type: GraphQLString },
    departament: { type: GraphQLString },
    city: { type: GraphQLString },
    medicalCenter: { type: GraphQLString },
    date: { type: GraphQLString },
    hour: { type: GraphQLString },
    doctor: { type: GraphQLString },
    fileNumber: { type: GraphQLInt },
  },
  async resolve(_: any, args: CreateGeneralMedicineIN) {
    const result = await generalMedicineSource.insert({
      typeService: args.typeService,
      registryNumber: args.registryNumber,
      firsName: args.firsName,
      lastName: args.lastName,
      email: args.email,
      eps: args.eps,
      departament: args.departament,
      city: args.city,
      medicalCenter: args.medicalCenter,
      date: args.date,
      hour: args.hour,
      doctor: args.doctor,
      fileNumber: args.fileNumber,
    });

    return { id: result.identifiers[0].id, ...result };
  },
};

export const UPDATE_GENERAL_MEDICINE_REQUEST = {
  type: MedicinaGeneralType,
  args: {
    id: { type: GraphQLString },
    input: {
      type: new GraphQLInputObjectType({
        name: "GeneralMedicineInput",
        fields: {
          typeService: { type: GraphQLString },
          registryNumber: { type: GraphQLInt },
          firsName: { type: GraphQLString },
          lastName: { type: GraphQLString },
          email: { type: GraphQLString },
          eps: { type: GraphQLString },
          departament: { type: GraphQLString },
          city: { type: GraphQLString },
          medicalCenter: { type: GraphQLString },
          date: { type: GraphQLString },
          hour: { type: GraphQLString },
          doctor: { type: GraphQLString },
          fileNumber: { type: GraphQLInt },
        },
      }),
    },
  },

  async resolve(_: any, { id, input }) {
    const findRequest = await generalMedicineSource.findOne({
      where: { id },
    });

    if (!id) {
      return "Id is required";
    } else {
      if (!!findRequest) {
        const response = await generalMedicineSource.update(
          { id },
          {
            ...input,
          }
        );

        return "Your request update was succesfully";
      } else {
        return "Request not found";
      }
    }
  },
};

export const DELETE_GENERAL_MEDICINE_REQUEST = {
  type: GraphQLString,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(_: any, { id }) {
    await generalMedicineSource.delete(id);
    return `Request with id: ${id} deleted succesfully.`;
  },
};
