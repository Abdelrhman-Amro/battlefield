export interface IUserData {
  username: string;
  address: string;
  email: string;
  password: string;
}

export interface formData {
  label: string;
  type: string;
  name: keyof IUserData;
  id: string;
}
