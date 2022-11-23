// manage opening and closing menu
const menuIconBtn = document.querySelector('.menu-icon-btn')
menuIconBtn.addEventListener('click', toggleThem)
function toggleThem() {
    if (document.querySelector('.menu-items-ul').classList.contains('is-hidden')) { // If the menu is hidden...
        document.querySelector('.menu-items-ul').classList.remove('is-hidden') // ...show the menu and...
        document.querySelector('.icon-hamburger').classList.add('is-hidden') // ...hide the hamburger and...
        document.querySelector('.icon-close').classList.remove('is-hidden') // ...show the X.
    } else { // Otherwise...
        document.querySelector('.menu-items-ul').classList.add('is-hidden') // ...hide the menu and...
        document.querySelector('.icon-hamburger').classList.remove('is-hidden') // ...show the hamburger and...
        document.querySelector('.icon-close').classList.add('is-hidden') // ...hide the X.
    } 
}

// upon click of any .back-to-top-btn, go back to top
const backToTopBtns = document.querySelectorAll('.back-to-top-btn')
backToTopBtns.forEach(btn => { btn.addEventListener('click', goBackToTop) })
function goBackToTop() {
    // // use this for a 'jump' scroll
    // window.scrollTo(0,0)

    // use this for a 'smooth' scroll
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}