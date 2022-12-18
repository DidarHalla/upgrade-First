function sort(arr, func){
    let result = [...arr]
    for(let i = 0; i < result.length; i++){
        for(let j = 0; j < result.length - 1; j++){
            if(func(result[j], result[j + 1])){
                let temp = result [j]
                result [j] = result [j + 1]
                result [j + 1] = temp
            }
        }
    }
    return result
}
export { sort }