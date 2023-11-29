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
  content.classList.toggle("hidden-content");
}

function toggleQues(element) {
  const content = element.querySelector('.ques-hiden');
  content.style.display = (content.style.display === 'none') ? 'block' : 'none';
}