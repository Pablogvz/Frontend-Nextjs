'use client'

import { Dispatch, SetStateAction } from 'react';
import UserEditForm from './UserEditForm';

interface EditUserModalProps {
  user: {
    id: number;
    name: string;
    email: string;
  };
  onClose: Dispatch<SetStateAction<null>>;
}

const EditUserModal = ({ user, onClose }: EditUserModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Edit User</h2>
        <UserEditForm user={user} />
        <button
          onClick={() => onClose(null)}
          className="mt-4 bg-gray-500 text-white p-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EditUserModal;
