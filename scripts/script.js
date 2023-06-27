window.addEventListener("load", function () {
  let fixedDivBottom = document
    .querySelector(".banner-photo")
    .getBoundingClientRect().bottom;
  let screenHeight = this.window.innerHeight;
  if (screenHeight < fixedDivBottom) {
    document.querySelector(".bio").style.top = screenHeight + "px";
  }
});
