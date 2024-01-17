export type Tuser = {
  id: string;
  email: string;
  contactNo: string;
  password: string;
  role: 'customer' | 'operator' | 'driver' | 'admin';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
};
