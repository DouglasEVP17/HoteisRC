import React, { useState, useEffect } from 'react';

const ClientForm = ({ addClient, selectedClient, updateClient, clearSelection }) => {
  const [client, setClient] = useState({ name: '', email: '' });

  useEffect(() => {
    if (selectedClient) {
      setClient(selectedClient);
    } else {
      setClient({ name: '', email: '' });
    }
  }, [selectedClient]);

  const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedClient) {
      updateClient(client);
    } else {
      addClient(client);
    }
    clearSelection();
    setClient({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">Nome</label>
        <input
          type="text"
          name="name"
          value={client.name}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={client.email}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {selectedClient ? 'Atualizar' : 'Adicionar'}
      </button>
    </form>
  );
};

export default ClientForm;
