window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 170 ||
    document.documentElement.scrollTop > 170
  ) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("navbar").style.backgroundColor = "black";
    document.getElementById("bookNow").style.display = "block";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("navbar").style.backgroundColor =
      "rgba(0, 0, 0, 0.4)";
    document.getElementById("bookNow").style.display = "none";
  }
}

function sideBar() {
  var menu = document.getElementById("sideNav");
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
  } else {
    menu.classList.add("open");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  const imageBox = document.querySelectorAll(".imageBox");
  const serviceImages = document.querySelectorAll(".serviceImg1");

  const row = document.querySelectorAll(".row");

  imageBox.forEach((box) => observer.observe(box));
  serviceImages.forEach((image) => observer.observe(image));
  row.forEach((image) => observer.observe(image));
});
