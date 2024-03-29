import React from 'react';
import { Form } from 'react-bootstrap';

const FilterHornedBeasts = ({ onFilterChange }) => {
    const handleChange = ( event ) => {
        onFilterChange(event.target.value);
    };

    return (
        <div className="filter-container">
            <Form>
                <Form.Group controlId="filterHorns">
                    <Form.Label>Filter by Number of Horns</Form.Label>
                    <Form.Control as="select" onChange={handleChange}>
                        <option value="">All</option>
                        <option value="1">1 Horn</option>
                        <option value="2">2 Horns</option>
                        <option value="3">3 Horns</option>
                        <option value="100">100 Horns</option>
                    </Form.Control>
                </Form.Group>
            </Form>
        </div>
  );
};

export default FilterHornedBeasts;
