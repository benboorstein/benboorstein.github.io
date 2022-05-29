/* Robert's reponse to my question about at what widths to put breakpoints / media queries (in the CSS):

What you didn't know about my website:
- I originally built it using Webflow, a no-code tool to help Marketers and Designers build websites
- Webflow has four default breakpoints: 320px, 568px, 768px, 1299px
- I didn't change any of those while building my website

What I advise you do:
- Don't worry about break points right now
- Instead, style your content to look great on a mobile device (no media queries are needed for this)
- Once you are happy with how your site's content looks on a mobile device, check the next widest size where it feels like the content should be laid out differently
- That should be your first break point

In summary:
- Let the content guide you
- Not arbitrary numbers or prescribed best practices

*/


// manage opening and closing menu
const menuIconBtn = document.querySelector('.menu-icon-btn')
menuIconBtn.addEventListener('click', toggleThem)
function toggleThem() {
    if (document.querySelector('.menu-items-ul').classList.contains('is-hidden')) { // If the menu is hidden...
        document.querySelector('.menu-items-ul').classList.remove('is-hidden') // ...show the menu and...
        document.querySelector('.icon-hamburger').classList.add('is-hidden') // ...hide the hamburger and...
        document.querySelector('.icon-close').classList.remove('is-hidden') // ...show the X.
        // document.querySelector('.icon-close').style.width = '20px'
        // document.querySelector('.icon-close').style.height = '20px'
    } else { // Otherwise...
        document.querySelector('.menu-items-ul').classList.add('is-hidden') // ...hide the menu and...
        document.querySelector('.icon-hamburger').classList.remove('is-hidden') // ...show the hamburger and...
        document.querySelector('.icon-close').classList.add('is-hidden') // ...hide the X.
        // document.querySelector('.icon-hamburger').style.width = '24px'
        // document.querySelector('.icon-hamburger').style.height = '16px'
    } 
}

// upon click of any .back-to-top-btn, go back to top
const backToTopBtns = document.querySelectorAll('.back-to-top-btn')
backToTopBtns.forEach(btn => { btn.addEventListener('click', goBackToTop) })
function goBackToTop() { window.scrollTo(0,0) }

// upon refresh/reload, go back to top
// QQQ: this works, but not sure "onbeforeunload" is exactly the right option
window.onbeforeunload = function() { window.scrollTo(0,0) }