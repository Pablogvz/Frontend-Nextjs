'use client'

import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import apiRouter from '@/app/api/router';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserEditFormProps {
  user: User;
}

const UserEditForm = ({ user }: UserEditFormProps) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const mutation = useMutation({
    mutationFn: async () => {
      return await apiRouter.users.updateUser(user.id, { name, email });
    },
    onSuccess: () => {
      // Limpar campos ou atualizar estado se necessário
    },
    onError: (error: Error) => {
      console.error("Error updating user:", error.message);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="edit-name" className="block">Name:</label>
        <input
          id="edit-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2"
        />
      </div>
      <div>
        <label htmlFor="edit-email" className="block">Email:</label>
        <input
          id="edit-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2">Update User</button>
    </form>
  );
};

export default UserEditForm;
