import React, { useState, useEffect } from 'react';

const Home = () => {
  const [items, setItems] = useState([]);
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    fetch('/api/items').then(res => res.json()).then(data => setItems(data.slice(0, 3))).catch(() => {});
    fetch('/api/accommodations').then(res => res.json()).then(data => setAccommodations(data.slice(0, 3))).catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome to Campus Utility</h1>
          <p className="text-xl text-gray-600 mb-8">Connecting students for resource sharing and accommodation assistance</p>
          <div className="flex justify-center space-x-4">
            <input
              type="text"
              placeholder="Search items or accommodations..."
              className="w-96 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Featured Sections */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Academic Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.length > 0 ? items.map(item => (
              <div key={item[0]} className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6">
                <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Item Image</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item[2]}</h3>
                <p className="text-gray-600 mb-3">{item[3]}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">${item[5]}</span>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium">
                    View Details
                  </button>
                </div>
              </div>
            )) : (
              <div className="col-span-3 text-center py-12">
                <p className="text-gray-500 text-lg">No items available yet. Be the first to list one!</p>
              </div>
            )}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Accommodations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accommodations.length > 0 ? accommodations.map(acc => (
              <div key={acc[0]} className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6">
                <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Accommodation Image</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{acc[2]}</h3>
                <p className="text-gray-600 mb-3">{acc[3]}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">${acc[4]}/month</span>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium">
                    View Details
                  </button>
                </div>
              </div>
            )) : (
              <div className="col-span-3 text-center py-12">
                <p className="text-gray-500 text-lg">No accommodations available yet. List yours today!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;