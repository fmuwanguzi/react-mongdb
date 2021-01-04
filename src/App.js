import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home'
import Workout from './components/Workout'
import Nav from './components/Nav'



import './App.css';

function App() {
  return (
    
    <BrowserRouter> 
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/workout" component={Workout} />
   
    </div>
    
    </BrowserRouter>
  );
}

export default App;
