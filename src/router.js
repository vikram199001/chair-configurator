import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Header from './components/header';

const RouterIndex = () => {
    const RenderComponent = ({children}) => {
        return <div className='app'>
            <Header/>
            <div className='row m-0'>
                {children}
            </div>
        </div>
    }

    return <Router>
        <Routes>
            <Route path="/"  element={<RenderComponent><Home/></RenderComponent>} />
        </Routes>
    </Router>
}

export default RouterIndex;