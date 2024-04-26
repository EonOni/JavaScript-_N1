
// ОБЪЯВЛЕНИЕ 

/*
3 + 2
'Dare'
console.log("Hello world");

 
const Boruto = 25;

console.log(Boruto);

*/
// ССЫЛКИ

/*
const objectA = {
    a: 10,
    b: true
}

console.log(objectA);

const copyOfA = objectA;

copyOfA.a = 20;
*/

// ОБъЕКТЫ


/*
const myCity = {
    city: "New York"
}

myCity.popular = true;

console.log(myCity);

delete myCity.popular;           // УДАЛЕНИЕ 

console.log(myCity);

*/


            // JSON
/*

const post = {
    title: 'My Post',
    likesQty: 6
}
console.log(post)

JSON.stringify(post)
console.log(post)
*/


        // МУТИРОВАНИЕ

        /*
const person = {
    name: 'Bob',
    age: 24
}

const person2 = person;

person2.age = 26;
person2.isAdult = true;

console.log(person2);
console.log(person.age);

const person3 = Object.assign({}, person);

person2.age = 32;

console.log(person3.age);
console.log(person.age);

*/

        // передача данных с одного объекта в другой

/*
const person = {
    name: "Bob",
    age: 32
}

const person2 = JSON.parse(JSON.stringify(person));

person2.name = "Alisa";

console.log(person.name);
console.log(person2.name);
*/

        // Функций


/*
let a = 3;
let b = 2;

let cAnswer= myFn(a, b);

function myFn(a, b)
{
    let c;
    a = a + 1;
    c = a + b;
    return c;
}


console.log(cAnswer)

*/


        // создавай копий когда хочешь изменить функцию

/*
const personOne = {
    name: 'Bob',
    age: 21
}

function increasePersonAge (person)
{
    const updatedPerson = Object.assign({}, person);
    updatedPerson.age += 1;
    return updatedPerson;
}

const updatedPersonOne = increasePersonAge(personOne);
console.log(personOne.age);
console.log(updatedPersonOne.age)

*/


        // Вызов функций внутри фунций

/*
function printMyName() {
    console.log('Dar')
}   
setTimeout(printMyName, 1000)
*/

        // Область видимости

/*
let a;
let b;

function myFn()
{
    let b;
    a = true;
    b = 10;
    console.log(b);
}

myFn();

console.log(a);
console.log(b);
*/


        // 
/*

const buttom = {
    width: 200,
    text: 'Buy'
}

const redButton = {
    ...buttom,
    color: 'red'
}


buttom.width = 250;

console.table(redButton);

*/
            // Типы.Шаблонные строки


/*

const greeting = `${'Меня зовут'} ${'Я живу в городе'}`;

console.log(greeting);
*/


            // функ. выражения - стрелоч. функций

            /*
setTimeout(() => {
    console.log('Отложенное сообщение')
}, 1000);
        */


/*
const post = {
    id: 1,
    author: 'Dar'
}

const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt
})

newPost(post)

console.table(newPost(post))

*/


/*
const fnWithError = () => {
    throw new Error ('Some error')
}

// fnWithError()

console.log('Continue...')

*/


        // Массивы


        /*
const myArray = [1, true , 'Dar']

console.log(myArray)
console.log(myArray.length)
        */


/*
const myArray = [1, 2, 3]
console.log(myArray);

const newArray = myArray.map((el) => {return el * 3 });

console.log(newArray);
console.log(myArray);

*/

/*

const userProfile = {
    name: 'Dar',
    commentsQty: 23,
    hasSigned: false,
}

const {name , commentsQty} = userProfile;

console.log(commentsQty);

*/


/*
const userDota = {
    name: 'Kunkka',
    loseTime: 1000,
    canWin: false,
}

const importNews = ({ name, loseTime}) => {
    if(!loseTime){
    return console.log(`Your hero not ${name} you can win`)
    }

    return console.log(`Your hero is ${name} you have ${loseTime} , please change Hero...`)
}

importNews(userDota);

*/


        // if else

/*
const age = 17;

if ( age >= 18) {
    console.log('is adult');

else if(age >= 12 && age < 18 ) 

    console.log('is tenegeer');

else
    console.log('child');

    */

/*
const sumPossitiveNumber = (a, b) => {
    if(typeof a !== 'number' || typeof b !== 'number')
    {
        return 'Some argument it is number';
    }
    if (a <= 0 || b <= 0) {
        return "It's not positive number";
    }

    return a + b;
}

sumPossitiveNumber(5, 0);р
console.log(sumPossitiveNumber);
*/

        // ЦИКЛЫ
/*

const myArray = ['apple', 'orange', 'banana'];

myArray.forEach((element, index) => {
    console.log(element);
})

*/


        // МОДУЛИ
/*
import printMyName from './Second_Pr.js'

printMyName()
*/


        // Классы

        /*

class Comment {
    constructor(text){
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }

    static mergeComments(first, second) {
        return '${first} ${second}'
    }
}



const firstComment = new Comment ('First comment')
const secondComment = new Comment ('Second comment')

firstComment.upvote()
secondComment.upvote()
secondComment.upvote()

console.log(firstComment.votesQty)
console.log(secondComment.votesQty)

*/


        // ПРОМИСЫ

        /*
fetch('https://jsonplaceholder.typicode.com/todos/55')
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(json => console.log(json))
    .catch(error => console.error(error))

    */
            // асинхрон

    /*
   const asyncFn = async () => {
    return 'Success!'
   }

   asyncFn()
   */

 