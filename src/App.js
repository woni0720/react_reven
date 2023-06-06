import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './main';

// This is App component
const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
