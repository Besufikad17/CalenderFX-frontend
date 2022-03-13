import React from 'react';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Forgot from './components/Forgot';
import Admin from './components/AdminParent';

class App extends React.Component {
  
  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <Routes>
            <Route path="/" element={ <Home/>}></Route>
            <Route path="/forgot" element={<Forgot/>}></Route>
            <Route path="/users" element={<Admin/>}></Route>
        </Routes>
      </div>
      
    )
  }
}

export default App;
