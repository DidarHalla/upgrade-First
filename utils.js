
function removeThenAddContainer() {
    let getSneakersContainer = document.getElementById('sneakersContainer')
    getSneakersContainer.remove()

    let sneakersContainer = document.createElement('div')
    sneakersContainer.id = 'sneakersContainer'
    sneakersContainer.className = 'sneakersContainer'

    let getContainer = document.getElementById('container')
    getContainer.append(sneakersContainer)

    let sortingByCategory = document.getElementById('sortingByCategory')
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

function getRandomDate(start = new Date(2018, 0, 1), end = new Date()) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
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



export { removeThenAddContainer, sort, getRandomDate, compareInAscending, compareInDescending, sortByNew }