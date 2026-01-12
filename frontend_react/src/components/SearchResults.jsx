import React, { useState, useEffect } from 'react';

const SearchResults = () => {
  const [items, setItems] = useState([]);
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    fetch('/api/items').then(res => res.json()).then(setItems);
    fetch('/api/accommodations').then(res => res.json()).then(setAccommodations);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Search Results</h1>
      <div>
        <h2 className="text-2xl mb-2">Items</h2>
        <div className="grid grid-cols-3 gap-4">
          {items.map(item => (
            <div key={item[0]} className="border p-4">
              <h3>{item[2]}</h3>
              <p>{item[3]}</p>
              <p>Price: ${item[5]}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl mb-2">Accommodations</h2>
        <div className="grid grid-cols-3 gap-4">
          {accommodations.map(acc => (
            <div key={acc[0]} className="border p-4">
              <h3>{acc[2]}</h3>
              <p>{acc[3]}</p>
              <p>Rent: ${acc[4]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;