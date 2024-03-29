


import React from 'react';

const Table = ({ employees, handleEdit, handleDelete }) => {
  employees.forEach((employee, i) => {
    employee.id = i + 1;
  });

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: null,
  });

  return (
    <div className="contain-table">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Salary(₹)</th>
            <th scope="col">Date</th>
            <th scope="col" colSpan={2} className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee, i) => (
              <tr key={employee.id}>
                <th scope="row">{i + 1}</th>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.salary}</td>
                <td>{employee.date} </td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(employee.id)}
                    className="btn btn-primary btn-sm"
                    style={{ marginRight: '5px' }}
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="btn btn-danger btn-sm"
                    style={{ marginLeft: '5px' }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Employees</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
