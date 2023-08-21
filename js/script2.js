const selectColorBtn = document.querySelector(".select-color-js");
const productsList = document.querySelector(".product__grid");
const productItems = productsList.querySelectorAll(".product");
const colorFilterAmount = document.querySelector(".rolets__select-circle");
const roletsFilters = document.querySelector(".rolets__filters");
const roletsFiltersMenu = document.querySelector(".rolets__filters-menu");
const clearAllJs = document.querySelector(".clear-all-js");
const roletsColorOptions = document.querySelectorAll(".rolets__color-option");
const selectSideBtn = document.querySelector(".select-side-js");

let colorsArray = [];

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
    checkProductsCount(colorsArray);
  }
});

function clearAllFilters() {
  colorsArray = [];
  checkProductsCount(colorsArray);
}

function checkProductsCount(tablica) {
  if (tablica.length == 0) {
    productItems.forEach((product) => {
      product.classList.add("active");
    });
    roletsFiltersMenu.classList.remove("active");
    colorFilterAmount.classList.remove("active");
    roletsColorOptions.forEach((option) => {
      option.classList.remove("active");
    });
  } else {
    roletsFilters.innerHTML = "";
    for (const color in colorsArray) {
      const elements = productsList.querySelectorAll(`[data-color='${colorsArray[color]}'`);
      elements.forEach((element) => {
        element.classList.add("active");
      });
      roletsFiltersMenu.classList.add("active");
      let colorFilter = document.createElement("div");
      colorFilter.innerHTML = `<div class="rolets__filters-item d-f ai-c gap-12 active">
      <p>${colorsArray[color]}</p><img src="img/close.svg" alt="Close icon" />
      </div>`;
      roletsFilters.appendChild(colorFilter);
    }
    colorFilterAmount.classList.add("active");
    colorFilterAmount.textContent = colorsArray.length;
  }
}

function deleteIndex(tablica, wartosc) {
  const index = tablica.indexOf(wartosc);
  if (index !== -1) {
    tablica.splice(index, 1);
  }
}

clearAllJs.addEventListener("click", clearAllFilters);

window.addEventListener("click", (e) => {
  if (!e.target.closest(".select-color-js")) {
    selectColorBtn.classList.remove("active");
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
    const chosenColor = SelectOption.dataset.color;
    if (SelectOption.classList.contains("active")) {
      colorsArray.push(chosenColor);
    } else {
      deleteIndex(colorsArray, chosenColor);
    }
    productItems.forEach((product) => {
      product.classList.remove("active");
    });
    checkProductsCount(colorsArray);
  }
});
