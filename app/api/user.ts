import api from './index';

type Endpoints = {
  getUsers: () => Promise<APISchema.User[]>;
  createUser: (user: { name: string; email: string }) => Promise<APISchema.User>;
  updateUser: (id: number, user: { name: string; email: string }) => Promise<APISchema.User>;
  deleteUser: (id: number) => Promise<void>;
};

const endpoints: Endpoints = {
  getUsers: async () => {
    return await api('users');
  },
  createUser: async (user) => {
    return await api('users', {
      method: 'post',
      data: user,
    });
  },
  updateUser: async (id, user) => {
    return await api(`users/${id}`, {
      method: 'put',
      data: user,
    });
  },
  deleteUser: async (id) => {
    return await api(`users/${id}`, {
      method: 'delete',
    });
  },
};

export default endpoints;
