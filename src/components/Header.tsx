import type React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/store";
import { logout } from "../redux/authSlice";
import { LogOut, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // Don't show header on login page
  if (location.pathname === "/") {
    return null;
  }

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl">
        <div className="flex items-center gap-4">
          <Users className="h-6 w-6 text-primary" />
          <div className="hidden sm:block">
            <h1 className="text-xl font-semibold">User Management</h1>
            <p className="text-xs text-muted-foreground">Manage your users</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="gap-2"
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
