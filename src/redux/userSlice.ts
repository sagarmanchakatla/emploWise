import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserState, User } from "../types/Users";
import { usersServices } from "../services/reqres";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (page: number = 1, { rejectWithValue }) => {
    try {
      const response = await usersServices.getUser(page);
      return {
        users: response.data,
        page: response.page,
        totalPages: response.total_pages,
      };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const postUser = createAsyncThunk(
  "users/postUser",
  async (userData: Partial<User>, { rejectWithValue }) => {
    try {
      const response = await usersServices.postUser(userData);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (
    { id, userData }: { id: number; userData: Partial<User> },
    { rejectWithValue }
  ) => {
    try {
      const response = await usersServices.updateUser(id, userData);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id: number, { rejectWithValue }) => {
    try {
      await usersServices.deleteUser(id);
      return id;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    totalPages: 0,
    currentPage: 1,
    loading: false,
    error: null,
  } as UserState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.users;
        state.currentPage = action.payload.page;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(postUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
        // state.currentPage = 1;
        // state.totalPages = 1;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.users.findIndex(
          (user) => user.id === action.payload.id
        );
        if (index !== -1) {
          state.users[index] = { ...state.users[index], ...action.payload };
        }
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
      });
  },
});

export default userSlice.reducer;
