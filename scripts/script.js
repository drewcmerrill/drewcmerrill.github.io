window.addEventListener("load", function () {
  let bannerHeight = document.querySelector(".banner-photo").offsetHeight;
  let fixedDivBottom = document
    .querySelector(".banner-photo")
    .getBoundingClientRect().bottom;
  let screenHeight = this.window.innerHeight;
  fixedDivBottom = Math.min(screenHeight, fixedDivBottom);
  document.querySelector(".bio").style.top = fixedDivBottom + "px";
});
