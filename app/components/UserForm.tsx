'use client'

import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiRouter from '@/app/api/router';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      return await apiRouter.users.createUser({ name, email });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getUsers'] });
      setName(''); // Limpar campos após sucesso
      setEmail('');
    },
    onError: (error: Error) => {
      console.error("Error creating user:", error.message);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2"
        />
      </div>
      <div>
        <label htmlFor="email" className="block">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2">Add User</button>
    </form>
  );
};

export default UserForm;
