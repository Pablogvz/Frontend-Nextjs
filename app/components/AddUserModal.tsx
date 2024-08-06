'use client'

import { Dispatch, SetStateAction } from 'react';
import UserForm from './UserForm';

interface AddUserModalProps {
  isOpen: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}

const AddUserModal = ({ isOpen, onClose }: AddUserModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add User</h2>
        <UserForm />
        <button
          onClick={() => onClose(false)}
          className="mt-4 bg-gray-500 text-white p-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AddUserModal;
