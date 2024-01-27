export type Tlogin = {
  query: string;
  password: string;
};

export type TchangePassword = {
  oldPassword: string;
  newPassword: string;
};

export type TjwtPayLoad = {
  id: string;
  role: string;
  email: string;
};
