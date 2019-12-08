const imageEntities = document.getElementById('img-container').getElementsByTagName('div');
const sloganEntities = document.getElementById('slogan-container').querySelectorAll('#slogan-container>div');

let currIndex = 0;

setInterval(() => {
    currIndex = ++currIndex % imageEntities.length;
    
    slideShow(currIndex);
}, 6500);

const slideShow = (index) => {
    // Make currently visible ones invisible
    imageEntities[index === 0 ? imageEntities.length-1 : index-1].classList.remove('header-image__entity--fadeIn');
    sloganEntities[index === 0 ? sloganEntities.length-1 : index-1].classList.remove('header-slogan__entity--shown');
    
    // Small delay before the next ones will be visible
    setTimeout(() => {
        imageEntities[index].classList.add('header-image__entity--fadeIn');
        sloganEntities[index].classList.add('header-slogan__entity--shown');
    }, 1500);
}

// NAVBAR SCROLL -> TO FIXED POSITION
const navbar = document.getElementById('navigation');
let isFixed = false;
let navbarTop = navbar.offsetTop;
let navbarTopArr = [360, 288, 112]; // Calculating this on the fly poses some problems

// console.log(navbar.offsetTop + navbar.offsetHeight)

// ================================================================= //
// ANSWER TO SCREEN SIZE CHANGES
// TODO MAKE IT MORE ELEGANT
window.matchMedia("(max-width: 1000px)").addListener(() => {
    if(!isFixed) {
        console.log("RECALCULATE THE NAVBARTOP: 1000PX")
        navbarTop = navbar.offsetTop;
    }
    else {
        navbarTop = navbarTopArr[0];
    }
});

window.matchMedia("(max-width: 800px)").addListener(() => {
    if(!isFixed) {
        console.log("RECALCULATE THE NAVBARTOP: 800PX")
        navbarTop = navbar.offsetTop;
    }
    else {
        if(screen.availWidth > 800) {
            navbarTop = navbarTopArr[0];
        }
        else {
            navbarTop = navbarTopArr[1];
        }
    }
});

window.matchMedia("(max-width: 600px)").addListener(() => {
    if(!isFixed) {
        console.log("RECALCULATE THE NAVBARTOP: 600PX")
        navbarTop = navbar.offsetTop;
    }
    else {
        if(screen.availWidth > 600) {
            navbarTop = navbarTopArr[1];
        }
        else {
            navbarTop = navbarTopArr[2];
        }
    }
});
// ================================================================= //


window.onscroll = () => {
    // console.log("Page Y Offset: " + window.pageYOffset);
    // console.log("navbar top: " + navbarTop);
    if(window.pageYOffset >= navbarTop) {
        navbar.classList.add('navbar-fixed');
        isFixed = true;
    }
    else {
        navbar.classList.remove('navbar-fixed');
        isFixed = false;
    }
}

// SIDE DRAWER
const menuButton = document.getElementById('side_drawer_toggle');
const sideDrawer = document.getElementById('sidedrawer');
let isSideDrawerOpen = false;

menuButton.addEventListener('click', () => {
    isSideDrawerOpen ? sideDrawer.classList.remove('sidedrawer-open') : sideDrawer.classList.add('sidedrawer-open');

    isSideDrawerOpen = !isSideDrawerOpen;
});