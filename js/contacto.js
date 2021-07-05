$(document).ready(function () {
  $("#btn-send-form").click(function (e) {
    e.preventDefault();
    validar();
  });
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
