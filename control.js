window.onload = function () {
    let stars = document.getElementsByTagName('li')
    let j = 0
    while (j < 100) {
        let star = document.createElement('li')
        document.getElementsByTagName('ul')[0].appendChild(star)
        j++
    }
    for (let i = 0; i < stars.length; i++) {
        let beCircle = Math.floor(Math.random()*10) + 'px'
        stars[i].style.width = beCircle
        stars[i].style.height = beCircle
        stars[i].style.top = Math.floor(Math.random()*1500) + 'px'
        stars[i].style.left = Math.floor(Math.random()*1500) + 'px'
    }
}