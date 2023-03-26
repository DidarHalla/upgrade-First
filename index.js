'use strict'

import { sneakersInfo } from "./cons.js"
import { resetContainer, sort, compareInAscending, compareInDescending, sortByNew, popularSneaker, favoritSneakers } from "./utils.js"


function addSneakerCards(cardsInfo) {

    cardsInfo.forEach((sneaker) => {
        const sneakersContainer = document.getElementById('sneakersContainer')
        const sneakerItem = document.createElement('div')
        const pictureSneakers = document.createElement('img')
        const pictureHeart = document.createElement('img')
        const pictureRedHeart = document.createElement('img')
        const sneakersPrice = document.createElement('p')
        const sneakersName = document.createElement('p')
        const sneakersType = document.createElement('p')
    
        sneakersContainer.append(sneakerItem)
    
        sneakerItem.className = 'sneakerItem'
        sneakerItem.append(pictureSneakers)
        sneakerItem.append(pictureHeart)
        sneakerItem.append(sneakersPrice)
        sneakerItem.append(sneakersName)
        sneakerItem.append(sneakersType)
    
        pictureSneakers.className = 'pictureSneakers'
        pictureSneakers.alt = 'picture Sneakers'
        pictureSneakers.src = sneaker.image
    
        pictureHeart.className = 'pictureHeart'
        pictureHeart.src = 'icon-heart.svg'
    
        pictureRedHeart.src = 'red-heart.svg'
        pictureRedHeart.className = 'pictureRedHeart'
    
        sneakersPrice.append(sneaker.price + ' $')
        sneakersPrice.className = 'sneakersPrice'
    
        sneakersName.append(sneaker.name)
        sneakersName.className = 'itemDescription'
    
        sneakersType.append(sneaker.type)
        sneakersType.className = 'itemDescription'
    
        let heart = false

        let result = 0

        pictureHeart.addEventListener('click', function (event){
            let target = event.target
            if(!heart){
                target.src = 'red-heart.svg'
                heart = true

                popularSneaker[sneaker.id] = ++result

                const popularSneakersIds = Object.keys(popularSneaker);

                sneakersInfo.map((v) => {
                    let includesId = popularSneakersIds.includes(v.id)
                    if(includesId){
                        v['rating'] = popularSneaker[v.id]
                    }
                    return v
                })
            }else{
                target.src = 'icon-heart.svg'
                heart = false
            }
        })
    })
}
addSneakerCards(sneakersInfo)

function changeColorOverOut(val){
    //this function only accepts an object, it needs to be modified to accept an array as well.
    //this function changes the color of an element when hovering over it, and when moving the mouse away from the element returns the color as it was before.
    Object.values(val).map(v => {return v.addEventListener('mouseover', (v) => {v.target.style.backgroundColor = '#e9e9e9'})})
    Object.values(val).map(v => {return v.addEventListener('mouseout', (v) => {v.target.style.backgroundColor = ''})})
}

let getOverColor = document.querySelectorAll('.overColor')
changeColorOverOut(getOverColor)

const submenuSort = document.getElementById('submenu-sort')
submenuSort.addEventListener('click', (event) => {
    let target = event.target

    switch (target.id) {
     case 'sortByPopularity':
        sortingByCategory.textContent = 'По популярности'
        resetContainer()
        addSneakerCards(sneakersInfo)
        
        const popularSneakersIds = Object.keys(popularSneaker)
        sneakersInfo.map((v) => {
            let includesRating = popularSneakersIds.includes(v.id)
            if(includesRating){
                favoritSneakers[v.id] = v.rating
            }
            return v
        })
        let favoritSneakersEntrieses = Object.entries(favoritSneakers)
        let mapedfavoritSneakersEntrieses = favoritSneakersEntrieses.map((v) => {
            return {[v[0]]:v[1]}
        })

        
        function getResult(){
        let max = 0
        let result
        for(let iterator of mapedfavoritSneakersEntrieses){
            let v = Object.entries(iterator)
            console.log(v);
            if (v [0][1] > max){
                max = v[0][1]

                result = iterator
            }
        }
        return result
        }
        let resultValue = Object.values(getResult())
        let resultKeys = Object.keys(getResult())
        alert(resultKeys+ ' ' +resultValue)
        break;

     case 'sortByRisingPrice':
        resetContainer()
        sortingByCategory.textContent = 'По возростанию цены'

        addSneakerCards(sort(sneakersInfo, compareInDescending))

        break;

     case 'sortByDownwardPrice':
        resetContainer()
        sortingByCategory.textContent = 'По убыванию цены'

        addSneakerCards(sort(sneakersInfo, compareInAscending))
        break;

     case 'sortByNewsItem':
        resetContainer()
        sortingByCategory.textContent = 'По новинкам'

        addSneakerCards(sort(sneakersInfo, sortByNew))
        break;

     default:
       alert( "Нет таких значений" );
    }
})

let getSubmenu = document.querySelector('#submenu')

getSubmenu.addEventListener('click', function(ev) {
    resetContainer()
    addSneakerCards(sneakersInfo.filter((v) => (v.size == ev.target.textContent)))
})

