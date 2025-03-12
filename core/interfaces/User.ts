export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  birthday?: Date;
  password: string;
}
