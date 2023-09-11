// Sort an Array Alphabetically using the sort Method
// Sort array into alphabetic order
function alphabeticOrder(arr){
    return arr.sort()
}

alphabeticOrder(['a', 'd', 'c', 'a', 'z', 'g'])

// Return a Sorted Array Without Changing the Original Array
// sort array in ascending order, return new array not mutate
const globalArray = [5, 6, 3, 2, 9]

function nonMutatingSort(arr){

    return arr.slice().sort(function(a,b){
        return a - b
    })


}

nonMutatingSort(globalArray)

// Split a String into an Array using the split Method
// split the string into an array of words, no punctuation
function splitify(str){
return str.split(/\W/)

}

splitify("Hello World,I-am code")


// Combine an Array into a String Using the join Method
// use Join method (and others) to make a sentence from words in the string 
function sentensifiy(str){
    return str.split(/\W/).join(" ")
}


// Apply Ductional Programming to covert strings to URL Slugs
// converts string into hyphenated version for the URL
function urlSlug(title){
    return title.toLowerCase()
        .trim()
        .split(/\s+/)
        .join("-")


}

urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")

// Use the every Method to check that Every Element in the array meets a cirteria
// Returns a Boolean value of true if ALL values are true
// Use Every method to check array for positive
function checkPositive(arr){
    return arr.every(function(value){
        return value > 0
    })
}

checkPositive([1, 2, 3, -4, 5])


// Use the some Method to check that Any Element in an array meets a criteria
// returns Boolean if any value meets criteria, true, if none then false
// use some check positivity
function checkPositive(arr) {
    return arr.some(function(val){
        return val > 0
    })
}

checkPositive([1, 2, 3, -4, 5])

// Introduction to Currying and Partial Application
// arity -> number of arguments of a function
// Currying -> convert a function to take one arity then returns another function for next argument
// useful when all arguments to a function are not supplied at once
// Partial application -> returning another function that applies more arguments
// uses currying to add parameters x, y, and z
function add(x){
    return function(y){
        return function(z) {
            return x + y + z
        }
    }
}

add(10)(20)(30)


