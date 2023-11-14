interface UserInterface {
  _id: string;
  first_name: string;
  last_name: string;
  password: string;
  email: string;
  age: number;
  address?: {
    city?: string;
    street?: string;
    number?: string;
  };
}

export default UserInterface;
