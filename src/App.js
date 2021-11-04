import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './pages/Dashboard.js';
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          {/* Redirects to user Dashboard on project launch */}
					<Route exact path='/'>
						<Redirect to='/user/12' />
					</Route>
					<Route path='/user/:id' component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
