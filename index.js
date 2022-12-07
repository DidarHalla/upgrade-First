'use strict'

let globalKart = {}
let image = ['https://a.lmcdn.ru/img236x341/R/T/RTLABM929601_17356797_1_v1.jpg', 'https://a.lmcdn.ru/img236x341/R/T/RTLABQ520101_17717054_1_v1.jpg', 'https://a.lmcdn.ru/img236x341/A/D/AD093AUMOKG9_13279634_1_v1.jpg', 'https://a.lmcdn.ru/img236x341/R/T/RTLACB638801_18413347_1_v1_2x.jpg', 'https://a.lmcdn.ru/img236x341/R/T/RTLABX723401_17973506_1_v1.jpg', 'https://a.lmcdn.ru/img236x341/R/T/RTLAAX263202_17963357_1_v1.jpg', 'https://a.lmcdn.ru/img236x341/R/T/RTLABP405301_17739711_1_v1_2x.jpg', 'https://a.lmcdn.ru/img236x341/R/T/RTLABX877701_17875917_1_v3.jpg', 'https://a.lmcdn.ru/img236x341/R/T/RTLABK472901_17039311_1_v2.jpg', 'https://a.lmcdn.ru/img236x341/R/T/RTLABY543901_18046135_1_v1.jpg', 'https://a.lmcdn.ru/img236x341/R/T/RTLABP912201_17719185_1_v1_2x.jpg', 'https://a.lmcdn.ru/img236x341/R/T/RTLACA047201_18082402_1_v1_2x.jpg', 'https://a.lmcdn.ru/img236x341/R/T/RTLABM929601_17356797_1_v1.jpg', 'https://a.lmcdn.ru/img236x341/R/T/RTLABQ520101_17717054_1_v1.jpg', 'https://a.lmcdn.ru/img236x341/R/T/RTLAAX263202_17963357_1_v1.jpg', 'https://a.lmcdn.ru/img236x341/R/T/RTLABX723401_17973506_1_v1.jpg', 'https://a.lmcdn.ru/img236x341/A/D/AD093AUMOKG9_13279634_1_v1.jpg', 'https://a.lmcdn.ru/img236x341/R/T/RTLABK472901_17039311_1_v2.jpg', 'https://a.lmcdn.ru/img236x341/R/T/RTLABP912201_17719185_1_v1_2x.jpg', 'https://a.lmcdn.ru/img236x341/R/T/RTLABY543901_18046135_1_v1.jpg']
let type = ['sneakers', 'sneakers', 'sneakers', 'sneakers', 'sneakers', 'sneakers', 'sneakers', 'sneakers', 'sneakers', 'sneakers', 'sneakers', 'sneakers', 'sneakers', 'sneakers', 'sneakers', 'sneakers', 'sneakers', 'sneakers', 'sneakers', 'sneakers']
let name = ['adidas', 'adidas', 'adidas', 'adidas', 'adidas', 'adidas', 'adidas', 'adidas', 'adidas', 'adidas', 'adidas', 'adidas', 'adidas', 'adidas', 'adidas', 'adidas', 'adidas', 'adidas', 'adidas', 'adidas']
let price = ['79$', '94$', '88$', '99$', '79$', '94$', '88$', '99$', '79$', '94$', '88$', '99$', '79$', '94$', '88$', '79$', '94$', '88$', '99$', '99$']

price.forEach((v, i) => {
    globalKart['sneakersInformation' + String(i + 1)] = {
        image: image[i],
        type: type[i],
        name: name[i],
        price: price[i],
    }
})

let massAllSneakersInfo =  Object.values(globalKart)

let coso = massAllSneakersInfo.forEach((sneaker) => {
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

    sneakersPrice.append(sneaker.price)
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




let subMenu = document.getElementById('submenu')

submenu.style.display = 'none'
subMenu.style.width = '152px'
subMenu.style.boxShadow = '0px 8px 16px 0px rgba(0,0,0,0.2)'
subMenu.style.backgroundColor = '#f9f9f9'
subMenu.style.padding = '12px'
subMenu.style.listStyleType = 'none'
subMenu.style.position = 'absolute'


const theSizeWrapper = document.getElementById('theSizeWrapper')

theSizeWrapper.onmouseover = function(){
    subMenu.style.display = 'block'
    subMenu.style.marginTop = '0px'
}

theSizeWrapper.onmouseout = function(){
    subMenu.style.display = 'none'
}




const submenuSort = document.getElementById('submenu-sort')

submenuSort.addEventListener('mouseover', (ev) => {
    let tar = ev.target.closest('li')
    tar.className = 'itemDropMenu'
    tar.style.backgroundColor = '#e9e9e9'
    console.log(tar);
})
submenuSort.addEventListener('mouseout', (ev) => {
    let tar = ev.target.closest('li')
    tar.style.backgroundColor = ''
})
submenuSort.addEventListener('click', (ev) => {
    let tar = ev.target.textContent
    alert(tar);
})

