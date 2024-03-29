

import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Login = ({ setIsAuthenticated }) => {
  const adminEmail = 'admin@example.com';
  const adminPassword = 'qwerty';

  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('qwerty');

  const handleLogin = e => {
    e.preventDefault();

    if (email === adminEmail && password === adminPassword) {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          localStorage.setItem('is_authenticated', true);
          setIsAuthenticated(true);

          Swal.fire({
            icon: 'success',
            title: 'Successfully logged in!',
            showConfirmButton: false,
            timer: 1500,
          });
        },
      });
    } else {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Incorrect email or password.',
            showConfirmButton: true,
          });
        },
      });
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleLogin} className="mt-5">
            <h1 className="text-center mb-4">Admin Login</h1>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="admin@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="qwerty"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="form-control"
              />
            </div>
            <button style={{ marginTop: '12px' }} type="submit" className="btn btn-primary w-100">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
