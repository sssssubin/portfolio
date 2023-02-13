"use strict";

/* Simple Tabs with JavaScript */

// #1
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  // Remove selection from the previous item and select the new one
  const active = document.querySelector(".category__btn.selected");
  active.classList.remove("selected");
  const target =
    e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
  target.classList.add("selected");

  projects.forEach((project) => {
    console.log(project.dataset.type);
    if (filter === "*" || filter === project.dataset.type) {
      project.classList.remove("invisible");
    } else {
      project.classList.add("invisible");
    }
  });
});

// #3
const buttonsContainer = document.querySelector(".buttons");
const tabs = document.querySelector(".tabs");

console.log(buttonsContainer);

buttonsContainer.addEventListener("click", (event) => {
  let index = event.target.closest(".button").dataset.value;
  console.log(index);
  console.log(event.target);
  tabs.querySelector(".active").classList.remove("active");
  tabs.querySelector(".tab--" + index).classList.add("active");
});
