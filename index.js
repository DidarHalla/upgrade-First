'use strict'


const sneakersInfo = [
    {
        image: 'https://a.lmcdn.ru/img236x341/R/T/RTLABM929601_17356797_1_v1.jpg',
        type: 'sneakers',
        name: 'adidas',
        price: 249,
    },
    {
        image: 'https://a.lmcdn.ru/img236x341/R/T/RTLABQ520101_17717054_1_v1.jpg',
        type: 'sneakers',
        name: 'adidas',
        price: 153,
    },
    {
        image: 'https://a.lmcdn.ru/img236x341/A/D/AD093AUMOKG9_13279634_1_v1.jpg',
        type: 'sneakers',
        name: 'adidas',
        price: 204,
    },
    {
        image: 'https://a.lmcdn.ru/img236x341/R/T/RTLACB638801_18413347_1_v1_2x.jpg',
        type: 'sneakers',
        name: 'adidas',
        price: 95,
    },
    {
        image: 'https://a.lmcdn.ru/img236x341/R/T/RTLABX723401_17973506_1_v1.jpg',
        type: 'sneakers',
        name: 'adidas',
        price: 249,
    },
    {
        image: 'https://a.lmcdn.ru/img236x341/R/T/RTLAAX263202_17963357_1_v1.jpg',
        type: 'sneakers',
        name: 'adidas',
        price: 53,
    },
    {
        image: 'https://a.lmcdn.ru/img236x341/R/T/RTLABP405301_17739711_1_v1_2x.jpg',
        type: 'sneakers',
        name: 'adidas',
        price: 389,
    },
    {
        image: 'https://a.lmcdn.ru/img236x341/R/T/RTLABX877701_17875917_1_v3.jpg',
        type: 'sneakers',
        name: 'adidas',
        price: 249,
    },
    {
        image: 'https://a.lmcdn.ru/img236x341/R/T/RTLABK472901_17039311_1_v2.jpg',
        type: 'sneakers',
        name: 'adidas',
        price: 454,
    },
    {
        image: 'https://a.lmcdn.ru/img236x341/R/T/RTLABY543901_18046135_1_v1.jpg',
        type: 'sneakers',
        name: 'adidas',
        price: 359,
    },
    {
        image: 'https://a.lmcdn.ru/img236x341/R/T/RTLABP912201_17719185_1_v1_2x.jpg',
        type: 'sneakers',
        name: 'adidas',
        price: 294,
    },
    {
        image: 'https://a.lmcdn.ru/img236x341/R/T/RTLACA047201_18082402_1_v1_2x.jpg',
        type: 'sneakers',
        name: 'adidas',
        price: 193,
    },
    {
        image: 'https://a.lmcdn.ru/img236x341/R/T/RTLABM929601_17356797_1_v1.jpg',
        type: 'sneakers',
        name: 'adidas',
        price: 15,
    },
    {
        image: 'https://a.lmcdn.ru/img236x341/R/T/RTLABQ520101_17717054_1_v1.jpg',
        type: 'sneakers',
        name: 'adidas',
        price: 134,
    },
    {
        image: 'https://a.lmcdn.ru/img236x341/R/T/RTLAAX263202_17963357_1_v1.jpg',
        type: 'sneakers',
        name: 'adidas',
        price: 174,
    },
    {
        image: 'https://a.lmcdn.ru/img236x341/R/T/RTLABX723401_17973506_1_v1.jpg',
        type: 'sneakers',
        name: 'adidas',
        price: 73,
    },
    {
        image: 'https://a.lmcdn.ru/img236x341/A/D/AD093AUMOKG9_13279634_1_v1.jpg',
        type: 'sneakers',
        name: 'adidas',
        price: 233,
    },
    {
        image: 'https://a.lmcdn.ru/img236x341/R/T/RTLABK472901_17039311_1_v2.jpg',
        type: 'sneakers',
        name: 'adidas',
        price: 104,
    },
    {
        image: 'https://a.lmcdn.ru/img236x341/R/T/RTLABP912201_17719185_1_v1_2x.jpg',
        type: 'sneakers',
        name: 'adidas',
        price: 254,
    },
    {
        image: 'https://a.lmcdn.ru/img236x341/R/T/RTLABY543901_18046135_1_v1.jpg',
        type: 'sneakers',
        name: 'adidas',
        price: 149,
    },
]



sneakersInfo.forEach((sneaker) => {
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
    sneakerItem.id = 'sneakerItem'
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
        let tar = event.target
        if(!heart){
            tar.src = 'red-heart.svg'
            heart = true
        }else{
            tar.src = 'icon-heart.svg'
            heart = false
        }
    })
})


const submenuSort = document.getElementById('submenu-sort')

submenuSort.addEventListener('mouseover', (ev) => {
    let tar = ev.target.closest('li')
    tar.className = 'itemDropMenu'
    tar.style.backgroundColor = '#e9e9e9'
})
submenuSort.addEventListener('mouseout', (ev) => {
    let tar = ev.target.closest('li')
    tar.style.backgroundColor = ''
})



submenuSort.addEventListener('click', (ev) => {
    let tar = ev.target

    if( tar.id === 'sortByRisingPrice'){
        let get = document.getElementById('sneakersContainer')
        get.remove()

        let sneakersContainer = document.createElement('div')
        sneakersContainer.id = 'sneakersContainer'
        sneakersContainer.className = 'sneakersContainer'

        let getContainer = document.getElementById('container')
        getContainer.append(sneakersContainer)


          sneakersInfo.forEach((sneaker) => {
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
            sneakerItem.id = 'sneakerItem'
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
            
            let changeType = Object.entries(sneaker)
         
            console.log(changeType.sort(function(a, b){return a - b}));

            sneakersPrice.append(sneaker.price + ' $')
            sneakersPrice.className = 'sneakersPrice'
        
            sneakersName.append(sneaker.name)
            sneakersName.className = 'itemDescription'
        
            sneakersType.append(sneaker.type)
            sneakersType.className = 'itemDescription'
        
            
            let heart = false
        
            pictureHeart.addEventListener('click', function (event){
                let tar = event.target
                if(!heart){
                    tar.src = 'red-heart.svg'
                    heart = true
                }else{
                    tar.src = 'icon-heart.svg'
                    heart = false
                }
            })
        })
                
    } else if(tar.id === 'sortByDownwardPrice'){
        console.log(sneakersInfo);
    }
})