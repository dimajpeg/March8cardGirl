// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import FinalPage from './pages/FinalPage';
import './index.css';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/page2" element={<PageTwo />} />
                <Route path="/page3" element={<PageThree />} />
                <Route path="/final" element={<FinalPage />} />
            </Routes>
        </Router>
    );
}

export default App;