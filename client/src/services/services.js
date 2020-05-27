import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";

export default {
  async getAllProducts() {
    try {
      const data = await axios.get("/products");
      console.log("data", data);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },

  async getProductsById(id) {
    try {
      const data = await axios.get(`/products/${id}`);
      //console.log("data", data);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },

  async createProduct(obj) {
    try {
      const data = await axios.post("/products/", obj);
      //console.log("data", data);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },

  async updateProduct(obj, id) {
    try {
      const data = await axios.put(`/products/${id}`, obj);
      //console.log("data", data);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },

  async deleteProduct(id) {
    try {
      const data = await axios.delete(`/products/${id}`);
      //console.log("data", data);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
};
