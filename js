var name = "Vr";
var age = 1;
var city = "Hyd";

console.log(
  "My name is " +
    [name] +
    ", I am " +
    [age] +
    " years old, and I live in " +
    [city] +
    "."
);

temperature = 33;

if (temperature > 30) {
  console.log("Its too hot!");
}

function calculateArea(len, wid) {
  return len * wid;
}

console.log("Area : " + calculateArea(2, 3));

num1 = 6;
num2 = 5;
console.log("modulus " + (num1 % num2));

function getDayName(day) {
  if (
    day === "Monday" ||
    day === "Tuesday" ||
    day === "Wednesday" ||
    day === "Thrusday" ||
    day === "Friday"
  ) {
    return console.log("Its a weekday");
  } else if (day === "Saturday" || day === "Sunday") {
    return console.log("Its a weekend");
  }
}
getDayName("Wednesday");
getDayName("Saturday");

arra = ["mango", "pine", "grape", "orange"];

for (i = 0; i < arra.length; i++) {
  switch (arra[i]) {
    case "mango":
      console.log("1st");
      break;
    case "pine":
      console.log("2st");
      break;
    case "grape":
      console.log("3st");
      break;
    case "orange":
      console.log("4st");
      break;
    default:
      console.log("Bye");
  }
}

const square = (nm) => nm * nm;

console.log("square: " + square(5));

var array = [1, 2, 3, 4];

for (i = 0; i < array.length; i++) {
  console.log("array " + array[i] * 2);
}

const obj = {
  brand: "hyundai",
  model: "tuscon",
  year: 2022,
};
console.log("I drive a " + obj.year + obj.brand + obj.model + ".");
