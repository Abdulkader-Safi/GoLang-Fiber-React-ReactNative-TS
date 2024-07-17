export type User = {
  id: number;
  name: string;
  email: string;
};

export type UserRegister = {
  name: string;
  email: string;
  password: string;
};

export type UserLogin = {
  email: string;
  password: string;
};
