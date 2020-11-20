$(function(){

$(".reviews-slider").slick({
    infiite: true,
    slidesToShow: 2,
    slideToScroll: 2,
    arrows: false,
    dots: true,

});
$(".btn__menu").on("click", function(){
    $(".menu__list").slideToggle();
});

});