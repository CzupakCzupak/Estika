const selectColorBtn = document.querySelector(".select-color-js");
const productsList = document.querySelector(".product__grid");
const productItems = productsList.querySelectorAll(".product");
const colorFilterAmount = document.querySelectorAll(".rolets__select-circle");
// const sideFilterAmount = document.querySelector(".rolets-filter-amount-js");
const roletsFilters = document.querySelector(".rolets__filters");
const roletsFiltersMenu = document.querySelector(".rolets__filters-menu");
const clearAllJs = document.querySelectorAll(".clear-all-js");
const roletsColorOptions = document.querySelectorAll(".rolets__color-option");
const roletsSideOptions = document.querySelectorAll(".rolets__side-option");
const selectSideBtn = document.querySelector(".select-side-js");

let colorsArray = [];
let sidesArray = [];

selectColorBtn.addEventListener("click", (e) => {
  const selectBtn = e.target.closest(".select-color-js");
  if (selectBtn.classList.contains("active")) {
    if (!e.target.closest(".rolets__color-select")) {
      selectBtn.classList.remove("active");
    }
  } else {
    selectBtn.classList.add("active");
  }

  if (e.target.closest(".rolets__color-option")) {
    const SelectOption = e.target.closest(".rolets__color-option");
    SelectOption.classList.toggle("active");
    const chosenColor = SelectOption.dataset.color;
    if (SelectOption.classList.contains("active")) {
      colorsArray.push(chosenColor);
    } else {
      deleteIndex(colorsArray, chosenColor);
    }
    productItems.forEach((product) => {
      product.classList.remove("active");
    });
    checkProductsCount();
  }
});

function clearAllFilters() {
  colorsArray = [];
  sidesArray = [];
  checkProductsCount();
}

function checkProductsCount() {
  if (colorsArray.length == 0 && sidesArray.length == 0) {
    productItems.forEach((product) => {
      product.classList.add("active");
    });
    roletsFiltersMenu.classList.remove("active");
    colorFilterAmount.forEach((filter) => {
      filter.classList.remove("active");
      filter.textContent = "";
    });
    roletsColorOptions.forEach((option) => {
      option.classList.remove("active");
    });
    roletsSideOptions.forEach((option) => {
      option.classList.remove("active");
    });
  } else {
    if (colorsArray.length >= 1 && sidesArray.length >= 1) {
      for (const color in colorsArray) {
        for (const side in sidesArray) {
          const elements = productsList.querySelectorAll(`[data-color='${colorsArray[color]}'][data-side='${sidesArray[side]}']`);
          elements.forEach((element) => {
            element.classList.add("active");
          });
        }
      }
    } else if (colorsArray.length >= 1) {
      roletsFilters.innerHTML = "";
      for (const color in colorsArray) {
        const elements = productsList.querySelectorAll(`[data-color='${colorsArray[color]}']`);
        elements.forEach((element) => {
          element.classList.add("active");
        });
        roletsFiltersMenu.classList.add("active");
        let colorFilter = document.createElement("div");
        colorFilter.innerHTML = `<div class="rolets__filters-item d-f ai-c gap-12 active">
        <p>${colorsArray[color]}</p><img src="img/close.svg" alt="Close icon" />
        </div>`;
        roletsFilters.appendChild(colorFilter);
        roletsFiltersMenu.classList.add("active");
        colorFilterAmount.forEach((filter) => {
          filter.classList.add("active");
          filter.textContent = colorsArray.length;
        });
      }
    } else {
      for (const side in sidesArray) {
        const elements = productsList.querySelectorAll(`[data-side='${sidesArray[side]}']`);
        elements.forEach((element) => {
          element.classList.add("active");
        });
      }
    }
  }
}

function deleteIndex(tablica, wartosc) {
  const index = tablica.indexOf(wartosc);
  if (index !== -1) {
    tablica.splice(index, 1);
  }
}

clearAllJs.forEach((item) => {
  item.addEventListener("click", clearAllFilters);
});

window.addEventListener("click", (e) => {
  if (!e.target.closest(".select-color-js")) {
    selectColorBtn.classList.remove("active");
  }

  if (!e.target.closest(".select-side-js")) {
    selectSideBtn.classList.remove("active");
  }
});

selectSideBtn.addEventListener("click", (e) => {
  const selectBtn = e.target.closest(".select-side-js");
  if (selectBtn.classList.contains("active")) {
    if (!e.target.closest(".rolets__side-select")) {
      selectBtn.classList.remove("active");
    }
  } else {
    selectBtn.classList.add("active");
  }

  if (e.target.closest(".rolets__side-option")) {
    const SelectOption = e.target.closest(".rolets__side-option");
    SelectOption.classList.toggle("active");
    const chosenSide = SelectOption.dataset.side;
    if (SelectOption.classList.contains("active")) {
      sidesArray.push(chosenSide);
    } else {
      deleteIndex(sidesArray, chosenSide);
    }
    productItems.forEach((product) => {
      product.classList.remove("active");
    });
    checkProductsCount();
  }
});

const toggleCatBtns = document.querySelectorAll(".togglecat");
const category = document.querySelector(".rolets__categories");

const toggleFilters = document.querySelectorAll(".togglefiltr");
const filters = document.querySelector(".responsive-filters");

toggleCatBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    category.classList.toggle("active");
  });
});

toggleFilters.forEach((btn) => {
  btn.addEventListener("click", () => {
    filters.classList.toggle("active");
  });
});
