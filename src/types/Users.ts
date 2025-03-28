export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface UserState {
  users: User[];
  totalPages: number;
  currentPage: number;
  loading: boolean;
  error: string | null;
}
