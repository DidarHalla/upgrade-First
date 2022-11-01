'use strict'


let sneakersInformation1 = {
    image: 'https://a.lmcdn.ru/img236x341/R/T/RTLABM929601_17356797_1_v1.jpg',
    type: 'sneakers',
    name: 'adidas',
    price: '79$',
}
let sneakersInformation2 = {
    image: 'https://a.lmcdn.ru/img236x341/R/T/RTLABQ520101_17717054_1_v1.jpg',
    type: 'sneakers',
    name: 'adidas',
    price: '94$',
}
let sneakersInformation3 = {
    image: 'https://a.lmcdn.ru/img236x341/A/D/AD093AUMOKG9_13279634_1_v1.jpg',
    type: 'sneakers',
    name: 'adidas',
    price: '88$',
}
let sneakersInformation4 = {
    image: 'https://a.lmcdn.ru/img236x341/R/T/RTLACB638801_18413347_1_v1_2x.jpg',
    type: 'sneakers',
    name: 'adidas',
    price: '99$',
}
let sneakersInformation5 = {
    image: 'https://a.lmcdn.ru/img236x341/R/T/RTLABX723401_17973506_1_v1.jpg',
    type: 'sneakers',
    name: 'adidas',
    price: '79$',
}
let sneakersInformation6 = {
    image: 'https://a.lmcdn.ru/img236x341/R/T/RTLAAX263202_17963357_1_v1.jpg',
    type: 'sneakers',
    name: 'adidas',
    price: '94$',
}
let sneakersInformation7 = {
    image: 'https://a.lmcdn.ru/img236x341/R/T/RTLABP405301_17739711_1_v1_2x.jpg',
    type: 'sneakers',
    name: 'adidas',
    price: '88$',
}
let sneakersInformation8 = {
    image: 'https://a.lmcdn.ru/img236x341/R/T/RTLABX877701_17875917_1_v3.jpg',
    type: 'sneakers',
    name: 'adidas',
    price: '99$',
}
let sneakersInformation9 = {
    image: 'https://a.lmcdn.ru/img236x341/R/T/RTLABK472901_17039311_1_v2.jpg',
    type: 'sneakers',
    name: 'adidas',
    price: '79$',
}
let sneakersInformation10 = {
    image: 'https://a.lmcdn.ru/img236x341/R/T/RTLABY543901_18046135_1_v1.jpg',
    type: 'sneakers',
    name: 'adidas',
    price: '94$',
}
let sneakersInformation11 = {
    image: 'https://a.lmcdn.ru/img236x341/R/T/RTLABP912201_17719185_1_v1_2x.jpg',
    type: 'sneakers',
    name: 'adidas',
    price: '88$',
}
let sneakersInformation12 = {
    image: 'https://a.lmcdn.ru/img236x341/R/T/RTLACA047201_18082402_1_v1_2x.jpg',
    type: 'sneakers',
    name: 'adidas',
    price: '99$',
}
let sneakersInformation13 = {
    image: 'https://a.lmcdn.ru/img236x341/R/T/RTLABM929601_17356797_1_v1.jpg',
    type: 'sneakers',
    name: 'adidas',
    price: '79$',
}
let sneakersInformation14 = {
    image: 'https://a.lmcdn.ru/img236x341/R/T/RTLABQ520101_17717054_1_v1.jpg',
    type: 'sneakers',
    name: 'adidas',
    price: '94$',
}
let sneakersInformation15 = {
    image: 'https://a.lmcdn.ru/img236x341/R/T/RTLAAX263202_17963357_1_v1.jpg',
    type: 'sneakers',
    name: 'adidas',
    price: '88$',
}
let sneakersInformation16 = {
    image: 'https://a.lmcdn.ru/img236x341/R/T/RTLABX723401_17973506_1_v1.jpg',
    type: 'sneakers',
    name: 'adidas',
    price: '79$',
}
let sneakersInformation17 = {
    image: 'https://a.lmcdn.ru/img236x341/A/D/AD093AUMOKG9_13279634_1_v1.jpg',
    type: 'sneakers',
    name: 'adidas',
    price: '94$',
}
let sneakersInformation18 = {
    image: 'https://a.lmcdn.ru/img236x341/R/T/RTLABK472901_17039311_1_v2.jpg',
    type: 'sneakers',
    name: 'adidas',
    price: '88$',
}
let sneakersInformation19 = {
    image: 'https://a.lmcdn.ru/img236x341/R/T/RTLABP912201_17719185_1_v1_2x.jpg',
    type: 'sneakers',
    name: 'adidas',
    price: '99$',
}
let sneakersInformation20 = {
    image: 'https://a.lmcdn.ru/img236x341/R/T/RTLABY543901_18046135_1_v1.jpg',
    type: 'sneakers',
    name: 'adidas',
    price: '99$',
}

