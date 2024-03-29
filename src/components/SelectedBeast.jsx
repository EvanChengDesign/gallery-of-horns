import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';


const SelectedBeast = ({ beast, show, handleClose }) => {
    console.log(beast);
  if (!beast) return null; 

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{beast.title}</Modal.Title> 
      </Modal.Header>
      <Modal.Body>
        <img src={beast.image_url} alt={beast.title} style={{ width: '100%' }} />
        <p>{beast.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
    
      </Modal.Footer>
    </Modal>
  );
};

SelectedBeast.propTypes = {
    beast: PropTypes.shape({
      title: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
  };
  

export default SelectedBeast;
