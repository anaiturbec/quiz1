var index = 1;
show(index);

function plusSlides(n) {
  show(index += n);
}

function currentSlide(n) {
  show(index = n);
}

function show(n) {
  var i;
  var slides = document.getElementsByClassName("slides");

  if (n > slides.length) {index = 1}
  if (n < 1) {index = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[index-1].style.display = "block";
  
}