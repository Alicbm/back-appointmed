import {
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLString,
} from "graphql";
import { UserType } from "../typeDefs/UserType";
import { BaseGeneralIT, UserIT } from "../../types";
import { UserEntity } from "../../entities/User.entity";
import bcrypt from 'bcrypt'
import boom from '@hapi/boom'
import connectDB from "../db";

const userSource = connectDB.getRepository(UserEntity);

export const CREATE_USER = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    role: { type: GraphQLString }
  },
  async resolve(_: any, args: UserIT) {
    const findUserEmail = await userSource.findOne({
      where: { email: args.email }
    })

    if (findUserEmail) {
      return boom.badData("Ya existe un usuario son este email, intenta con otro")
    }

    const hashedPassword = await bcrypt.hash(args.password, 10)

    const result = {
      name: args.name,
      email: args.email,
      password: hashedPassword,
      createdAt: args.createdAt,
      role: args.role
    };

    const sendData = await userSource.insert(result)

    return { id: sendData.identifiers[0].id, ...result };
  },
};

export const UPDATE_USER = {
  type: UserType,
  args: {
    email: { type: GraphQLString },
    input: {
      type: new GraphQLInputObjectType({
        name: "UserInput",
        fields: {
          name: { type: GraphQLString },
          email: { type: GraphQLString },
          password: { type: GraphQLString },
          createdAt: { type: GraphQLString },
          role: { type: GraphQLString }
        },
      }),
    },
  },

  async resolve(_: any, { email, input }) {
    const findRequest = await userSource.findOne({
      where: { email },
    });

    if (!email) {
      return "Email is required";
    } else {
      if (!!findRequest) {
        const response = await userSource.update(
          { email },
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

export const DELETE_USER = {
  type: GraphQLString,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(_: any, { id }) {
    await userSource.delete(id);
    return `Request with id: ${id} deleted succesfully.`;
  },
};
