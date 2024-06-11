import React, { useState } from 'react';
import ClientForm from '../components/ClientForm';
import ClientList from '../components/ClientList';

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);

  const addClient = (client) => {
    client.id = Date.now();
    setClients([...clients, client]);
  };

  const updateClient = (client) => {
    setClients(clients.map(c => c.id === client.id ? client : c));
    setSelectedClient(null);
  };

  const deleteClient = (id) => {
    setClients(clients.filter(c => c.id !== id));
  };

  const selectClient = (client) => {
    setSelectedClient(client);
  };

  const clearSelection = () => {
    setSelectedClient(null);
  };

  return (
    <div className="p-4 space-y-4">
      <ClientForm
        addClient={addClient}
        selectedClient={selectedClient}
        updateClient={updateClient}
        clearSelection={clearSelection}
      />
      <ClientList
        clients={clients}
        deleteClient={deleteClient}
        selectClient={selectClient}
      />
    </div>
  );
};

export default Clients;
