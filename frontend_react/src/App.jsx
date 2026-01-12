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
      <nav className="bg-blue-500 p-4 text-white">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/auth" className="mr-4">Login/Signup</Link>
        <Link to="/dashboard" className="mr-4">Dashboard</Link>
        <Link to="/add-item" className="mr-4">Add Item</Link>
        <Link to="/add-accommodation" className="mr-4">Add Accommodation</Link>
        <Link to="/search" className="mr-4">Search</Link>
        <Link to="/chatbot" className="mr-4">Chatbot</Link>
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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
