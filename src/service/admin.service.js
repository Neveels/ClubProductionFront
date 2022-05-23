import axios from "axios";
import AuthService from "./auth.service";

class AdminService {
  ban(id) {
    const token = AuthService.getCurrentToken();
    return axios
      .post("http://localhost:8086/admin/user/ban/" + id, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(response);
      });
  }

  getUsers() {
    const USERS_REST_API_URL = "http://localhost:8086/admin/users";
    return axios.get(USERS_REST_API_URL);
  }
}

export default new AdminService();
