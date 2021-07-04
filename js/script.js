$(document).ready( function() { 

    var counts = 0;
$(".boton-comprar").click(function () {
//to number and increase to 1 on each click
counts += +1;
var $this = $(this),

element = $("#cart-counter #counter");

countTo = element.attr('data-count',counts);
}); 

$('.carousel').slick({
    dots:true,
    autoplay: true,
    autoplaySpeed: 2000,
    });



 } );

