// Preheader

const preheader = document.querySelector(".preheader");
const closePreheader = document.querySelector(".close-preheader");

closePreheader.addEventListener("click", () => {
  preheader.remove();
});

// Search menu

const searchBtn = document.querySelectorAll(".search");
const searchMenu = document.querySelector(".header__search");

searchBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    searchMenu.classList.toggle("active");
  });
});

// Hemberger

const header = document.querySelector(".header");
const hamburgerBtn = document.querySelectorAll(".hamburger-js");
const shadow = document.querySelector(".shadow");
const headerNav = document.querySelector(".header__nav");
const opensubMenu = document.querySelectorAll(".open-submenu");
const closesubMenu = document.querySelectorAll(".close-submenu");

hamburgerBtn.forEach((hamburger) => {
  hamburger.addEventListener("click", () => {
    headerNav.classList.toggle("active");
    shadow.classList.toggle("active");
  });
});

shadow.addEventListener("click", () => {
  opensubMenu.forEach((submenu) => {
    submenu.classList.remove("active");
  });
  headerNav.classList.remove("active");
  shadow.classList.remove("active");
});

const toggleSubmenu = (e) => {
  const clickedSubmenu = e.target.closest(".open-submenu");
  if (flag === true) {
    flag = false;
    return;
  }
  if (window.innerWidth >= 1200) {
    return;
  }
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

// Scrolling

let flag = false;
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      var headerOffset = header.scrollHeight;
      var elementPosition = sectionEl.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset - 10;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    if (headerNav.classList.contains("active")) {
      shadow.classList.remove("active");
      headerNav.classList.remove("active");
      const activeSub = document.querySelector(".open-submenu.active");
      activeSub.classList.remove("active");
      flag = true;
    }
  });
});

// Header accordions

const accordionsHeader = document.querySelectorAll(".parent-accor");
const accordionHeaderLists = document.querySelectorAll(".header__accordion");
const accordionHeaderToggle = (e) => {
  const parent = e.target.closest(".parent-accor");
  const child = parent.querySelector(".header__accordion");
  if (parent.classList.contains("active")) {
    child.style.maxHeight = 0;
    parent.classList.remove("active");
  } else {
    accordionsHeader.forEach((item) => {
      item.classList.remove("active");
      const child = item.querySelectorAll(".header__accordion");
      child.forEach((item) => {
        item.style.maxHeight = 0;
      });
    });
    if (child.scrollHeight >= 520) {
      child.style.maxHeight = 500 + "px";
      child.style.overflow = "auto";
    } else {
      child.style.maxHeight = child.scrollHeight + "px";
    }
    parent.classList.add("active");
  }
};

accordionsHeader.forEach((item) => {
  item.addEventListener("click", accordionHeaderToggle);
});

window.addEventListener("resize", (e) => {
  if (window.innerWidth >= 1201) {
    accordions.forEach((item) => {
      item.classList.remove("active");
      const childrenHeader = item.querySelectorAll(".header__accordion");
      childrenHeader.forEach((child) => {
        child.style.maxHeight = "none";
      });
    });
  } else if (document.querySelector(".parent-accor.active")) {
    accordionHeaderLists.forEach((list) => {
      list.style.maxHeight = 0;
    });
    const activeAccordionHeader = document.querySelector(".parent-accor.active");
    const accordionListHeader = activeAccordionHeader.querySelector(".header__accordion");
    if (accordionListHeader.scrollHeight >= 520) {
      accordionListHeader.style.maxHeight = 500 + "px";
      accordionListHeader.style.overflow = "auto";
    } else {
      accordionListHeader.style.maxHeight = accordionListHeader.scrollHeight + "px";
    }
  } else {
    accordionHeaderLists.forEach((list) => {
      list.style.maxHeight = 0;
    });
  }
});
