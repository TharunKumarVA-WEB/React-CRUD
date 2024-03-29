

import React from 'react';
import Logout from './Logout';

const Header = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <header className="mb-4">
      <h1>Employee Management Software</h1>
      <div className="d-flex justify-content-between align-items-center mt-2">
        <button onClick={() => setIsAdding(true)} className="btn btn-primary">Add Employee</button>
        <Logout setIsAuthenticated={setIsAuthenticated} />
      </div>
    </header>
  );
};

export default Header;

