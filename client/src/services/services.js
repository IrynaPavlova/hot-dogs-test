import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";

export default {
  async getAllProducts() {
    try {
      const data = await axios.get("/products");
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },

  async getProductsById(id) {
    try {
      const data = await axios.get(`/products/${id}`);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },

  async createProduct(obj) {
    try {
      const data = await axios.post("/products/", obj);
      return data.data.product;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },

  async updateProduct(obj, id) {
    try {
      const data = await axios.put(`/products/${id}`, obj);
      return data.data.product;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },

  async deleteProduct(id) {
    try {
      const data = await axios.delete(`/products/${id}`);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
};
