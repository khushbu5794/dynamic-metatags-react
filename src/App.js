import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Shopping = React.lazy(() => import('./components/Shopping'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  return (
    <React.Suspense>
      <Router>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/shopping/7'>Shopping</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
          <hr />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/shopping/:id' element={<Shopping/>} />
          <Route path='/contact' element={<Contact/>} />
          </Routes>
        </div>
      </Router>
    </React.Suspense>
  );
}

export default App;
