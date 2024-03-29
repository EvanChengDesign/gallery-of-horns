import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import SelectedBeast from './components/SelectedBeast';
import './index.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import beasts from './components/data.json';
import FilterHornedBeasts from './components/FilterHornBeasts';

function App() {

  const [selectedBeast, setSelectedBeast] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [hornFilter, setHornFilter] = useState('');

  const handleBeastClick = (beast) => {
    console.log(beast);
    setSelectedBeast(beast)
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleFilterChange = (selectedHorns) => {
    setHornFilter(selectedHorns);
  };

  let filteredBeasts;
  if (hornFilter === '') {
    filteredBeasts = beasts;

  } else {

    filteredBeasts = beasts.filter(function(beast) {
      return beast.horns.toString() === hornFilter;
    });
  }

    return (
    <div className="main-container">
      <Header />
      <FilterHornedBeasts onFilterChange={handleFilterChange} />
      <Gallery beasts={filteredBeasts} onBeastClick={handleBeastClick} />
      <SelectedBeast beast={selectedBeast} show={showModal} handleClose={handleClose} />
      <Footer />
    </div>
  );
}

export default App;