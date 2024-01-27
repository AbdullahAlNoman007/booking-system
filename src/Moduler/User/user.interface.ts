export type Tuser = {
  id: string;
  email?: string;
  contactNo: string;
  password: string;
  role: 'customer' | 'operator' | 'driver' | 'admin' | 'moderator';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
};
