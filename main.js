$(document).ready(function () {
  $(".autoplay").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  });
});

$(document).ready(function () {
  $(".multiple-items").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  });
});

function toggleContent(id) {
  const content = document.getElementById(id);
  const listItems = document.querySelectorAll(".list li");
  listItems.forEach((item) => {
    if (item.innerText === event.target.innerText) {
      content.classList.toggle("hidden-content");
    }
  });
}
