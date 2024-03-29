import React, { useState, useEffect } from 'react'; 
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import SelectedBeast from './components/SelectedBeast';
import './index.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import beastsData from './components/data.json'; 
import FilterHornedBeasts from './components/FilterHornBeasts';

function App() {
  const [selectedBeast, setSelectedBeast] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [hornFilter, setHornFilter] = useState('');
  const [beasts, setBeasts] = useState([]); 

  useEffect(() => {
    const beastsWithFavs = beastsData.map(beast => ({ 
      ...beast,
      favorites: 0 
    }));
    setBeasts(beastsWithFavs); 
  }, []);

  const handleBeastClick = (beast) => {
    setSelectedBeast(beast);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleFilterChange = (selectedHorns) => {
    setHornFilter(selectedHorns);
  };

  const handleFavorite = (_id) => {
    const updatedBeasts = beasts.map(beast => {
      if (beast._id === _id) { 
        return { ...beast, favorites: beast.favorites + 1 }; 
      }
      return beast; 
    });
    setBeasts(updatedBeasts);
  };


  let filteredBeasts = beasts; 
  if (hornFilter !== '') { 
    filteredBeasts = beasts.filter(beast => beast.horns.toString() === hornFilter);
  }

  return (
    <div className="main-container">
      <Header />
      <FilterHornedBeasts onFilterChange={handleFilterChange} />
      <Gallery beasts={filteredBeasts} onBeastClick={handleBeastClick} onFavorite={handleFavorite} />
      <SelectedBeast beast={selectedBeast} show={showModal} handleClose={handleClose} />
      <Footer />
    </div>
  );
}

export default App;