import React from "react";
import './index.css';  // Ensure this line exists in your main entry file.


function App() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg w-80">
                <h1 className="text-4xl font-semibold text-indigo-600 mb-4">Welcome to My Simple Webpage!</h1>
                <p className="text-lg text-gray-700">This is a basic webpage with no routing. Just a simple welcome message.</p>
            </div>
        </div>
    );
}

export default App;
