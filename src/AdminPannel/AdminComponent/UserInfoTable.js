import { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/UserInfoTable.css"; // Importing CSS file

const UserInfoTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("#");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="user-table-container">
      <h2>Registered Users</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Message Date</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name} {user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.message}</td>
              <td>{user.message_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserInfoTable;
