import React from 'react';

const ClientItem = ({ client, deleteClient, selectClient }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex justify-between items-center">
      <div>
        <h3 className="text-xl font-semibold">{client.name}</h3>
        <p>{client.email}</p>
      </div>
      <div>
        <button onClick={() => selectClient(client)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">
          Editar
        </button>
        <button onClick={() => deleteClient(client.id)} className="bg-red-500 text-white px-2 py-1 rounded">
          Excluir
        </button>
      </div>
    </div>
  );
};

export default ClientItem;