let massAllSneakersInfo = [sneakersInformation1, sneakersInformation2, sneakersInformation3, sneakersInformation4, sneakersInformation5, sneakersInformation6, sneakersInformation7, sneakersInformation8, sneakersInformation9, sneakersInformation10, sneakersInformation11, sneakersInformation12, sneakersInformation13, sneakersInformation14, sneakersInformation15, sneakersInformation16, sneakersInformation17, sneakersInformation18, sneakersInformation19, sneakersInformation20]


let newMass = massAllSneakersInfo.forEach((sneaker) => {
    const divContainer = document.getElementById('container')
    const divDad = document.getElementById('divDad')
    const divChild = document.createElement('div')
    const imgSneakers = document.createElement('img')
    const imgHeart = document.createElement('img')
    const imgRedHeart = document.createElement('img')
    const pPrice = document.createElement('p')
    const pName = document.createElement('p')
    const pType = document.createElement('p')

    divContainer.append(divDad)

    divContainer.append(divDad)
    divContainer.style.display = 'flex'
    divContainer.style.justifyContent = 'center'
    divContainer.style.marginTop = '70px'

    divDad.append(divChild)
    divDad.style.display = 'flex'
    divDad.style.justifyContent = 'center'
    divDad.style.maxWidth ='900px'
    divDad.style.minWidth ='300px'
    divDad.style.flexWrap = 'wrap'

    divChild.style.margin = '10px'
    divChild.style.position = 'relative'
    divChild.className = 'divChild'
    divChild.append(imgSneakers)
    divChild.append(imgHeart)
    divChild.append(pPrice)
    divChild.append(pName)
    divChild.append(pType)

    imgSneakers.className = 'imgSneakers'
    imgSneakers.src = sneaker.image

    imgHeart.src = 'icon-heart.svg'
    imgHeart.style.position = 'absolute'
    imgHeart.style.top = '8px'
    imgHeart.style.right = '10px'
    imgHeart.className = 'imgHeart'

    imgRedHeart.src = 'red-heart.svg'
    imgRedHeart.className = 'imgRedHeart'

    pPrice.append(sneaker.price)
    pPrice.style.fontFamily = 'impact, fantasy'
    pPrice.style.marginTop = '0px'
    pPrice.style.marginLeft = '10px'

    pName.append(sneaker.name)
    pName.style.margin = '0px'
    pName.style.fontFamily = 'DejaVu Sans Mono, monospace'
    pName.style.marginLeft = '10px'

    pType.append(sneaker.type)
    pType.className = 'pType'
    pType.style.margin = '0px'
    pType.style.fontFamily = 'DejaVu Sans Mono, monospace'
    pType.style.marginLeft = '10px'


    divChild.addEventListener('click', function (event){
        const target = event.target.closest('.imgHeart');
        if(!target) return;
        target.src = 'red-heart.svg'
        target.className = '.imgRedHeart'
    })
    divChild.addEventListener('click', function (event){
        const target = event.target.closest('.imgRedHeart');
        if(!target) return;
        target.src = 'icon-heart.svg'
        target.className = '.imgHeart'
    })
})


