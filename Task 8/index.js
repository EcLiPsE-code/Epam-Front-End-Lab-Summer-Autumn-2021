const result = []

function multidimensionalOperation(array){
    return array.reduce((prevValue, value) => {
        Array.isArray(value)? multidimensionalOperation(value) : prevValue.push(value)
        return prevValue
    }, result).map((value, index, arr) => {
        return index === 0? arr[index + 1]
            : index === arr.length - 1? arr[index - 1] : arr[index - 1] + arr[index + 1]
    })
}

console.log(multidimensionalOperation([1, 2]))