'use strict'
import { sneakersInfo } from "./cons.js"
import { removeThenAddContainer, sort, compareInAscending, compareInDescending, sortByNew } from "./utils.js"

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
    
        pictureHeart.addEventListener('click', function (event){
            let target = event.target
            if(!heart){
                target.src = 'red-heart.svg'
                heart = true
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
     case 'sortByRisingPrice':
        removeThenAddContainer()
        sortingByCategory.textContent = 'По возростанию цены'

        addSneakerCards(sort(sneakersInfo, compareInDescending))
       break;

     case 'sortByDownwardPrice':
        removeThenAddContainer()
        sortingByCategory.textContent = 'По убыванию цены'

        addSneakerCards(sort(sneakersInfo, compareInAscending))
     break;

     case 'sortByNewsItem':
        removeThenAddContainer()
        sortingByCategory.textContent = 'По новинкам'

        addSneakerCards(sort(sneakersInfo, sortByNew))
       break;

     default:
       alert( "Нет таких значений" );
    }
})

