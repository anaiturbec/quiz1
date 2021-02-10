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


function open_signature(){
    window.open("https://signature.clothing/", "_blank")
}

function open_tiktok(){
    window.open("https://www.tiktok.com/", "_blank")
}

function open_twitter(){
    window.open("https://twitter.com/", "_blank")
}


var skills= {
        "Python": 100,
        "Java": 40,
        "JavaScript": 80,
        "CSS": 90,
        "HTML": 100
    }


document.getElementById("1").innerHTML = 'Python = ' + skills['Python'] + '%';
document.getElementById("2").innerHTML = 'Java = ' + skills['Java'] + '%';
document.getElementById("3").innerHTML = 'JavaScript = ' + skills['JavaScript'] + '%';
document.getElementById("4").innerHTML = 'CSS = ' + skills['CSS'] + '%';
document.getElementById("5").innerHTML = 'HTML = ' + skills['HTML'] + '%';


