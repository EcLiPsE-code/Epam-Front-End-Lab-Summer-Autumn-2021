const test = [1, 2, 3, 4, 5]

function oneDimensionalOperation(arr){
    return arr.map((value, index, array) => {
        return index === 0? arr[index + 1]
            : index === arr.length - 1? array[index - 1] : array[index - 1] + array[index + 1]
    })
}

console.log(oneDimensionalOperation(test))