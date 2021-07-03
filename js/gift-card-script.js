$(document).ready(function(){
    $(".input-nombre-destinatario").keyup(function(){
        $("#destinatario-h2").text($(this).val());
    });

    $("input[name='picked-color']").change(function(){
        $("#destinatario-text-container").removeClass("destinatario-text-default-color white-font black-font green-font purple-font orange-font");
        $("#destinatario-text-container").addClass($(this).val() + "-font");
    });

    $("input[name='picked-fuente']").change(function(){
        $("#destinatario-text-container").removeClass("container-default-font-size font-size-15px font-size-20px font-size-24px font-size-28px font-size-32px");
        $("#destinatario-text-container").addClass("font-size-" + $(this).val());
        console.log("font-size-" + $(this).val());
    });

    $("input[name='picked-fondo']").change(function(){
        $(".gift-card-container").removeClass("container-default-color primer-fondo segundo-fondo tercer-fondo cuarto-fondo quinto-fondo");
        $(".gift-card-container").addClass($(this).val());
    });

    $("#monto").keyup(function(){
        $("#gift-card-monto").text("$" + $(this).val());
    });

    $("input[name='picked-ubicacion']").change(function(){
        $(".gift-card-container").removeClass("gift-card-container-radio-centro gift-card-container-radio-top gift-card-container-radio-bottom");
        $(".gift-card-container").addClass("gift-card-container-" + $(this).val());
        console.log($(this).val());
    });
        
});
