console.log('working');
const menutwo = document.getElementById('menutwo')
const componentstwo = document.getElementById('componentstwo')
const cruztwo = document.getElementById('cruztwo')

function tightentwo() {
    console.log('work');
    menutwo.style.display = 'none'
    cruztwo.style.display = 'flex'
    componentstwo.style.display = 'flex'
    componentstwo.style.flexDirection = 'column'
    componentstwo.style.position = 'absolute'
    componentstwo.style.right = '0'
    componentstwo.style.top = '50px'
}

function touchtwo() {
    console.log('testing');
    cruztwo.style.display = 'none'
    menutwo.style.display = 'flex'
    componentstwo.style.display = 'none'
}

function tightenthree() {
    console.log('testingtwo');
}

componentstwo.addEventListener('click', tightenthree)
menutwo.addEventListener('click', tightentwo)
cruztwo.addEventListener('click', touchtwo)
