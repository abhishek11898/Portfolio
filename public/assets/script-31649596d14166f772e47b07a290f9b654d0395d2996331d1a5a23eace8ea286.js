'use strict';

// element toggle function
const elementToggleFunc = function (elem) {
  $(elem).toggleClass("active");
}

// sidebar variables
const $sidebar = $("[data-sidebar]");
const $sidebarBtn = $("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
$sidebarBtn.on("click", function () {
  elementToggleFunc($sidebar);
});

// testimonials variables
const $testimonialsItem = $("[data-testimonials-item]");
const $modalContainer = $("[data-modal-container]");
const $modalCloseBtn = $("[data-modal-close-btn]");
const $overlay = $("[data-overlay]");

// modal variables
const $modalImg = $("[data-modal-img]");
const $modalTitle = $("[data-modal-title]");
const $modalText = $("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  $modalContainer.toggleClass("active");
  $overlay.toggleClass("active");
}

// add click event to all modal items
$testimonialsItem.on("click", function () {
  $modalImg.attr("src", $(this).find("[data-testimonials-avatar]").attr("src"));
  $modalImg.attr("alt", $(this).find("[data-testimonials-avatar]").attr("alt"));
  $modalTitle.html($(this).find("[data-testimonials-title]").html());
  $modalText.html($(this).find("[data-testimonials-text]").html());

  testimonialsModalFunc();
});

// add click event to modal close button
$modalCloseBtn.on("click", testimonialsModalFunc);
$overlay.on("click", testimonialsModalFunc);

// custom select variables
const $select = $("[data-select]");
const $selectItems = $("[data-select-item]");
const $selectValue = $("[data-selecct-value]");
const $filterBtn = $("[data-filter-btn]");

$select.on("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
$selectItems.on("click", function () {
  let selectedValue = $(this).text().toLowerCase();
  $selectValue.text($(this).text());
  elementToggleFunc($select);
  filterFunc(selectedValue);
});

// filter variables
const $filterItems = $("[data-filter-item]");

const filterFunc = function (selectedValue) {
  $filterItems.each(function () {
    if (selectedValue === "all") {
      $(this).addClass("active");
    } else if (selectedValue === $(this).data("category")) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
}

// add event in all filter button items for large screen
let $lastClickedBtn = $filterBtn.first();

$filterBtn.on("click", function () {
  let selectedValue = $(this).text().toLowerCase();
  $selectValue.text($(this).text());
  filterFunc(selectedValue);

  $lastClickedBtn.removeClass("active");
  $(this).addClass("active");
  $lastClickedBtn = $(this);
});

// contact form variables
const $form = $("[data-form]");
const $formInputs = $("[data-form-input]");
const $formBtn = $("[data-form-btn]");

// add event to all form input field
$formInputs.on("input", function () {
  // check form validation
  if ($form[0].checkValidity()) {
    $formBtn.removeAttr("disabled");
  } else {
    $formBtn.attr("disabled", "");
  }
});
console.log('jjjj')
// page navigation variables
const $navigationLinks = $("[data-nav-link]");
const $pages = $("[data-page]");

// add event to all nav link
$navigationLinks.on("click", function () {
  debugger
  const clickedLink = $(this);
  $pages.each(function (index) {
    if (clickedLink.html().toLowerCase() === $(this).data("page")) {
      $(this).addClass("active");
      $navigationLinks.eq(index).addClass("active");
      $(window).scrollTop(0);
    } else {
      $(this).removeClass("active");
      $navigationLinks.eq(index).removeClass("active");
    }
  });
});
