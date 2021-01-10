var currentPage = 0;

$(".book").on("click", ".active", nextPage).on("click", ".flipped", prevPage);

$(".book").hammer().on("swipeleft", nextPage);
$(".book").hammer().on("swiperight", prevPage);

function prevPage() {
  $(".flipped")
    .last()
    .removeClass("flipped")
    .addClass("active")
    .siblings(".page")
    .removeClass("active");
}
function nextPage() {
  $(".active")
    .removeClass("active")
    .addClass("flipped")
    .next(".page")
    .addClass("active")
    .siblings();
}

function hide() {
  document.getElementById("note").style.transition = "opacity 1s linear";
  document.getElementById("note").style.opacity = 0;
  
  setTimeout(function() {
    document.getElementById("note").style.zIndex = -1;
  }, 1000);
}
