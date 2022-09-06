// scroll window to the top on refresh
window.onbeforeunload = () => {
    window.scrollTo(0, 0)
}

//  open mobile menu
const menuToggle = document.querySelector('#menu-toggle')
const containerMenu = document.querySelector('nav')
const overlay = document.querySelector('.overlay')

menuToggle.addEventListener('click', (ev) => {
    overlay.classList.toggle('--active')
    containerMenu.classList.toggle('--active')
})

// add overlay on the screen
overlay.addEventListener('click', (ev) => {
    if (ev.target == containerMenu) {
        return
    } else {
        // remove all active classes when the menu is closed
        document.body.querySelectorAll('.--active').forEach(active => {
            active.classList.remove('--active')
        })
        menuToggle.checked = false
    }
})

const menuItems = document.querySelectorAll('.menu__item > span')

// open submenu
menuItems.forEach(item => {
    item.addEventListener('click', (ev) => {
        // alternative
        // let siblings = item.parentElement.parentElement.children
        // for (sib of siblings) {
        //     sib.querySelector('span').classList.remove('--active')
        // }

        const siblings = [...item.parentElement.parentElement.children]
        siblings.forEach(siblings => {
            siblings.querySelector('span').classList.remove('--active')
        })
        item.classList.add('--active')


        if (ev.target.closest('[data-caret]')) {
            const caretIcon = ev.target.querySelector('img')
            const nesteds = ev.target.parentElement.querySelectorAll('[data-nested]')

            caretIcon.classList.toggle('--active')

            nesteds.forEach(nested => {
                nested.classList.toggle('--active')
            })
        }
    })
})

// change arrow icon when submenu is open

// caret.addEventListener('click', () => {
// if (nested.classList.contains('--active')) {
//     caretIcon.src = './images/icon-arrow-up.svg'
// } else {
//     caretIcon.src = './images/icon-arrow-down.svg'
// }
// })