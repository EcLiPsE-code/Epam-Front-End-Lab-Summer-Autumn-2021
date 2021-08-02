function addObjects(...arrObjects){
    const resultObj = {}

    arrObjects.forEach(item => {
        for (let [key, value] of Object.entries(item)){
            if (!resultObj.hasOwnProperty(key)){
                resultObj[key] = value
            }
            else{
                resultObj[key] += value
            }
        }
    })
    
    console.log(resultObj)
    return resultObj
}

function findIntersectionObjects(...arrObjects){
    const resObj = {}
    const [firstObj, ...arr] = arrObjects

    for (let [key, value] of Object.entries(firstObj)){
        arr.forEach(obj => {
            if (obj.hasOwnProperty(key) && obj[key] === value){
                resObj[key] = value
            }
        })
    }

    console.log(resObj)
    return resObj
}

addObjects({a: 1, b: 2}, {a: 3, c: 5}, {a: 1, b: 2})
findIntersectionObjects({a: 1, b: 2}, {a: 3, c: 5}, {a: 1, b: 2})