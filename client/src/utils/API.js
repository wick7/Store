import axios from "axios";

export default {
  // Gets all books
  getProducts: function() {
    return axios.get("/api/items");
  },
  getProduct: function(id) {
    return axios.get("/api/items/item/" + id);
  },
  saveCart: function(id) {
    console.log(id)
    return axios.get("/api/items/" + id, {withCredentials: true});
  },
  getSess: function() {
    return axios.get("/api/items/cart");
  }
};
