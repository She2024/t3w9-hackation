import Home from './pages/Home';
import './App.css';
import {
    BrowserRouter as Router,
    Routes, 
    Route
} from 'react-router-dom';

const App = () => {
    return (
        <storeProvider>
          <Router>
            <Navbar/>
            <Routes>
              <Route path= "/" element={<Home/>} />
            </Routes>
          </Router>
        </storeProvider>
    );
}

export default App;