const preheader = document.querySelector(".preheader");
const closePreheader = document.querySelector(".close-preheader");

closePreheader.addEventListener("click", () => {
  preheader.remove();
});

const searchBtn = document.querySelectorAll(".search");
const searchMenu = document.querySelector(".header__search");

searchBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    searchMenu.classList.toggle("active");
  });
});

const hamburgerBtn = document.querySelectorAll(".hamburger-js");
const shadow = document.querySelector(".shadow");
const headerNav = document.querySelector(".header__nav");

hamburgerBtn.forEach((hamburger) => {
  hamburger.addEventListener("click", () => {
    headerNav.classList.toggle("active");
    shadow.classList.toggle("active");
  });
});

const opensubMenu = document.querySelectorAll(".open-submenu");
const closesubMenu = document.querySelectorAll(".close-submenu");

// const anchor = document.querySelector("a[href]");

// anh.forEach((item) => {
//   item.addEventListener("click", () => {
//     submenu.classList.remove("active");
//     headerNav.classList.remove("active");
//     shadow.classList.remove("active");
//   });
// });

shadow.addEventListener("click", () => {
  opensubMenu.forEach((submenu) => {
    submenu.classList.remove("active");
    headerNav.classList.remove("active");
    shadow.classList.remove("active");
  });
});

const toggleSubmenu = (e) => {
  const clickedSubmenu = e.target.closest(".open-submenu");
  if (e.target.closest(".close-submenu")) {
    clickedSubmenu.classList.remove("active");
  } else {
    clickedSubmenu.classList.add("active");
  }
};

opensubMenu.forEach((open) => {
  open.addEventListener("click", toggleSubmenu);
});

closesubMenu.forEach((open) => {
  open.addEventListener("click", toggleSubmenu);
});

const accordions2 = document.querySelectorAll(".parent-accor");

const accordionToggle2 = (e) => {
  const parent = e.target.closest(".parent-accor");
  const child = parent.querySelector(".header__accordion");
  if (parent.classList.contains("active")) {
    child.style.maxHeight = 0;
    parent.classList.remove("active");
  } else {
    accordions2.forEach((item) => {
      item.classList.remove("active");
      const child = item.querySelectorAll(".header__accordion");
      child.forEach((item) => {
        item.style.maxHeight = 0;
      });
    });
    child.style.maxHeight = child.scrollHeight + "px";
    parent.classList.add("active");
  }
  console.log("da");
};

accordions2.forEach((item) => {
  item.addEventListener("click", accordionToggle2);
});

const accordionLists2 = document.querySelectorAll(".header__accordion");

window.addEventListener("resize", (e) => {
  if (window.innerWidth >= 1201) {
    accordions.forEach((item) => {
      console.log("ta");
      item.classList.remove("active");
      const children = item.querySelectorAll(".footer__accordion-list");
      children.forEach((child) => {
        child.style.maxHeight = "none";
      });
    });
  } else if (document.querySelector(".parent-accor.active")) {
    accordionLists2.forEach((list) => {
      list.style.maxHeight = 0;
    });
    const activeAccordion = document.querySelector(".footer__accordion-js.active");
    activeAccordion.style.maxHeight = activeAccordion.scrollHeight + "px";
  } else {
    accordionLists.forEach((list) => {
      list.style.maxHeight = 0;
    });
  }
});
