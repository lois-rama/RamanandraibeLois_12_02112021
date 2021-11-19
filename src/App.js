import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './pages/Dashboard.js';
import Header from "./components/Header";
import Error404 from './pages/Error404.js';
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
					<Route exact path='/user/:id' component={Dashboard} />
          <Route path="/404" component={Error404}/>
          <Redirect to="/404" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
