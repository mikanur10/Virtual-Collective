import api from "./apiConfig";

export const getUsers = async () => {
  try {
    const response = await api.get("/users");
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (id) => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (user) => {
  try {
    const response = await api.post("/users", user);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id, user) => {
  try {
    const response = await api.put(`/users/${id}`, user);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await api.delete(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (userInfo) => {
  try {
    const response = await api.post("/login", userInfo);
    return response.data;
  } catch (error) {
    throw error;
  }
};
