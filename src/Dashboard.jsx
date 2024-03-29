
// Dashboard.jsx
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import Header from './component/Header';
import Table from './component/Table';
import Add from './component/Add';
import Edit from './component/Edit';

import { employeesData } from '../src/data/index';

const Dashboard = ({ setIsAuthenticated }) => {
  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees_data'));
    if (storedEmployees) {
      setEmployees(storedEmployees);
    }
  }, []);

  const handleEdit = id => {
    const employeeToEdit = employees.find(employee => employee.id === id);
    setSelectedEmployee(employeeToEdit);
    setIsEditing(true);
  };

  const handleDelete = id => {
    const updatedEmployees = employees.filter(employee => employee.id !== id);
    setEmployees(updatedEmployees);
    localStorage.setItem('employees_data', JSON.stringify(updatedEmployees));
    Swal.fire({
      icon: 'success',
      title: 'Deleted!',
      text: 'Employee data has been deleted.',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleAdd = newEmployee => {
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    localStorage.setItem('employees_data', JSON.stringify(updatedEmployees));
    setIsAdding(false);
    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: 'Employee data has been added.',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding}
            setIsAuthenticated={setIsAuthenticated}
          />
          <Table
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
          employees={employees}
          setEmployees={setEmployees}
          setIsAdding={setIsAdding}
          handleAdd={handleAdd}
        />
      )}
      {isEditing && (
        <Edit
          employees={employees}
          selectedEmployee={selectedEmployee}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Dashboard;
