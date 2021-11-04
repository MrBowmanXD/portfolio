// efeito na main-page

var typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  loop: true,
  typeSpeed: 50
});

// sticky navigation

window.onscroll = function() {
  myStickyFunction();
};

var navbar = document.getElementById("navbar");

var btn = document.querySelectorAll(".btn");

var sticky = navbar.offsetTop;

var webAppsSection = document.querySelector(".web-apps__title");

var properSticky = webAppsSection.offsetTop;

function myStickyFunction() {
  if (window.pageYOffset >= properSticky) {
    navbar.classList.add("sticky");
    btn.forEach((item, i) => {
      item.classList.add("btn-full");
    });

    // btn.classList.add("btn-full");
  } else {
    navbar.classList.remove("sticky");
  }
}
