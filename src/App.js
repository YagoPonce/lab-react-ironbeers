import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Beers from './pages/Beers';
import BeerDetails from './pages/BeerDetails';
import Error from './pages/Error';
import NotFound from './pages/NotFound';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import axios from 'axios';

function App() {

  return (
    <div className="App">
   <Routes>

      <Route path="/" element={<Home />} />
    
      <Route path="/beers" element={<Beers />} />
  
      <Route path="/beers/:id" element={<BeerDetails /> } />
      <Route path="/random-beer" element={<RandomBeer />} />
      <Route path="/new-beer" element={<NewBeer />} />

      <Route parth="/error" element={<Error />} />
      <Route parth="*" element={<NotFound /> } />
    
   </Routes>


    </div>
  );
}

export default App;
