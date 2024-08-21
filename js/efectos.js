$(document).ready(function(){
    //Efecto carga de pagina
    $("#menu-nav a").each(function(index, elemento){
        $(this).css({
            top: "-200px"
        })
        $(this).animate({
            top: "0px"
        }, 1500 + (500 * index) )
    })
    $("#contenedor-nombre").css({
        opacity: "0"
    })
    $("#contenedor-nombre").animate({
        opacity: "1"
    }, 2000)
    
    //Efectos de desplazamiento anclas
    var trabajos = $("#trabajos").offset().top,
        acercaDe = $("#acerca-de").offset().top,
        contacto = $("#contacto").offset().top;
    
    $("#btn-trabajos").on("click", function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: trabajos
        })
    })
    $("#btn-acerca-de").on("click", function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: acercaDe
        })
    })
    $("#btn-contacto").on("click", function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: contacto
        })
    })


    //Efecto pantalla menor a 800px
    if($(window).width() < 800 && $(window).width() > 600){
        $(".trabajo").each(function(index, elemento){
            $(this).on("click", function(){
                $(this).toggleClass("expandir")
                
            })
        })
    }

    //Efecto pantalla menor a 600px
    if ($(window).width() < 600){
        $(".trabajo").each(function(){
            $(this).on("click", function(){
                $(this).toggleClass("mostrar-info")
            })
        })
    }
})