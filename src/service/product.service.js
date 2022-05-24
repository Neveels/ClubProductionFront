import axios from "axios";
const PRODUCT_REST_API_URL = "http://localhost:8086/products/allProduct";

class ProductService {
  getProducts() {
    return axios.get(PRODUCT_REST_API_URL);
  }

  addProduct(product) {
    return axios
      .post("http://localhost:8086/products/create", product)
      .then((res) => console.log(res.data));
  }

  deleteById(id) {
    return axios.delete("http://localhost:8086/products/delete" + id);
  }
}

export default new ProductService();
