"use client"
import React from 'react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  price: number;
  planName: string;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, onConfirm, price, planName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Confirm Payment</h2>
        <p className="mb-4">You are about to purchase the <strong>{planName}</strong> plan for <strong>${price}</strong>.</p>
        <div className="flex justify-end space-x-4">
          <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            Cancel
          </button>
          <button onClick={onConfirm} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Confirm Payment
          </button>
        </div>
      </div>
    </div>
  );
};
