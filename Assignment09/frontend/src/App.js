import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import JobListings from './pages/JobListings';
import CompanyShowcase from './pages/CompanyShowcase';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/jobs" component={JobListings} />
                <Route path="/companies" component={CompanyShowcase} />
            </Switch>
        </Router>
    );
}

export default App;
