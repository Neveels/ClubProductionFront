import React from "react";
import cl from "./AdminBoard.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthService from "../../service/auth.service";

const AdminBoard = () => {
  const navigate = useNavigate();
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const USERS_REST_API_URL = "http://localhost:8086/admin/users";
    axios.get(USERS_REST_API_URL).then((resp) => {
      const allUsers = resp.data;
      console.log(allUsers);
      setUsers(allUsers);
    });
  }, []); //Вызывает это функцию только при первом Render AdminBoard

  const banUser = (id) => {
    const token = AuthService.getCurrentToken();
    axios
      .post("http://localhost:8086/admin/user/ban/" + id, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(response);
        // window.location.reload();
      });
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
            <th>Редактирование</th>
          </tr>
          {users.map((item) => (
            <tr>
              <th>{item.email}</th>
              <th>{item.phoneNumber}</th>
              <th>{item.active ? "true" : "false"}</th>
              <th>{item.roles}</th>
              <th>
                <button onClick={() => banUser(item.id)}>
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
