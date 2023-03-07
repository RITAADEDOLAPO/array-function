        //------------------QUESTION 1-------------------------
/**MUTATING ARRAY METHODS : Mutating methods are those that modify the array they are called on. If you call a mutating array method,
 * the array will be changed.
 * These methods add or remove elements from the array, or modify existing elements.
 * Examples of mutating array method include:
 * 1. pop()
 * 2. push()
 * 3. splice()
 * 4. shift()
 * 5. unshift()
 * 
 * NON-MUTATING ARRAY METHODS : Non-mutating methods are those that don’t modify the array they are called on.
 *  If you call a non-mutating array method, the original array will remain unchanged
 * Non-mutating methods are those that don’t modify the array they are called on. If you 
 * call a non-mutating array method, the original array will remain unchanged
 * Example of non-mutating array method include:
 * 1. reduce()
 * 2. map()
 * 3. find()
 * 4. filter()
 * 5. include()
*/




        //------------------QUESTION 2-------------------------
const languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
let kotlinLang = languages.push('Kotlin');
console.log(kotlinLang);
console.log(languages);

languages.splice(3, 0, 'Java')
console.log(languages);

languages.shift();
console.log(languages);

languages.unshift('Scala', 'Swift');
console.log(languages);

languages.splice(5, 1, 'Go', 'Rust');
console.log(languages);




        //------------------QUESTION 3-------------------------
        let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
let x = changeFruit(fruit);
console.log({x});
//the result of this will be ['apple', 'mango', 'orange']

        


        //------------------QUESTION 4------------------------
let arrayOfNumbers = [10, 20, 30, 40, 50, 60];
function numbers(arr) {
    return Math.max.apply(null, arr);
}
let result = numbers(arrayOfNumbers);
console.log({result});




        //------------------QUESTION 5------------------------
let values = [2, 4, 6, 8, 10]
function valTimesIndex(values) {
    return  values.map((values, index) => values * index);
}
console.log(valTimesIndex(values));