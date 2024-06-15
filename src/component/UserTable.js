import React from "react";
import PropTypes from "prop-types";

const UserTable = ({ header, data, handleLevelChange }) => {
  if (!header || !data) {
    return <div>Loading...</div>;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          {header.map((head, index) => (
            <th key={index}>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((user, index) => (
          <tr key={user._id}>
            <td>{index + 1}</td>
            <td>{user.email}</td>
            <td>{user.activityName}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>
              <select
                value={user.level}
                onChange={(e) => handleLevelChange(user._id, e.target.value)}
              >
                <option value="customer">Customer</option>
                <option value="admin">Admin</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

UserTable.propTypes = {
  header: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      activityName: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      level: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleLevelChange: PropTypes.func.isRequired,
};

export default UserTable;
