$(document).ready(function () {
    let caracterCounterTope = 1000; 

  $("#btn-send-form").click(function (e) {
    e.preventDefault();
    validar();
  });

  $("#contactoTextAreaDescripcion").keyup(function(e){
    let caracteresLength = e.target.value.length;
    let cuenta = caracterCounterTope - caracteresLength;
    if(cuenta >= 0) {
        $("#counter-caracteres-text").empty();
        $("#counter-caracteres-text").append(`<p id="caracteres-restantes-nuevo">Caracteres Restantes: ${cuenta} - Ingresados: ${caracteresLength}</p>`);
    }
  })
});

function isEmail(email) {
  let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function isPhoneNumber(number) {
  let regex = /(\+?54)?(15|(0?\d{0,4}))?((\d{4})(\d{4}))/g;
  return regex.test(number);
}

function validar() {
  let error = false;
  let mensajesError = "";
  //Input nombre
  if ($("#contactoInputNombre").val() === "") {
    error = true;
    mensajesError += "El campo nombre es obligatorio";
    $("#mensaje-error").text(mensajesError);
    $("#contactoInputNombre").addClass("borde-rojo-error");
    return;
  } else {
    $("#mensaje-error").empty();
    $("#contactoInputNombre").removeClass("borde-rojo-error");
    error = false;
  }

  //Input apellido
  if ($("#contactoInputApellido").val() === "") {
    error = true;
    mensajesError += "El campo apellido es obligatorio";
    $("#mensaje-error").text(mensajesError);
    $("#contactoInputApellido").addClass("borde-rojo-error");
    return;
  } else {
    $("#mensaje-error").empty();
    $("#contactoInputApellido").removeClass("borde-rojo-error");
    error = false;
  }

  //Input Mail
  if (isEmail($("#contactoInputMail").val()) === false) {
    error = true;
    mensajesError += "Ingrese un mail válido";
    $("#mensaje-error").text(mensajesError);
    $("#contactoInputMail").addClass("borde-rojo-error");
    return;
  } else {
    $("#mensaje-error").empty();
    $("#contactoInputMail").removeClass("borde-rojo-error");
    error = false;
  }

  //Input Numero de celular
  if (isPhoneNumber($("#contactoInputNumeroDeCelular").val()) === false) {
    error = true;
    mensajesError += "El campo celular es inválido";
    $("#mensaje-error").text(mensajesError);
    $("#contactoInputNumeroDeCelular").addClass("borde-rojo-error");
    return;
  } else {
    $("#mensaje-error").empty();
    $("#contactoInputNumeroDeCelular").removeClass("borde-rojo-error");
    error = false;
  }

  //Input text area
  if ($("#contactoTextAreaDescripcion").val() === "") {
    error = true;
    mensajesError += "El campo de texto es obligatorio";
    $("#mensaje-error").text(mensajesError);
    $("#contactoTextAreaDescripcion").addClass("borde-rojo-error");
    return;
  } else {
    $("#mensaje-error").empty();
    $("#contactoTextAreaDescripcion").removeClass("borde-rojo-error");
    error = false;
  }
}
