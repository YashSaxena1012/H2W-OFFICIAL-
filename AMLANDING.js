const mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
var v=window.innerWidth
if(v<480)
{
  function scrlabt() {
  window.scrollTo(0, 200);
}
function scrlpdt() {
  window.scrollTo(0, 800);
}
function scrlcnt() {
  window.scrollTo(0, 8000);
}
}
else if (v > 480 && v < 1023) {
  function scrlabt() {
      window.scrollTo(0, 200)
  }
  function scrlpdt() {
      window.scrollTo(0, 565)
  }
  function scrlcnt() {
      window.scrollTo(0, 8850)
  }
}
else {
  function scrlabt() {
      window.scrollTo(0, 80)
  }
  function scrlpdt() {
      window.scrollTo(0, 420)
  }
  function scrlcnt() {
      window.scrollTo(0, 8700)
  }
}
function scrlhome() {
  window.scrollTo(0,0)
}