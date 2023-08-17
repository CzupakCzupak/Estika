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

// const splide = document.querySelectorAll(".splide:not(.splide-hero)");

// console.log(splide);

// function checkSplide() {
//   let viewportWidth = window.innerWidth;
//   splide.forEach((item) => {
//     let childrenCount = item.querySelector(".splide__list").children.length;
//     if (viewportWidth >= 800 && childrenCount <= 4) {
//       let carousel = new Splide(item, {
//         destroy: true,
//       });
//       carousel.mount();
//     }
//   });
//   console.log("it wroks kinda");
// }

// checkSplide();
