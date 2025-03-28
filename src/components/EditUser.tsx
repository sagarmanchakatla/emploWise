import type React from "react";
import { useState, useEffect, type FormEvent } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { updateUser } from "../redux/userSlice";
import { ArrowLeft, Loader2, Save, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";

const EditUser: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { users, loading } = useAppSelector((state) => state.users);
  const user = users.find((u) => u.id === Number(id));
  const { toast } = useToast();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (user) {
      setFirstName(user.first_name);
      setLastName(user.last_name);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (id) {
      setIsSubmitting(true);
      const result = await dispatch(
        updateUser({
          id: Number(id),
          userData: { first_name: firstName, last_name: lastName, email },
        })
      );
      setIsSubmitting(false);

      if (updateUser.fulfilled.match(result)) {
        toast({
          variant: "success",
          title: "User updated",
          description: `${firstName} ${lastName}'s information has been updated successfully.`,
        });
        navigate("/users");
      } else {
        toast({
          variant: "destructive",
          title: "Update failed",
          description:
            "There was an error updating the user. Please try again.",
        });
      }
    }
  };

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  if (!user) {
    return (
      <div className="container mx-auto p-4 flex items-center justify-center h-[calc(100vh-4rem)]">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="text-center">User Not Found</CardTitle>
          </CardHeader>
          <CardContent className="text-center text-muted-foreground">
            The requested user could not be found.
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button onClick={() => navigate("/users")} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Users
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-between items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/users")}
              className="gap-1"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </div>
          <div className="flex flex-col items-center pt-2">
            <Avatar className="h-20 w-20">
              <AvatarImage
                src={user.avatar}
                alt={`${user.first_name} ${user.last_name}`}
              />
              <AvatarFallback>
                {getInitials(user.first_name, user.last_name)}
              </AvatarFallback>
            </Avatar>
            <CardTitle className="mt-4">Edit User</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => navigate("/users")}
            className="gap-2"
          >
            <X className="h-4 w-4" />
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Updating...
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                Update User
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default EditUser;
