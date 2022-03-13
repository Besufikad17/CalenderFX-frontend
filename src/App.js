import React from 'react';
import Header from './components/Header';
import Home from './components/Home';

class App extends React.Component {
  
  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Home/>
      </div>
      
    )
  }
}

export default App;
