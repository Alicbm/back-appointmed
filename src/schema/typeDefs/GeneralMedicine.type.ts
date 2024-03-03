import { GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";

export const MedicinaGeneralType = new GraphQLObjectType({
  name: 'general_medicine', 
  fields: {
    id: { type: GraphQLString },
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
    fileNumber: { type: GraphQLInt }
  }
})