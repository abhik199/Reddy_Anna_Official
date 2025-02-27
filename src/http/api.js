import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

export const admin_login = (data) => api.post("/login", data);
export const admin_register = (data) => api.post("/register", data);

// export const add_cards = (data) => api.post("/cards", data);
// export const get_cards = (data) => api.get("/cards", data);
// export const remove_cards = (data) => api.delete("/cards/:id", data);

// Get Token from Local Storage
// const getAuthHeaders = () => {
//   const token = localStorage.getItem("token");
//   return token ? { Authorization: `Bearer ${token}` } : {};
// };

// Authenticated API Calls
// export const add_cards = (data) => api.post("/cards", data);
// export const get_cards = () => api.get("/cards");
// export const remove_cards = (id) => api.delete(`/cards/${id}`);

// export const add_slider = (data) => api.post("/sliders", data);
// export const get_slider = () => api.get("/sliders");
// export const remove_slider = (id) => api.delete(`/sliders/${id}`);

export const add_contact = (data) => api.post("/contact", data);
export const get_contact = () => api.get("/contact");
