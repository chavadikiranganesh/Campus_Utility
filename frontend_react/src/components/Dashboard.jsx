import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    // Assume user_id is 1 for demo
    fetch('/api/items').then(res => res.json()).then(data => setItems(data.filter(item => item[1] === 1)));
    fetch('/api/accommodations').then(res => res.json()).then(data => setAccommodations(data.filter(acc => acc[1] === 1)));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div>
        <h2 className="text-2xl mb-2">My Items</h2>
        <ul>
          {items.map(item => <li key={item[0]}>{item[2]}</li>)}
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl mb-2">My Accommodations</h2>
        <ul>
          {accommodations.map(acc => <li key={acc[0]}>{acc[2]}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;