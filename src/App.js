import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import ImportedComponent from './components/ImportedComponent';

import kangarooPic from './images/kangaroo.jpeg'; 

function App() {
  return (
    <div className="App">
      <Header />
      
      <BrowserRouter basename="/web-final">
        <Routes>
          <Route exact path="/" element={ <Homepage /> } />
          <Route exact path="/write-html" element={
            <>
              <div className="question">
                Writing HTML is fun.  
                <br />
                Do you: 
              </div>
              <Link exact className="answer" to="/import-component">
                Link to a component you've imported
              </Link>
              <Link exact className="answer" to="/picture">
                Link to a jarring picture  
              </Link>
            </>
          } />
          <Route path="/import-component" element={ <ImportedComponent /> } />
          <Route path="/picture" element={
            <>
              <img className="picture" src={ kangarooPic } />
              You lose.
            </>
          } />
        </Routes>

        <Link className="link-home" to="/">
          Home
        </Link>
      </BrowserRouter>
    </div>
  );
}

export default App;