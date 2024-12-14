import Home from './pages/Home';
import './App.css';
import {
    BrowserRouter as Router,
    Routes, 
    Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Create from './create/Create';

const App = () => {
    return (
        <storeProvider>
          <Router>
            <Navbar/>
            <Routes>
              <Route path= "/" element={<Home />} />
              <Route path= "/create" element={<Create />} />


            </Routes>
          </Router>
        </storeProvider>
    );
}

export default App;