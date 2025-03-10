//Type
type Order = {
  productId: string;
  price: number;
};

type User = {
  firstName: string;
  age: number;
  email: string;
  password?: string;
  orders: Order[];
  register(): string;
};

const user: User = {
  firstName: "Jane",
  age: 20,
  email: "Jane@doe.com",
  password: "12345",
  orders: [{ productId: "1", price: 200 }],
  register() {
    return "a";
  },
};

user.password;

const printLog = (message?: string) => {};

printLog(user.password!);

type Grade = number | string;
const grade: Grade = 1;

//Unions
type Author = {
  books: string[];
};

const author: Author & User = {
  age: 2,
  books: ["1"],
  email: "author@gmail.com",
  firstName: "Bernardo",
  orders: [],
  register() {
    return "a";
  },
};

//Interfaces
interface UserIterface {
  firstName: string;
  emai: string;
  login(): string;
}

const emailuser: UserIterface = {
  emai: "Bernardo@gmail.com",
  firstName: "Bernardo",
  login() {
    return "a";
  },
};

interface AuthorInterface {
  books: string[];
}

const newAuthor: UserIterface & AuthorInterface = {
  emai: "Bernardo@gmail.com",
  firstName: "Bernardo",
  books: [],
  login() {
    return "a";
  },
};
