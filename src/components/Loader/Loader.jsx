import React from 'react';
import { Spinner } from 'react-bootstrap';
import './style.css';

const Loader = () => <Spinner className="spinner" animation="border" variant="primary" size="lg" />;

export default Loader;