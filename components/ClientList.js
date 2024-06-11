import React from 'react';
import ClientItem from './ClientItem';

const ClientList = ({ clients, deleteClient, selectClient }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {clients.map(client => (
        <ClientItem
          key={client.id}
          client={client}
          deleteClient={deleteClient}
          selectClient={selectClient}
        />
      ))}
    </div>
  );
};

export default ClientList;
