import React, { useState, useEffect } from 'react';

const SearchResults = () => {
  const [items, setItems] = useState([]);
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    fetch('/api/items').then(res => res.json()).then(setItems).catch(() => {});
    fetch('/api/accommodations').then(res => res.json()).then(setAccommodations).catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Search Results</h1>
          <p className="text-gray-600">Browse all available items and accommodations</p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Academic Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.length > 0 ? items.map(item => (
              <div key={item[0]} className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6">
                <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Item Image</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item[2]}</h3>
                <p className="text-gray-600 mb-3">{item[3]}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">${item[5]}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item[7] === 'new' ? 'bg-green-100 text-green-800' :
                    item[7] === 'used' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {item[7]}
                  </span>
                </div>
                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition duration-200">
                  View Details
                </button>
              </div>
            )) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No items found.</p>
              </div>
            )}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Accommodations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accommodations.length > 0 ? accommodations.map(acc => (
              <div key={acc[0]} className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6">
                <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Accommodation Image</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{acc[2]}</h3>
                <p className="text-gray-600 mb-3">{acc[3]}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">${acc[4]}/month</span>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition duration-200">
                    View Details
                  </button>
                </div>
              </div>
            )) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No accommodations found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;