import {
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLString,
} from "graphql";
import { BaseGeneralType } from "../typeDefs/BaseGeneralType";
import { BaseGeneralIT } from "../../types";
import { PediatricsEntity } from "../../entities/Pediatrics.entity";
import connectDB from "../db";

const pediatricsSource = connectDB.getRepository(PediatricsEntity);

export const CREATE_PEDIATRICS_REQUEST = {
  type: BaseGeneralType,
  args: {
    typeService: { type: GraphQLString },
    registryNumber: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    eps: { type: GraphQLString },
    department: { type: GraphQLString },
    city: { type: GraphQLString },
    medicalCenter: { type: GraphQLString },
    date: { type: GraphQLString },
    hour: { type: GraphQLString },
    doctor: { type: GraphQLString },
    patientStatus: { type: GraphQLString },
    status: { type: GraphQLString },
  },
  async resolve(_: any, args: BaseGeneralIT) {
    const result = {
      typeService:args.typeService,
      registryNumber:args.registryNumber,
      firstName:args.firstName,
      lastName:args.lastName,
      email:args.email,
      eps:args.eps,
      department: args.department,
      city:args.city,
      medicalCenter:args.medicalCenter,
      date:args.date,
      hour: args.hour,
      doctor:args.doctor,
      patientStatus:args.patientStatus,
      status:args.status,
    };

    const sendData = await pediatricsSource.insert(result)

    return { id: sendData.identifiers[0].id, ...result };
  },
};

export const UPDATE_PEDIATRICS_REQUEST = {
  type: BaseGeneralType,
  args: {
    id: { type: GraphQLString },
    input: {
      type: new GraphQLInputObjectType({
        name: "PediatricsInput",
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
    const findRequest = await pediatricsSource.findOne({
      where: { id },
    });

    if (!id) {
      return "Id is required";
    } else {
      if (!!findRequest) {
        const response = await pediatricsSource.update(
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

export const DELETE_PEDIATRICS_REQUEST = {
  type: GraphQLString,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(_: any, { id }) {
    await pediatricsSource.delete(id);
    return `Request with id: ${id} deleted succesfully.`;
  },
};