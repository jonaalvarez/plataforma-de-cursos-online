$(document).ready(function(){
    let counter = 0;
    $(".btn").click(function(e){
        e.preventDefault();
        counter++;
        if(counter < 9){
            $(".element-form-container").append(`<div id=${counter} class="element-form">
            <input type="text" placeholder="Nombre">
            <input type="text" placeholder="Apellido">
            <input type="text" placeholder="DNI">
            <span class="btn-borrar"><i class="fas fa-minus-circle"></i></span>
            </div>`);
        }
    })

    $("#0").click(function(e){
        console.log(e);
    })

     
})