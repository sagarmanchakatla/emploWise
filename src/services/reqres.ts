import axios from "axios";
import { User } from "../types/Users";
const BASE_URL = "https://reqres.in/api";

export const authServices = {
  login: async (email: string, password: string) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });
      return response.data;
    } catch (error: any) {
      console.log(error);
    }
  },
};

export const usersServices = {
  getUser: async (page = 1) => {
    try {
      const response = await axios.get(`${BASE_URL}/users`, {
        params: { page },
      });
      return response.data;
    } catch (error: any) {
      throw error.response?.data || new Error("Failed to fetch users");
    }
  },

  postUser: async (userData: Partial<User>) => {
    try {
      const response = await axios.post(`${BASE_URL}/users`, userData);
      return response.data;
    } catch (error: any) {
      throw error.response?.data || new Error("Failed to create user");
    }
  },

  updateUser: async (id: number, userData: Partial<User>) => {
    try {
      const response = await axios.put(`${BASE_URL}/users/${id}`, userData);
      return response.data;
    } catch (error: any) {
      throw error.response?.data || new Error("Failed to update user");
    }
  },

  deleteUser: async (id: number) => {
    try {
      const response = await axios.delete(`${BASE_URL}/users/${id}`);
      return response.data;
    } catch (error: any) {
      throw error.response?.data || new Error("Failed to delete user");
    }
  },
};
