
// NOTE! Pay close attention to creating code with good and consistent code style.

// 1. Write a normal function that takes in two numbers and *returns* the sum of those numbers.

function sum(a,b){
    return a+b
}


// 2. Write a normal function that takes in a string and *returns* that string capitalized.

function capitilize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// 3. Write a normal function that takes in an array and *returns* the last item in that array.

function last_item(array){
    return lastItem = array[array.length - 1]
}

// 4. Write an arrow function that takes in an array and *returns* the first item in that array.

const first_item= (array)=>array[0]

// 5. Write an arrow function that takes in a string and *returns* the last three characters of that string.

const last_three = (string)=>string.slice(string.length -3)

// 6. Write an arrow function that takes in an array and *returns* the type of the first item in that array.

const type_of = (array)=>typeof(array[0])

// 7. Write an arrow function that takes in an array and *returns* true, if all items in that array have the same type.

const myarray=[1,2,3,4,5,"Haus"]

const myarray2=[1,2,3,4,5,6]
const is_type = (currentValue) => typeof(currentValue) === typeof(myarray[0]);
const type_check = (array)=>array.every(is_type)
console.log(type_check(myarray))
console.log(type_check(myarray2))

// 8. Print the `type` of a variable that has a normal function value.
console.log(typeof(last_item))
// 9. Print the `type` of a variable that has an arrow function value.
console.log(type_of(type_check))
// 10. Write and test a function that takes in two parameters (min and max). That function should return another function that doesn't take in any parameters, 
// but returns a random number between min and max. Effectively your "outer" function is a factory that creates customized random number generator functions.

function create_minmax (min,max){
    if (min>max){
        let helper=min
        min=max
        max=helper
    }
    let generator= max-min
    return function(){
        return Math.round(Math.random()*generator)+min
    }
}
const generator = create_minmax(5,10)
console.log(generator())

// 11. In your own words, explain what are side effects and what is a pure function.

//Itis an indirect and unintendet change in our programm.
//pure functions do not produce side effects and always give the same result when giving the same arguments.

// 12. In your own words, explain what is the difference between functions and methods.

//methods are functions inside classes