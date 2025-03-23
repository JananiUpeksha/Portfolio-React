import React from "react";
import './index.css';  // Ensure this line exists in your main entry file.
import NavbarMain from "./components/Navbar/NavbarMain";
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
    return (
        <Router>
            <main className="font-body text-white relative overflow-hidden">
                <NavbarMain/>
            </main>
        </Router>
    );
}

export default App;
