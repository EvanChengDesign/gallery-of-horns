import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import SelectedBeast from './components/SelectedBeast';
import './index.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import beasts from './components/data.json';

function App() {

  const [selectedBeast, setSelectedBeast] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleBeastClick = (beast) => {
    console.log(beast);
    setSelectedBeast(beast);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);


  return (
    <div className="main-container">
      <Header />
      <Gallery beasts={beasts} onBeastClick={handleBeastClick} />
      <SelectedBeast beast={selectedBeast} show={showModal} handleClose={handleClose} />
      <Footer />
    </div>
  );
}

export default App;