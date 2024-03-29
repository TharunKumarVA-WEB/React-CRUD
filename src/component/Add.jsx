

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';

const Add = ({ employees, setEmployees, setIsAdding }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [date, setDate] = useState('');

  const handleAdd = e => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const id = employees.length + 1;
    const newEmployee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date,
    };

    const updatedEmployees = [...employees, newEmployee];
    localStorage.setItem('employees_data', JSON.stringify(updatedEmployees));
    setEmployees(updatedEmployees);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${firstName} ${lastName}'s data has been added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="form-container">
      <h2 className="mb-4">Add Employee</h2>
      <form onSubmit={handleAdd}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="salary" className="form-label">Salary (₹)</label>
            <input
              id="salary"
              type="number"
              name="salary"
              value={salary}
              onChange={e => setSalary(e.target.value)}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="date" className="form-label">Date</label>
            <input
              id="date"
              type="date"
              name="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">Add</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-grid gap-2">
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() => setIsAdding(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Add;
