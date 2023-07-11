//Como declarar arrays? O id a ser referido para innerHTML é declarationOfArrays

var fruits = ["Maçã", "Laranja", "Manga"];
console.log(fruits);
document.getElementById("declarationOfArrays").innerHTML = fruits;

//Como obter a primeira fruta da lista

var firstFruit = fruits [0];
console.log(firstFruit);
document.getElementById("accessFirstElement").innerHTML = firstFruit;

//Como obter a segunda fruta da lista

var secondFruit = fruits[1];
console.log(secondFruit);
document.getElementById("accessSecondElement").innerHTML = secondFruit;

//Como obter a terceira fruta da lista


var thirdFruit = fruits[2];
console.log(thirdFruit);
document.getElementById("accessThirdElement").innerHTML = thirdFruit;

//Como obter o comprimento da lista

var lengthOfTheArray = fruits.length;
console.log(lengthOfTheArray);
document.getElementById("display_length_of_array").innerHTML = lengthOfTheArray;

//Como obter um loop através do Array

var arrayValue = "'";
for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
    arrayValue = arrayValue + fruits[i] + "<br>";
}
document.getElementById("loopTheArray").innerHTML = arrayValue;

//Como adicicionar um elemento no final da lista

fruits.push("Limão");
console.log(fruits);
document.getElementById("addElementAtTheEndOfArray").innerHTML = fruits;

//Como adicicionar mais elementos no final da lista

fruits.push("Cereja");
console.log(fruits);
document.getElementById("addMoreElementAtTheEndOfArray").innerHTML = fruits;


//Declarar mais um array

var alphabets = ["l", "a", "e", "j", "b", "g", "f", "h", "c", "d", "i", "k"];
console.log(alphabets);
document.getElementById("displayAlphabetsArray").innerHTML = alphabets;

//Como organizar as letras do alfabeto

alphabets.sort();
console.log(alphabets);
document.getElementById("displaySortAlphabetArray").innerHTML = alphabets;

//Como reverter as letras do alfabeto

alphabets.reverse();
console.log(alphabets);
document.getElementById("displayReverseArray").innerHTML = alphabets;

//Como fazer um Array com números

var numbers = [45, 4, 9, 16, 25];
console.log(numbers);
document.getElementById("displayNumberArray").innerHTML = numbers;

//Como encontrar o maior número do Array

var maximumNumber = Math.max.apply(Math, numbers);
console.log(maximumNumber);
document.getElementById("displayMaximumNumber").innerHTML = maximumNumber;

//Como encontrar o menor número do Array

var minimumNumber = Math.min.apply(Math, numbers);
console.log(minimumNumber);
document.getElementById("displayMinimumNumber").innerHTML = minimumNumber;













