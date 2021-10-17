export const arr = []

export function parseObj(obj){
    for (let [key, value] of Object.entries(obj)){
        typeof value !== 'object'? arr.push([key, value]) : parseObj(value)
    }
}