'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiRouter from '@/app/api/router';

interface UserDeleteButtonProps {
  userId: number; 
}

const UserDeleteButton = ({ userId }: UserDeleteButtonProps) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      return await apiRouter.users.deleteUser(userId);
    },
    onSuccess: () => {
      // Certifique-se de que a chave da query é correta e consistente
      queryClient.invalidateQueries({ queryKey: ['getUsers'] });
    },
    onError: (error: Error) => {
      console.error("Error deleting user:", error.message);
    }
  });

  return (
    <button
      onClick={() => mutation.mutate()}
      className="bg-red-500 text-white p-2"
    >
      Delete
    </button>
  );
};

export default UserDeleteButton;
