// window.addEventListener("load", function () {
//   let projectsHeader = this.document.querySelector(".projects-header");
//   let projects = this.document.querySelectorAll(".project");

//   projectsHeaderBottom = projectsHeader.getBoundingClientRect().bottom;
//   projectsHeaderDescriptionBottom = projectsHeader
//     .querySelector(".description")
//     .getBoundingClientRect().bottom;

//   let projectsHeaderOffset =
//     projectsHeaderDescriptionBottom - projectsHeaderBottom;
//   projects[0].style.marginTop = projectsHeaderOffset + 50 + "px";

//   for (let i = 1; i < projects.length; i++) {
//     let projectBottom = projects[i - 1].getBoundingClientRect().bottom;
//     let descriptionBottom = projects[i - 1]
//       .querySelector(".description")
//       .getBoundingClientRect().bottom;
//     descriptionOffset = descriptionBottom - projectBottom;
//     projects[i].style.marginTop = descriptionOffset + 50 + "px";
//   }
// });

// window.addEventListener("resize", function () {
//   let projectsHeader = this.document.querySelector(".projects-header");
//   let projects = this.document.querySelectorAll(".project");

//   projectsHeaderBottom = projectsHeader.getBoundingClientRect().bottom;
//   projectsHeaderDescriptionBottom = projectsHeader
//     .querySelector(".description")
//     .getBoundingClientRect().bottom;

//   let projectsHeaderOffset =
//     projectsHeaderDescriptionBottom - projectsHeaderBottom;
//   projects[0].style.marginTop = projectsHeaderOffset + 50 + "px";

//   for (let i = 1; i < projects.length; i++) {
//     let projectBottom = projects[i - 1].getBoundingClientRect().bottom;
//     let descriptionBottom = projects[i - 1]
//       .querySelector(".description")
//       .getBoundingClientRect().bottom;
//     descriptionOffset = descriptionBottom - projectBottom;
//     projects[i].style.marginTop = descriptionOffset + 50 + "px";
//   }
// });
