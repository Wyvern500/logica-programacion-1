//let input = prompt("Por favor ingrese tres numeros separados por comas");
let input = "4,2,8";

let processedInput = "";
for(let i in input) {
    let c = input.charAt(i);
    if(c !== " ") {
        processedInput += c;
    }
}

let originals = processedInput.split(",").map((v) => parseFloat(v));
let numbers = processedInput.split(",").map((v) => parseFloat(v)).sort((a, b) => a - b);

if(numbers.length > 3) {
    alert("El maximo de numeros debe ser 3");
}

let first = numbers[0];
let mid = numbers[1];
let last = numbers[2];

console.log("Numeros originales: " + originals);
console.log("Numeros ordenados: " + numbers);