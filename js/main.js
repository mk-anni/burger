function ready() {

$('.slider_list').slick({
    prevArrow: $('.arrow_scroll-left'),
    nextArrow: $('.arrow_scroll-right')
  });
  $('#fullpage').fullpage({
    menu: "#menu"
  });
  

};
document.addEventListener("DOMContentLoaded", ready);