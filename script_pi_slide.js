let slideIndex_1 = 0;
showSlides_1(slideIndex_1);

function moveSlide_1(n) {
    showSlides_1(slideIndex_1 += n);
}

function showSlides_1(n) {
    let i;
    let slides = document.getElementsByClassName("slide_1");
    if (n >= slides.length) slideIndex_1 = 0;
    if (n < 0) slideIndex_1 = slides.length - 1;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex_1].style.display = "block";  
    
}
