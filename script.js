let slideIndex = 0;
showSlides(slideIndex);

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex].style.display = "block";  
    
}




function showSmallSlides(n) {
    let smallSlides = document.getElementsByClassName("small-slide");
    for (let i = 0; i < smallSlides.length; i++) {
        smallSlides[i].style.display = "none";
    }
    // Show the appropriate small slide(s) based on 'n'
    // You can use a similar logic as your existing slideshow
}