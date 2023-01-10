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

const submenuSort = document.getElementById('submenu-sort')

submenuSort.addEventListener('mouseover', (event) => {
    let target = event.target.closest('li')
    target.className = 'itemDropMenu'
    target.style.backgroundColor = '#e9e9e9'
})
submenuSort.addEventListener('mouseout', (event) => {
    let target = event.target.closest('li')
    target.style.backgroundColor = ''
})

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

        
        let max = 0
        let result
        for(let iterator of mapedfavoritSneakersEntrieses){
            let v = Object.entries(iterator)

            if (v [0][1] > max){
                max = v[0][1]

                result = iterator
            }
        }
        let resultValue = Object.values(result)
        let resultKeys = Object.keys(result)
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


