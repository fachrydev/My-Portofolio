const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{
counters.forEach(counter => {
    counterObserver.observe(counter);
});

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;
const target = +counter.dataset.target;

let count = 0;

const speed = target / 80;

const update = ()=>{

count += speed;

if(count < target){

counter.innerText =
Math.floor(count).toLocaleString();

requestAnimationFrame(update);

}else{

counter.innerText =
target.toLocaleString() + "+";

}

};

update();

counterObserver.unobserve(counter);

}

});

},{threshold:.5});

const openDeck = document.getElementById("openDeck");
const projectDeck = document.getElementById("projectDeck");
const closeDeck = document.getElementById("closeDeck");

openDeck.addEventListener("click", () => {

    openDeck.style.opacity = "0";
    openDeck.style.transform = "scale(.92)";

    setTimeout(() => {

        openDeck.style.display = "none";

        projectDeck.classList.remove("hidden");

    }, 400);

});

closeDeck.addEventListener("click", () => {

    projectDeck.classList.add("hidden");

    openDeck.style.display = "flex";

    setTimeout(() => {

        openDeck.style.opacity = "1";
        openDeck.style.transform = "scale(1)";

    }, 50);

});
const reveals = document.querySelectorAll(
".contact,.footer"
);

const observer = new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},
{
threshold:0.15
}
);

reveals.forEach(el=>observer.observe(el));
const toggle =
document.getElementById("themeToggle");

toggle.addEventListener("change",()=>{

document.body.classList.toggle("dark-mode");

});
const journeyFolder =
document.getElementById("journeyFolder");

const journeyArchive =
document.getElementById("journeyArchive");

const closeJourney =
document.getElementById("closeJourney");

if(journeyFolder){

journeyFolder.addEventListener("click",()=>{

journeyFolder.classList.add("folder-hide");

setTimeout(()=>{

journeyArchive.classList.remove("hidden");

journeyArchive.classList.add("archive-show");

},500);

});

}

if(closeJourney){

closeJourney.addEventListener("click",()=>{

journeyArchive.classList.remove("archive-show");

journeyArchive.classList.add("archive-hide");

setTimeout(()=>{

journeyArchive.classList.add("hidden");

journeyArchive.classList.remove("archive-hide");

journeyFolder.classList.remove("folder-hide");

},500);

});

}
const journeyContainer =
document.querySelector(".journey-cards");

const journeyPrev =
document.getElementById("journeyPrev");

const journeyNext =
document.getElementById("journeyNext");

if(journeyContainer){

journeyNext.addEventListener("click",()=>{

journeyContainer.scrollBy({

left:380,
behavior:"smooth"

});

});

journeyPrev.addEventListener("click",()=>{

journeyContainer.scrollBy({

left:-380,
behavior:"smooth"

});

});

}
