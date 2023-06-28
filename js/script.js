// Dark Mode Functionality
const root = document.querySelector(":root");
const cs = getComputedStyle(root)


function shiftToLightMode(){
    document.body.style.background = "white";
    root.style.setProperty("--pri-color", "#e3e6f3")
    root.style.setProperty("--pri-text-color", "#1a1a1a")
    root.style.setProperty("--dark-text", "#1a1a1a")
    root.style.setProperty("--sec-text-color", "#465b52")
    root.style.setProperty("--heading-text-color", "#222")
    root.style.setProperty("--gray-text", "gray")
    root.style.setProperty("--white-ground", "white")
}

function shiftToDarkMode() {
    document.body.style.background = "#212121";
    root.style.setProperty("--pri-color", "#212121")
    root.style.setProperty("--pri-text-color", "white")
    root.style.setProperty("--dark-text", "white")
    root.style.setProperty("--sec-text-color", "#abc5ba")
    root.style.setProperty("--heading-text-color", "white")
    root.style.setProperty("--gray-text", "#abc5ba")
    root.style.setProperty("--white-ground", "#212121")
}


function toggleDarkMode(btn) {

    document.body.style.transition = "2s";
    
    if (document.body.style.background === "rgb(33, 33, 33)"){
        shiftToLightMode();
        btn.innerHTML = `<i class="fal fa-moon"></i>`
    }
    else{
        shiftToDarkMode();
        btn.innerHTML = `<i class="fal fa-sun"></i>`
    }

}





// ----------------------- Card Carousel ---------------------- //


let allCarouselItems = document.querySelectorAll(".fe-box");
allCarouselItems = Array.from(allCarouselItems);


const featureBox = document.getElementById("feature");


// Shifts the first element to the last place
function reorganizeCards(element){

    // Storing the first element in variable
    element = allCarouselItems[0];

    // Removing the first element from array and DOM
    allCarouselItems[0].remove()
    allCarouselItems.shift();

    // Adding the first element to the end of array and DOM
    featureBox.appendChild(element);
    allCarouselItems.push(element);

    return element
}


// Shift Cards
function shiftCardInCarousel(activeFeature, nextSibling, prevSibling){
    activeFeature.classList.remove("active-feature");
    nextSibling.classList.remove("next-feature-card")
    prevSibling.classList.remove("prev-feature-card")

    activeFeature.classList.add("prev-feature-card")
    nextSibling.classList.add("active-feature")

    let nextNextSibling = nextSibling.nextElementSibling;

    if (nextNextSibling === null){
        nextNextSibling = reorganizeCards(nextNextSibling)
    }

    nextNextSibling.classList.add("next-feature-card")
}


// Main Function for Carousel
function CarouselMain() {
    let activeFeature = document.querySelector(".active-feature");
    let nextSibling = activeFeature.nextElementSibling;
    let prevSibling = activeFeature.previousElementSibling;

    if (nextSibling === null){
        nextSibling = reorganizeCards(nextSibling)
    }

    if (prevSibling === null){
        prevSibling = allCarouselItems[allCarouselItems.length - 1]
    }

    shiftCardInCarousel(activeFeature, nextSibling, prevSibling);
}


setInterval(CarouselMain, 4000)





// ------------------------ Cart Functionality ---------------------------- //

const cartBtn = document.getElementById("cart-btn");

function openCart() {
    console.log("cart")
}


cartBtn.addEventListener("click", openCart);