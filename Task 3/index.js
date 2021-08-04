function addObjects(...arrObjects){
    
    const res = arrObjects.reduce((prev, item) => {
        Object.entries(item).forEach(([key, value]) => {
            prev.hasOwnProperty(key)? prev[key] += value : prev[key] = value
        })

        return prev
    }, {})

    console.log(res);
    return res
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