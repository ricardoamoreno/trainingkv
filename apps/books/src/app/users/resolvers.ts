const mockUser = {
  id: 1,
  firstName: 'Carlos',
  lastName: 'Ramirez',
  email: 'carlos.ramirez@wolox.com',
  password: 'akcjngad4f78a',
};

export const resolvers = {
  Query: {
    getUser: async (_, args) => {
      const { id } = args;
      return { ...mockUser, id };
    },
  },
};
