var numbers = [46, 65, 85, 853, 523, 958]

// Map: Create new array by doing something with each item in array

function double(x) {
    return x * 2
}

console.log(numbers.map(double))

// Filter: Create new array by filtering items returning true

function lessThanHundred(x) {
    return x < 100
}

console.log(numbers.filter(lessThanHundred))

// Reduce: Accumulate value by doing something to each item in array


function accumulate(accumulatedValue, current) {
    return accumulatedValue + current
}

console.log(numbers.reduce(accumulate))

// Find: Find first value matching condition in array

function moreThanHundred(x) {
    return x > 100
}

console.log(numbers.find(moreThanHundred))


// FindIndex: Find index of first item that matches

function moreThanHundred(x) {
    return x > 100
}

console.log(numbers.findIndex(moreThanHundred))


console.log(
numbers.findIndex(function(x) {
    return x > 100
})
)

console.log(
    numbers.findIndex(x => {
        return x > 100
    })
    )

console.log(
    numbers.findIndex(x => x * x)
    )

console.log(
    numbers.findIndex((x) => {
        return x > 100
    })
    )