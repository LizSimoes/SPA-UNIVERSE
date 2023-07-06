console.log('working');
const menu = document.getElementById('menu')
const components = document.getElementById('components')
const cruz = document.getElementById('cruz')

function tighten() {
    console.log('work');
    menu.style.display = 'none'
    cruz.style.display = 'flex'
    components.style.display = 'flex'
    components.style.flexDirection = 'column'
    components.style.position = 'absolute'
    components.style.right = '0'
    components.style.top = '50px'
}

function touch() {
    console.log('testing');
    cruz.style.display = 'none'
    menu.style.display = 'flex'
    components.style.display = 'none'
}

function tightentwo() {
    console.log('testingtwo');
}

components.addEventListener('click', tightentwo)
menu.addEventListener('click', tighten)
cruz.addEventListener('click', touch)
