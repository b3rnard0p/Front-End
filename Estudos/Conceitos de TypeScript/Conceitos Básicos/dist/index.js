"use strict";
//Tipos de variáveis
let ages = 5;
const firstname = "Bernardo";
const isValid = true;
let idk = 5; //Pode ser qualquer coisa
//Listas
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, true];
const names = ["Bernardo", "Ana"];
//Tupla
const person = [1, "Jane"];
//Lista de tuplas
const people = [
    [1, "Jane"],
    [2, "Doe"],
];
//Intersections
const productId = false;
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
const direction = Direction.Up;
console.log(direction);
