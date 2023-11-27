$(document).ready(function() {
  $('a').click(function() {
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top - 100
    }, 1000);
  });
  
  window.addEventListener("load", function() {
    const text = document.querySelector(".id");
    text.style.opacity = "1";
    text.style.transform = "translateY(0)";
  });
});
  
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  var windowHeight = window.innerHeight;
  var elementVisible = 0;
  var elementTops = [];

  for (var i = 0; i < reveals.length; i++) {
    var elementTop = reveals[i].getBoundingClientRect().top;
    elementTops.push(elementTop);

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
  var allRevealed = elementTops.every(function (top) {
    return top < windowHeight - elementVisible;
  });

  if (allRevealed) {
    window.removeEventListener("scroll", reveal);
  }
}
window.addEventListener("scroll", reveal);
reveal();
