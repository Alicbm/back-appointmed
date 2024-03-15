import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";

export const BaseGeneralType = new GraphQLObjectType({
  name: 'base_medicine', 
  fields: {
    id: { type: GraphQLString },
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
  }
})