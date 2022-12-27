
function resetContainer() {
    let getSneakersContainer = document.getElementById('sneakersContainer')
    getSneakersContainer.remove()

    let sneakersContainer = document.createElement('div')
    sneakersContainer.id = 'sneakersContainer'
    sneakersContainer.className = 'sneakersContainer'

    let getContainer = document.getElementById('container')
    getContainer.append(sneakersContainer)

}

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

function getRandomDate() {
    return new Date(Date.now()- Math.random()*100000000000)
}

function compareInDescending(a, b) {
    return a.price > b.price
}

function compareInAscending(a, b) {
    return a.price < b.price
}

function sortByNew(a, b) {
    return a.date < b.date
}

const popularSneaker = {}


export { resetContainer, sort, getRandomDate, compareInAscending, compareInDescending, sortByNew, popularSneaker }