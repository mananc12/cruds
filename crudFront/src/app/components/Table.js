// components/Table.js
"use client";
import { useState } from "react";

const Table = ({ onSelect, refresh, data, onDelete, onUpdate }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const toggleRowSelection = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
    onSelect(selectedRows);
  };

  return (
    <table className="w-full table-auto border-collapse border border-gray-800">
      <thead>
        <tr className="bg-gray-200">
          <th className="py-2 px-4 border">
            <div>Select</div>
          </th>
          <th className="py-2 px-4 border">ID</th>
          <th className="py-2 px-4 border">Name</th>
          <th className="py-2 px-4 border">Phone Number</th>
          <th className="py-2 px-4 border">Email</th>
          <th className="py-2 px-4 border">Hobbies</th>
          <th className="py-2 px-4 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr
            key={row.userID}
            className={
              selectedRows.includes(row.userID)
                ? "bg-yellow-200"
                : "bg-gray-100"
            }
          >
            <td className="py-2 px-4 border text-center">
              <input
                type="checkbox"
                checked={selectedRows.includes(row.userID)}
                onChange={() => {
                  toggleRowSelection(row.userID);
                  onSelect([...selectedRows, row.userID]);
                }}
              />
            </td>
            <td className="py-2 px-4 border text-center">{row.userID}</td>
            <td className="py-2 px-4 border text-center">{row.name}</td>
            <td className="py-2 px-4 border text-center">{row.phone}</td>
            <td className="py-2 px-4 border text-center">{row.email}</td>
            <td className="py-2 px-4 border text-center">{row.hobby}</td>
            <td className="py-2 px-4 border text-center">
              <button
                onClick={() => {
                  onUpdate(row.userID);

                  refresh(true);
                }}
                className="mr-2 bg-green-500 text-white p-2 rounded"
              >
                Update
              </button>
              <button
                onClick={() => {
                  onDelete(row.userID);

                  refresh(true);
                }}
                className="bg-red-500 text-white p-2 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
