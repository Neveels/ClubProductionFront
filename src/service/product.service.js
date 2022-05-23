import axios from "axios";
const PRODUCT_REST_API_URL = "http://localhost:8086/products/allProduct";

class ProductService {
  getProducts() {
    return axios.get(PRODUCT_REST_API_URL);
  }
}

export default new ProductService();
