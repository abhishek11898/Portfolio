jQuery(document).ready(function() {
    // Element toggle function
  const elementToggleFunc = function(elem) {
    jQuery(elem).toggleClass("active");
  };

  // Sidebar variables
  const sidebar = jQuery("[data-sidebar]");
  const sidebarBtn = jQuery("[data-sidebar-btn]");

  // Sidebar toggle functionality for mobile
  sidebarBtn.on("click", function() {
    elementToggleFunc(sidebar);
  });

  // Testimonials variables
  const testimonialsItem = jQuery("[data-testimonials-item]");
  const modalContainer = jQuery("[data-modal-container]");
  const modalCloseBtn = jQuery("[data-modal-close-btn]");
  const overlay = jQuery("[data-overlay]");

  // Modal variables
  const modalImg = jQuery("[data-modal-img]");
  const modalTitle = jQuery("[data-modal-title]");
  const modalText = jQuery("[data-modal-text]");

  // Modal toggle function
  const testimonialsModalFunc = function() {
    modalContainer.toggleClass("active");
    overlay.toggleClass("active");
  };

  // Add click event to all modal items
  testimonialsItem.each(function() {
    jQuery(this).on("click", function() {
      modalImg.attr("src", jQuery(this).find("[data-testimonials-avatar]").attr("src"));
      modalImg.attr("alt", jQuery(this).find("[data-testimonials-avatar]").attr("alt"));
      modalTitle.html(jQuery(this).find("[data-testimonials-title]").html());
      modalText.html(jQuery(this).find("[data-testimonials-text]").html());

      testimonialsModalFunc();
    });
  });

  // Add click event to modal close button and overlay
  modalCloseBtn.on("click", testimonialsModalFunc);
  overlay.on("click", testimonialsModalFunc);

  // Custom select variables
  const select = jQuery("[data-select]");
  const selectItems = jQuery("[data-select-item]");
  const selectValue = jQuery("[data-selecct-value]");
  const filterBtn = jQuery("[data-filter-btn]");

  select.on("click", function() {
    elementToggleFunc(this);
  });

  // Add event in all select items
  selectItems.each(function() {
    jQuery(this).on("click", function() {
      let selectedValue = jQuery(this).text().toLowerCase();
      selectValue.text(jQuery(this).text());
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  });

  // Filter variables
  const filterItems = jQuery("[data-filter-item]");

  const filterFunc = function(selectedValue) {
    filterItems.each(function() {
      if (selectedValue === "all") {
        jQuery(this).addClass("active");
      } else if (selectedValue === jQuery(this).data("category")) {
        jQuery(this).addClass("active");
      } else {
        jQuery(this).removeClass("active");
      }
    });
  };

  // Add event in all filter button items for large screen
  let lastClickedBtn = filterBtn.eq(0);

  filterBtn.each(function() {
    jQuery(this).on("click", function() {
      let selectedValue = jQuery(this).text().toLowerCase();
      selectValue.text(jQuery(this).text());
      filterFunc(selectedValue);

      lastClickedBtn.removeClass("active");
      jQuery(this).addClass("active");
      lastClickedBtn = jQuery(this);
    });
  });

  // Contact form variables
  const form = jQuery("[data-form]");
  const formInputs = jQuery("[data-form-input]");
  const formBtn = jQuery("[data-form-btn]");

  // Add event to all form input fields
  formInputs.each(function() {
    jQuery(this).on("input", function() {
      // Check form validation
      if (form[0].checkValidity()) {
        formBtn.removeAttr("disabled");
      } else {
        formBtn.attr("disabled", "disabled");
      }
    });
  });

  // Page navigation variables
  const navigationLinks = jQuery("[data-nav-link]");
  const pages = jQuery("[data-page]");

  // Add event to all nav links
  navigationLinks.each(function() {
    jQuery(this).on("click", function() {
      const selectedPage = jQuery(this).html().toLowerCase();

      pages.each(function(index) {
        if (selectedPage === jQuery(this).data("page")) {
          jQuery(this).addClass("active");
          navigationLinks.eq(index).addClass("active");
          window.scrollTo(0, 0);
        } else {
          jQuery(this).removeClass("active");
          navigationLinks.eq(index).removeClass("active");
        }
      });
    });
  });
});


