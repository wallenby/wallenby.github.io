let slideIndex_2 = 0;
showSlides_2(slideIndex_2);

function moveSlide_2(n) {
    showSlides_2(slideIndex_2 += n);
}

function showSlides_2(n) {
    let i;
    let slides = document.getElementsByClassName("slide_bw");
    if (n >= slides.length) slideIndex_2 = 0;
    if (n < 0) slideIndex_2 = slides.length - 1;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex_2].style.display = "block";  
    
}
