let a = true;
let b = true;

console.log(a && b); //false
console.log(a || b); //true

let age = 22;

if (age >= 20) {
  console.log("You are an adult.");
} else if (age >= 13) {
  console.log("You are a teenager.");
} else {
  console.log("You are a child.");
}

let fruit = "banana";

switch (fruit) {
  case "apple":
    console.log("This is an apple.");
    break;
  case "banana":
    console.log("This is a banana.");
    break;
  case "orange":
    console.log("This is an orange.");
    break;
  default:
    console.log("Unknown fruit.");
}

const arr = [1, 2, 3, 4, 5];
arr.forEach(function (element) {
  console.log(element);
});
