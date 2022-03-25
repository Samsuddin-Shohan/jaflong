import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Route exact path={`/`}>
            <Home></Home>
        </Route>
         <Route path={`/home`}>
            <Home></Home>
         </Route>
         
      </BrowserRouter>    
    </div>
  );
}

export default App;
