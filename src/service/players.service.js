import axios from "axios";
const PLAYERS_REST_API_URL = "http://localhost:8086/player/allPlayers";

class PlayerService {
  getPlayers() {
    return axios.get(PLAYERS_REST_API_URL);
  }
}

export default new PlayerService();
