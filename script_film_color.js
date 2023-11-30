let slideIndex_3 = 0;
showSlides_3(slideIndex_3);

function moveSlide_3(n) {
    showSlides_3(slideIndex_3 += n);
}

function showSlides_3(n) {
    let i;
    let slides = document.getElementsByClassName("slide_color");
    if (n >= slides.length) slideIndex_3 = 0;
    if (n < 0) slideIndex_3 = slides.length - 1;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex_3].style.display = "block";  
    
}
