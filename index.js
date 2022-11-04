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

console.log(massAllSneakersInfo);
// console.log(Object.keys(massAllSneakersInfo));

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

    divContainer.style.display = 'flex'
    divContainer.style.justifyContent = 'center'
    divContainer.style.marginTop = '70px'

    divDad.append(divChild)
    divDad.style.display = 'flex'
    divDad.style.justifyContent = 'center'
    divDad.style.maxWidth ='900px'
    divDad.style.minWidth ='300px'
    divDad.style.flexWrap = 'wrap'
    divDad.style.className = 'divDad'

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

    let heart = 0

    divChild.addEventListener('click', function (event){
        // console.log(heart % 2 == 1) // we can see how it's work in consol
        let svgArrey = ['red-heart.svg', 'icon-heart.svg']

        const target = event.target.closest('.imgHeart');
        if(!target) return;
        target.src = heart % 2 == 1 ? svgArrey[0] : svgArrey[1]
        heart = heart + 1
    })
})


