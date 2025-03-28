import type React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

// Components
import Login from "./components/Login";
import UserList from "./components/UserList";
import EditUser from "./components/EditUser";
import { ThemeProvider } from "./components/theme-provider";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const token = localStorage.getItem("token");
  return token ? <>{children}</> : <Navigate to="/" replace />;
};

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <Provider store={store}>
        <Router>
          <Header />
          <div className="min-h-screen bg-background ">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/users"
                element={
                  <ProtectedRoute>
                    <UserList />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/edit/:id"
                element={
                  <ProtectedRoute>
                    <EditUser />
                  </ProtectedRoute>
                }
              />
              {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
            </Routes>
          </div>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
