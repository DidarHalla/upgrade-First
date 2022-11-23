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
    const container = document.getElementById('container')
    const sneakersDad = document.getElementById('sneakersDad')
    const sneakersChild = document.createElement('div')
    const pictureSneakers = document.createElement('img')
    const pictureHeart = document.createElement('img')
    const pictureRedHeart = document.createElement('img')
    const pPrice = document.createElement('p')
    const pName = document.createElement('p')
    const pType = document.createElement('p')
   

    container.style.display = 'flex'
    container.style.justifyContent = 'center'
    container.style.marginTop = '70px'

    sneakersDad.append(sneakersChild)
    sneakersDad.style.display = 'flex'
    sneakersDad.style.justifyContent = 'center'
    sneakersDad.style.maxWidth ='900px'
    sneakersDad.style.minWidth ='300px'
    sneakersDad.style.flexWrap = 'wrap'
    sneakersDad.style.className = 'sneakersDad'

    sneakersChild.style.margin = '10px'
    sneakersChild.style.position = 'relative'
    sneakersChild.className = 'sneakersChild'
    sneakersChild.append(pictureSneakers)
    sneakersChild.append(pictureHeart)
    sneakersChild.append(pPrice)
    sneakersChild.append(pName)
    sneakersChild.append(pType)

    pictureSneakers.className = 'pictureSneakers'
    pictureSneakers.src = sneaker.image

    pictureHeart.src = 'icon-heart.svg'
    pictureHeart.style.position = 'absolute'
    pictureHeart.style.top = '8px'
    pictureHeart.style.right = '10px'
    pictureHeart.className = 'pictureHeart'

    pictureRedHeart.src = 'red-heart.svg'
    pictureRedHeart.className = 'pictureRedHeart'

    pPrice.append(sneaker.price)
    pPrice.id = 'textUnderShoes'
    pPrice.className = 'pPrice'
    pPrice.style.fontFamily = 'impact, fantasy'
    pPrice.style.marginTop = '0px'
    pPrice.style.marginLeft = '10px'

    pName.append(sneaker.name)
    pName.id = 'textUnderShoes'
    pName.className = 'pName'
    pName.style.margin = '0px'
    pName.style.fontFamily = 'DejaVu Sans Mono, monospace'
    pName.style.marginLeft = '10px'

    pType.append(sneaker.type)
    pType.id = 'textUnderShoes'
    pType.className = 'pType'
    pType.style.margin = '0px'
    pType.style.fontFamily = 'DejaVu Sans Mono, monospace'
    pType.style.marginLeft = '10px'

   
})

// console.log(coso);



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

