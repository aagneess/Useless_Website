window.addEventListener('scroll', isInViewport);

function isInViewport(e) {
    var nookOne = document.getElementById('nookOne'),
        position = nookOne.getBoundingClientRect(),
        offset = 100;
    
    if (position.bottom+offset < window.scrollY) {
        nookOne.style.display = "block";
        nookOne.classList.add("moveInRight");
    }
}

window.addEventListener('scroll', isInView);

function isInView(e) {
    var nookTwo = document.getElementById('nookTwo'),
        position = nookTwo.getBoundingClientRect(),
        offset = 2100;
    
    if (position.bottom+offset < window.scrollY) {
        nookTwo.style.display = "block";
        nookTwo.classList.add("moveInLeft");
    }
}