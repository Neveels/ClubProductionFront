import axios from "axios";

// const API_URL = `http://localhost:8086/api/auth/`;

class AuthService {
  login(user) {
    return (
      axios
        .post("http://localhost:8086/api/auth/signin", user)
        //then ожидает возращание с бека
        //если есть accessTolen != 0 заносим в storage для хранения
        .then((response) => {
          if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }
          return response.data;
        })
    );
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(user) {
    console.log(user);
    return axios.post("http://localhost:8086/api/auth/signup", user);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
