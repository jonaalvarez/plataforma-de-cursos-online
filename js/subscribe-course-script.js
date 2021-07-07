$(document).ready(function () {
  $("#modal-inscribirse").hide();
  let counter = 0;

  $("#subscribe-user").append(
    `<div id=${"element-form-" + 0} class="element-form">
        <input type="text" placeholder="Nombre" required>
        <input type="text" placeholder="Apellido" required>
        <input type="text" placeholder="DNI" required>
        <span id=${0} class="btn-borrar"><i class="fas fa-minus-circle"></i></span>
      </div>`
  );

  $(".price-subscribe").text("1000.-");

  $(".btn").click(function (e) {
    e.preventDefault();
    counter++;
    if (counter < 7) {
      $("#subscribe-user").append(
        `<div id=${"element-form-" + counter} class="element-form">
                <input type="text" placeholder="Nombre">
                <input type="text" placeholder="Apellido">
                <input type="text" placeholder="DNI">
                <span id=${counter} class="btn-borrar"><i class="fas fa-minus-circle"></i></span>
              </div>`
      );

      $(".price-subscribe").text(counter + 1 + "000.-");
    }
  });

  function borrarElemento(id) {
    if (counter >= 1) {
      $("#element-form-" + id).remove();
      counter--;
      let contador = counter;
      $(".price-subscribe").text(contador + 1 + "000.-");
    }
  }

  $("#subscribe-user").on("click", ".btn-borrar", function (e) {
    var id = $(this).attr("id");
    borrarElemento(id);
  });

  $("#btn-subscribe").click(function (e) {
    e.preventDefault();
    $("#modal-inscribirse").fadeIn();
    $("#monto-modal").text("Monto a pagar: $" + (counter + 1) + "000");
  });

  $("#modal-inscribirse").click(function () {
    $("#modal-inscribirse").fadeOut();
  });
});
