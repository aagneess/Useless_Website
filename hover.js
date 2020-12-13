const hover = document.querySelectorAll('button');
hover.forEach((element) => {

element.addEventListener('mouseover', function(event) {
    event.target.style.opacity = "0.9";
});

element.addEventListener('mouseout', function(event) {
    event.target.style.opacity = "1";
});
});