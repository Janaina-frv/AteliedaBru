$(document).ready(function(){

// Menu ficar branco quando clica nos links
$('.nav-link').on('click', function() {
        $('#mainNav').addClass("menuEstilizado");
});

// Menu ficar branco quando clica no logo
    $('#mainNav').bind('click',function() {
        $('#mainNav').addClass("menuEstilizado");
    });

// quando fazemos scoll muda o menu
 $(window).scroll(function() {
    if ($(document).scrollTop() > 700) {
        $('#mainNav').addClass("menuEstilizado");
    } else{
        $('#mainNav').removeClass("menuEstilizado");
    }
});

 // Animação do Carrossel infinito
    slideHeadLine1()
    function slideHeadLine1(){
        $('#portfolio').removeClass("esconder"); 
        $('#portfolio2').addClass("esconder");
        setTimeout(slideHeadLine2, 6000);
    }
    function slideHeadLine2(){
        $('#portfolio2').removeClass("esconder");
        $('#portfolio').addClass("esconder");
        setTimeout(slideHeadLine1, 6000);
    }

    // Animação do icone de whatsapp
    $('#iconwhatsapp').on('focus', function() {
        $('#popover240319').removeClass("esconder");
    });



    });