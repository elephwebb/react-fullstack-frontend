/**
 * App Component will be responsible for the routing of our application
 */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

/**
 * Dummy components
 * @returns {*}
 * @constructor
 */
const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>New Survey</h2>
const Landing = () => <h2>Landing Page</h2>

const App = () => {
 return(
    <div>
        <BrowserRouter>
            <div>
                <Header />
                <Route exact path="/" component={Landing} />
                <Route exact path="/surveys" component={Dashboard} />
                <Route path="/surveys/new" component={SurveyNew} />
            </div>
        </BrowserRouter>
    </div>
 );
};

export default App;