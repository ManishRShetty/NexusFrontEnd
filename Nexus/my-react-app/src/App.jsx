import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/home';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          {/* Add more routes here as needed */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;