

import React from 'react';

const Logout = ({ setIsAuthenticated }) => {
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('is_authenticated');
  };

  return (
    <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
  );
};

export default Logout;

