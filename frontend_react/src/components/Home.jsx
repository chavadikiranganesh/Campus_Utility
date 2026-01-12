import React, { useState, useEffect } from 'react';

const Home = () => {
  const [items, setItems] = useState([]);
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    // Fetch featured items and accommodations
    fetch('/api/items').then(res => res.json()).then(data => setItems(data.slice(0, 3)));
    fetch('/api/accommodations').then(res => res.json()).then(data => setAccommodations(data.slice(0, 3)));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Campus Utility</h1>
      <div className="mb-4">
        <input type="text" placeholder="Search items or accommodations" className="w-full p-2 border" />
        <button className="mt-2 bg-blue-500 text-white p-2">Search</button>
      </div>
      <div>
        <h2 className="text-2xl mb-2">Featured Items</h2>
        <div className="grid grid-cols-3 gap-4">
          {items.map(item => (
            <div key={item[0]} className="border p-4">
              <h3>{item[1]}</h3>
              <p>{item[2]}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl mb-2">Featured Accommodations</h2>
        <div className="grid grid-cols-3 gap-4">
          {accommodations.map(acc => (
            <div key={acc[0]} className="border p-4">
              <h3>{acc[1]}</h3>
              <p>{acc[2]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;