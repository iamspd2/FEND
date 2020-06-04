/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const navList = document.querySelector('#navbar__list');
mybutton = document.getElementById("myBtn");
const sections = document.querySelectorAll('section');

//helper functions

// Checking if element is visible to user

const isInView = (domElement, threshold = 0) => {
    const bound = domElement.getBoundingClientRect();
    return (
        bound.top >= threshold && bound.left >= threshold && bound.bottom <= ((window.innerHeight || document.documentElement.clientHeight) - threshold) && bound.right <= ((window.innerWidth || document.documentElement.clientWidth) - threshold));
};

// build the navigation bar

const buildnav = () => {
    // Create a document fragment to improve performance
    const fragment = document.createDocumentFragment();

    // Create navigation bar items and attach them to the document fragment
    sections.forEach(section => {
        const newLi = document.createElement('li');
        newLi.classList.add("item");

        const newA = document.createElement('a');
        newA.href = `#${section.id}`;
        newA.innerText = section.dataset.nav;
        newLi.appendChild(newA);

        fragment.appendChild(newLi);
    })
    navList.appendChild(fragment);
}
buildnav();

//forming button when user scrolls more than 20px

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// scroll to the top of the document when clicked
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//add events

// an event of the mouse scrolling over a section
const update = new Event("setActive");

// dispatch event to set active state to current section in viewport
window.onscroll = () => sectionParent.dispatchEvent(update);


// add event listener to update visible section and its navigation bar item
const sectionArr = Array.from(sections);
const sectionParent = sectionArr[0].parentElement;

sectionParent.addEventListener("setActive", function () {
    sectionArr.forEach((section, index) => {
        const navChildren = Array.from(navList.children);
        // check if the section is visible
        const isOnScreen = isInView(section, -200);
        if (isOnScreen) {
            // add active class when the section is visible
            section.classList.add("your-active-class");
            navChildren[index].classList.add("selected");
            console.log('Active');
        } else {
            section.classList.remove("your-active-class");
            navChildren[index].classList.remove("selected");
        }
    })
});


// end of file reached