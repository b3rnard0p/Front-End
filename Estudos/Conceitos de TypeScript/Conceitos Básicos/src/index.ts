//Tipos de variáveis
let ages: number = 5;
const firstname: string = "Bernardo";
const isValid: boolean = true;
let idk: any = 5; //Pode ser qualquer coisa

//Listas
const ids: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, false, true];
const names: string[] = ["Bernardo", "Ana"];

//Tupla
const person: [number, string] = [1, "Jane"];

//Lista de tuplas
const people: [number, string][] = [
  [1, "Jane"],
  [2, "Doe"],
];

//Intersections
const productId: string | number | boolean = false;

// Enum
enum Direction {
  Up = 1,
  Down = 2,
  Left = "Esquerda",
}

const direction = Direction.Up;
console.log(direction);

//Type Assertions
const productName: any = "Boné";

//let itemId = productName as string;
let itemId = <string>productName;
