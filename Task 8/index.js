const test = [1, 2, 3, 4, 5]
const test2 = [[1, 3], [4, 5, 6], [7, 8, 9]]

function oneDimensionalOperation(arr){
    return arr.map((value, index, array) => {
        return index === 0? arr[index + 1]
            : index === arr.length - 1? arr[index - 1] : arr[index - 1] + arr[index + 1]
    })
}
console.log(oneDimensionalOperation(test))
