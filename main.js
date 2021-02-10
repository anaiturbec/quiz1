var index = 1;
show(index);

// Next/previous controls
function plusSlides(n) {
  show(index += n);
}

// Thumbnail image controls
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


function open_signature(){
    window.open("https://signature.clothing/", "_blank")
}

function open_tiktok(){
    window.open("https://www.tiktok.com/", "_blank")
}

function open_twitter(){
    window.open("https://twitter.com/", "_blank")
}