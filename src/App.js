import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Story from './pages/Story'
import './styles/AppStyles.css'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/story' component={Story} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
