import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from "./components/About";
import ListingDetail from "./components/ListingDetail";
import AllListings from './components/AllListings';

import './App.css'

const App = () => (
  <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/About" element={<About/>} />
        <Route exact path="/alllisting" element={<AllListings/>} />
        <Route exact path="/alllisting/:id" element={<ListingDetail/>} />
      </Routes>
  </BrowserRouter>
)
export default App