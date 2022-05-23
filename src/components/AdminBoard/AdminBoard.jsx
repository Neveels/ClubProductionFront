import React from "react";
import cl from "./AdminBoard.module.css";
import { useNavigate } from "react-router-dom";
import AdminService from "../../service/admin.service";

const AdminBoard = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    AdminService.getUsers().then((resp) => {
      const allUsers = resp.data;
      setUsers(allUsers);
    });
  }, []);

  const banUser = (id) => {
    AdminService.ban(id);
  };

  return (
    <div className={cl.wrap}>
      <h1>Admin Board</h1>
      <div className={cl.wrapTable}>
        <table>
          <tr>
            <th>Email</th>
            <th>Номер телефона</th>
            <th>Активность</th>
            <th>Роли</th>
            <th>Бан</th>
          </tr>
          {users.map((item) => (
            <tr>
              <th>{item.email}</th>
              <th>{item.phoneNumber}</th>
              <th>{item.active ? "true" : "false"}</th>
              <th>{item.roles}</th>
              <th>
                <button
                  onClick={() => {
                    banUser(item.id);
                  }}
                >
                  <h3>{item.active ? "Бан" : "Разбан"}</h3>
                </button>
              </th>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AdminBoard;
