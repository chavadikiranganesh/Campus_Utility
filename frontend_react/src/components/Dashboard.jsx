import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    // Assume user_id is 1 for demo
    fetch('/api/items').then(res => res.json()).then(data => setItems(data.filter(item => item[1] === 1))).catch(() => {});
    fetch('/api/accommodations').then(res => res.json()).then(data => setAccommodations(data.filter(acc => acc[1] === 1))).catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Manage your listings and account</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Items</h2>
            {items.length > 0 ? (
              <div className="space-y-4">
                {items.map(item => (
                  <div key={item[0]} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-900">{item[2]}</h3>
                      <p className="text-gray-600">${item[5]}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item[8] === 'available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {item[8]}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No items listed yet.</p>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Accommodations</h2>
            {accommodations.length > 0 ? (
              <div className="space-y-4">
                {accommodations.map(acc => (
                  <div key={acc[0]} className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900">{acc[2]}</h3>
                    <p className="text-gray-600">{acc[3]}</p>
                    <p className="text-lg font-semibold text-blue-600">${acc[4]}/month</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No accommodations listed yet.</p>
            )}
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-200">
              Add New Item
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition duration-200">
              Add Accommodation
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition duration-200">
              View Messages
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;