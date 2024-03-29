



import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ employees, selectedEmployee, setEmployees, setIsEditing }) => {
  const [firstName, setFirstName] = useState(selectedEmployee.firstName);
  const [lastName, setLastName] = useState(selectedEmployee.lastName);
  const [email, setEmail] = useState(selectedEmployee.email);
  const [salary, setSalary] = useState(selectedEmployee.salary);
  const [date, setDate] = useState(selectedEmployee.date);

  useEffect(() => {
    setFirstName(selectedEmployee.firstName);
    setLastName(selectedEmployee.lastName);
    setEmail(selectedEmployee.email);
    setSalary(selectedEmployee.salary);
    setDate(selectedEmployee.date);
  }, [selectedEmployee]);

  const handleUpdate = e => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const updatedEmployee = {
      ...selectedEmployee,
      firstName,
      lastName,
      email,
      salary,
      date,
    };

    const updatedEmployees = employees.map(employee =>
      employee.id === selectedEmployee.id ? updatedEmployee : employee
    );

    localStorage.setItem('employees_data', JSON.stringify(updatedEmployees));
    setEmployees(updatedEmployees);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${updatedEmployee.firstName} ${updatedEmployee.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="form-container">
      <h2>Edit Employee</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
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
        <div className="mb-3">
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
        <div className="mb-3">
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
        <div className="mb-3">
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
        <div className="mb-3">
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
        <div className="row">
          <div className="col">
            <button type="submit" className="btn btn-primary">Update</button>
          </div>
          <div className="col">
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Edit;

