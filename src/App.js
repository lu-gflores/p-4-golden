import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Story from './pages/Story'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/story' component={Story} />
      </Router>
    </div>
  );
}

export default App;
