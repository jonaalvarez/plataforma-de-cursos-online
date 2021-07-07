$(document).ready(function () {
  let contentBoxUnoOpen = true;
  $("#introduccion").addClass("signo-menos");
  $("#content-box-uno").click(function () {
    if (contentBoxUnoOpen) {
      $("#content-uno").hide();
      contentBoxUnoOpen = false;
      $("#introduccion").removeClass("signo-menos");
    } else {
      $("#content-uno").show();
      contentBoxUnoOpen = true;
      $("#introduccion").addClass("signo-menos");
    }
  });

  let contentBoxDosOpen = true;
  $("#unidad-uno").addClass("signo-menos");
  $("#content-box-dos").click(function () {
    if (contentBoxDosOpen) {
      $("#content-dos").hide();
      contentBoxDosOpen = false;
      $("#unidad-uno").removeClass("signo-menos");
    } else {
      $("#content-dos").show();
      contentBoxDosOpen = true;
      $("#unidad-uno").addClass("signo-menos");
    }
  });

  let contentBoxTresOpen = true;
  $("#unidad-dos").addClass("signo-menos");
  $("#content-box-tres").click(function () {
    if (contentBoxTresOpen) {
      $("#content-tres").hide();
      contentBoxTresOpen = false;
      $("#unidad-dos").removeClass("signo-menos");
    } else {
      $("#content-tres").show();
      contentBoxTresOpen = true;
      $("#unidad-dos").addClass("signo-menos");
    }
  });

  let contentBoxCuatroOpen = true;
  $("#unidad-tres").addClass("signo-menos");
  $("#content-box-cuatro").click(function () {
    if (contentBoxCuatroOpen) {
      $("#content-cuatro").hide();
      contentBoxCuatroOpen = false;
      $("#unidad-tres").removeClass("signo-menos");
    } else {
      $("#content-cuatro").show();
      contentBoxCuatroOpen = true;
      $("#unidad-tres").addClass("signo-menos");
    }
  });
});
