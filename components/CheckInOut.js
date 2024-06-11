import React, { useState } from 'react';

const CheckInOut = ({ clients, checkIn, checkOut }) => {
  const [selectedClient, setSelectedClient] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e, action) => {
    e.preventDefault();
    if (action === 'in') {
      checkIn(selectedClient, date);
    } else {
      checkOut(selectedClient, date);
    }
    setSelectedClient('');
    setDate('');
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <form onSubmit={(e) => handleSubmit(e, 'in')} className="mb-4">
        <div className="mb-4">
          <label className="block text-gray-700">Selecionar Cliente</label>
          <select value={selectedClient} onChange={(e) => setSelectedClient(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded">
            <option value="" disabled>Selecione um cliente</option>
            {clients.map(client => (
              <option key={client.id} value={client.id}>{client.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Data de Check-In</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Check-In
        </button>
      </form>
      <form onSubmit={(e) => handleSubmit(e, 'out')}>
        <div className="mb-4">
          <label className="block text-gray-700">Selecionar Cliente</label>
          <select value={selectedClient} onChange={(e) => setSelectedClient(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded">
            <option value="" disabled>Selecione um cliente</option>
            {clients.map(client => (
              <option key={client.id} value={client.id}>{client.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Data de Check-Out</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">
          Check-Out
        </button>
      </form>
    </div>
  );
};

export default CheckInOut;
