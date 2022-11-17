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


let newMass = massAllSneakersInfo.forEach((sneaker) => {
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
    pPrice.className = 'pPrice'
    pPrice.style.fontFamily = 'impact, fantasy'
    pPrice.style.marginTop = '0px'
    pPrice.style.marginLeft = '10px'

    pName.append(sneaker.name)
    pName.className = 'pName'
    pName.style.margin = '0px'
    pName.style.fontFamily = 'DejaVu Sans Mono, monospace'
    pName.style.marginLeft = '10px'

    pType.append(sneaker.type)
    pType.className = 'pType'
    pType.style.margin = '0px'
    pType.style.fontFamily = 'DejaVu Sans Mono, monospace'
    pType.style.marginLeft = '10px'

    let heart = 0

    sneakersChild.addEventListener('click', function (event){
        // console.log(heart % 2 == 1) // we can see how it's work in consol
        let svgArrey = ['red-heart.svg', 'icon-heart.svg']

        const target = event.target.closest('.pictureHeart');
        target.src = heart % 2 == 1 ? svgArrey[1] : svgArrey[0]

        heart = heart + 1

    })
})




















// let arr = [3434,4343,65544565,7656453,543546,4534,233,53454543,4353646,45343,435464,55]

// function findMax(arr){
//     let max = arr[0]
//     for(let num of arr){
//         if(max < num){
//             max = num
//         }
//     }
//     return max
// }


// console.log(findMax(arr));
