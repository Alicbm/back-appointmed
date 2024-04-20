import {
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLString,
} from "graphql";
import { LoginType } from "../typeDefs/LoginType";
import { Login } from "../../types";
import { UserEntity } from "../../entities/User.entity";
import { sign, verify } from 'jsonwebtoken';
import connectDB from "../db";
import bcrypt from 'bcrypt'
import boom from '@hapi/boom'

const userSource = connectDB.getRepository(UserEntity);

const JWT_SECRET = 'tu_secreto_secreto';

export async function generateToken(userId: string): Promise<string> {
  return sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
}

export const LOGIN = {
  type: LoginType,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },

  async resolve(_: any, args: Login) {
    const findUserEmail = await userSource.findOne({
      where: { email: args.email }
    })

    if(!findUserEmail){
      //user no encontrado
      throw boom.notFound()
    }

    const isMath = await bcrypt.compare(args.password, findUserEmail.password)

    if(!isMath){
      //user no autorizado
      throw boom.unauthorized()
    }

    const result = {
      user: {
        id: findUserEmail.id,
        name: findUserEmail.name,
        email: findUserEmail.email,
        createdAt: findUserEmail.createdAt,
        role: findUserEmail.role,
      },
      accessToken: generateToken(findUserEmail.id)
    };

    return {...result}

  },
};