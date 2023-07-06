console.log('workingtwo');
const menuthree = document.getElementById('menuthree')
const componentsthree = document.getElementById('componentsthree')
const cruzthree = document.getElementById('cruzthree')

function tightenthree() {
    console.log('worktwo');
    menuthree.style.display = 'none'
    cruzthree.style.display = 'flex'
    componentsthree.style.display = 'flex'
    componentsthree.style.flexDirection = 'column'
    componentsthree.style.position = 'absolute'
    componentsthree.style.right = '0'
    componentsthree.style.top = '50px'
}

function touchthree() {
    console.log('testing');
    cruzthree.style.display = 'none'
    menuthree.style.display = 'flex'
    componentsthree.style.display = 'none'
}

function tightenfour() {
    console.log('testingtwo');
}

componentsthree.addEventListener('click', tightenfour)
menuthree.addEventListener('click', tightenthree)
cruzthree.addEventListener('click', touchthree)