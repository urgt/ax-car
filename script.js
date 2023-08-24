function toggleMenu() {
  if (!document.querySelector(".header_nav").classList.contains("active")) {
    document.querySelector(".header_nav").classList.add("active");
    document.querySelector(".nav").classList.add("active");
  } else {
    document.querySelector(".header_nav").classList.remove("active");
    document.querySelector(".nav").classList.remove("active");
  }
}

if ($("#language-selected").is(":empty")) {
  $(".menu li").each(function () {
    if ($(this).attr("class") == "selected") {
      var selected = $(this).find(".lang-code").html().toUpperCase();
      console.log($(this).find(".lang-code").html().toUpperCase());
      $("#language-selected").html(selected);
    }
  });
}

//The next following line displays and set selected language
$(".dropdownbox").click(function () {
  $(".menu").toggleClass("showMenu");
  $(".menu > li").click(function () {
    var selected = $(this).find(".lang-code").html().toUpperCase();
    console.log($(this).find(".lang-code").html().toUpperCase());
    $("#language-selected").html(selected);
    $(".menu").removeClass("showMenu");
  });
});

//Close language select box if nothing is selected
$("#dropdown-wrapper").mouseleave(function () {
  $(".menu").removeClass("showMenu");
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const button = document.querySelector(".all_filters");

button.addEventListener("click", buttonClick, false);

function buttonClick(event) {
  event.preventDefault();
}

function showAllFilters() {
  $(".filter_selects select").show();
  $(".all_filters").hide();
}
