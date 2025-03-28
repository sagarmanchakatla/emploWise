import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthState, LoginCredential } from "../types/Auth";
import { authServices } from "../services/reqres";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }: LoginCredential, { rejectWithValue }) => {
    try {
      const response = await authServices.login(email, password);
      localStorage.setItem("token", response.token);
      return response.token;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    isAuthenticated: !!localStorage.getItem("token"),
    loading: false,
    error: null,
  } as AuthState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.token = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.isAuthenticated = false;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
