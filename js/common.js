const header = document.querySelector("#header");
const gnb = document.querySelector("#gnb");
const btnTop = document.querySelector(".btn-top");
window.addEventListener("scroll", function () {
  //console.log("스크롤이 되고 있습니다.");
  //console.log(window.scrollY);
  if (window.scrollY > 0) {
    header.classList.add("on");
  } else {
    header.classList.remove("on");
  }
  if (window.scrollY > 500) {
    btnTop.classList.add("on");
  } else {
    btnTop.classList.remove("on");
  }
});
// gnb.addEventListener("mouseenter", function () {
//   header.classList.add("full");
// });
// gnb.addEventListener("mouseleave", function () {
//   header.classList.remove("full");
// });

btnTop.addEventListener("click", function () {
  gsap.to(window, { scrollTo: 100, duration: 1 });
});

document.querySelector(".family-site button").addEventListener("click", function () {
  document.querySelector(".family-site").classList.toggle("on");
});
