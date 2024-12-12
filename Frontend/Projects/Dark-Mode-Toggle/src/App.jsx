// src/App.jsx
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const App = () => {
    return (
        <ThemeProvider>
            <div className="App">
                <h1> Darkmode Toggle App</h1>
                <ThemeToggle />
                <p>This is a simple app demonstrating theme toggling or dark mode and light mode.</p>
            </div>
        </ThemeProvider>
    );
};

export default App;