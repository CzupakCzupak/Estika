const carousels = [".splide-trends", ".splide-guide", ".splide-house"];

carousels.forEach((carousel) => {
  const slider = new Splide(carousel, {
    pagination: false,
    autoWidth: true,
    gap: "16px",
    // focus: "center",
    Breakpoints: {
      768: {
        gap: "24px",
      },
    },
  });
  slider.mount();
});

const splideDiscount = new Splide(".splide-discount", {
  pagination: false,
  autoWidth: true,
  omitEnd: true,
  gap: "16px",
  Breakpoints: {
    768: {
      gap: "24px",
    },
  },
});

splideDiscount.mount();

const splideHero = new Splide(".splide-hero", {
  arrows: false,
  autoWidth: true,
  omitEnd: true,
});

splideHero.mount();

const discountBtns = document.querySelectorAll(".discount-btn-js");
const heartIcons = document.querySelectorAll(".heart");

discountBtns.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
    } else {
      e.target.classList.add("active");
    }
  });
});

heartIcons.forEach((item) => {
  item.addEventListener("click", (e) => {
    const clickedHeart = e.target.closest(".heart");

    if (clickedHeart.classList.contains("active")) {
      clickedHeart.classList.remove("active");
    } else {
      clickedHeart.classList.add("active");
    }
  });
});

const accordions = document.querySelectorAll(".footer__accordion-js");

const accordionToggle = (e) => {
  const parent = e.target.closest(".footer__accordion-js");
  const children = parent.querySelectorAll(".footer__accordion-list");

  const child = parent.querySelector(".footer__accordion-list");
  if (parent.classList.contains("active")) {
    children.forEach((item) => {
      item.style.maxHeight = 0 + "px";
    });
    parent.classList.remove("active");
  } else {
    accordions.forEach((item) => {
      item.classList.remove("active");
      const child = item.querySelectorAll(".footer__accordion-list");
      child.forEach((item) => {
        item.style.maxHeight = 0;
      });
    });
    parent.classList.add("active");
    children.forEach((item) => {
      item.style.maxHeight = item.scrollHeight + "px";
    });
  }
};

accordions.forEach((item) => {
  item.addEventListener("click", accordionToggle);
});

const accordionLists = document.querySelectorAll(".footer__accordion-list");

window.addEventListener("resize", (e) => {
  if (window.innerWidth >= 476) {
    accordions.forEach((item) => {
      item.classList.remove("active");
      const children = item.querySelectorAll(".footer__accordion-list");
      children.forEach((child) => {
        child.style.maxHeight = "none";
      });
    });
  } else if (document.querySelector(".footer__accordion-js.active")) {
    accordionLists.forEach((list) => {
      list.style.maxHeight = 0;
    });

    console.log("im turee");
    const activeAccordion = document.querySelector(".footer__accordion-js.active");
    const activeChild = activeAccordion.querySelectorAll(".footer__accordion-list");

    activeChild.forEach((actChild) => {
      actChild.style.maxHeight = actChild.scrollHeight + "px";
    });
  } else {
    accordionLists.forEach((list) => {
      list.style.maxHeight = 0;
    });
  }
});
