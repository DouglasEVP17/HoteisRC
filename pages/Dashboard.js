import React, { useState } from 'react';
import CheckInOut from '../components/CheckInOut';

const Dashboard = () => {
  const [clients, setClients] = useState([]);
  const [records, setRecords] = useState([]);

  const checkIn = (clientId, date) => {
    const record = { clientId, date, type: 'in' };
    setRecords([...records, record]);
  };

  const checkOut = (clientId, date) => {
    const record = { clientId, date, type: 'out' };
    setRecords([...records, record]);
  };

  return (
    <div className="p-4">
      <CheckInOut clients={clients} checkIn={checkIn} checkOut={checkOut} />
      <div className="mt-4">
        <h2 className="text-2xl font-bold">Registros</h2>
        <div className="mt-2 space-y-2">
          {records.map((record, index) => (
            <div key={index} className="p-4 border rounded">
              <p>Cliente ID: {record.clientId}</p>
              <p>Data: {record.date}</p>
              <p>Tipo: {record.type === 'in' ? 'Check-In' : 'Check-Out'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
