import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import ItemListing from './components/ItemListing';
import AccommodationListing from './components/AccommodationListing';
import SearchResults from './components/SearchResults';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <Router>
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CU</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Campus Utility</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition duration-200">Home</Link>
              <Link to="/auth" className="text-gray-700 hover:text-blue-600 font-medium transition duration-200">Login</Link>
              <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 font-medium transition duration-200">Dashboard</Link>
              <Link to="/add-item" className="text-gray-700 hover:text-blue-600 font-medium transition duration-200">List Item</Link>
              <Link to="/add-accommodation" className="text-gray-700 hover:text-blue-600 font-medium transition duration-200">List Accommodation</Link>
              <Link to="/search" className="text-gray-700 hover:text-blue-600 font-medium transition duration-200">Search</Link>
              <Link to="/chatbot" className="text-gray-700 hover:text-blue-600 font-medium transition duration-200">Chatbot</Link>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-item" element={<ItemListing />} />
        <Route path="/add-accommodation" element={<AccommodationListing />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;
