var userData;
var iduser;
$("#registerButton").on("click", function () {
  var userReg = {
    nombre: $("#nombreUsuarioR").val(),
    apellido: $("#apellidoUsuario").val(),
    email: $("#emailU").val(),
    password: $("#userPassR").val(),
    nacimiento: $("#nacimiento").val()
  };

  $.ajax({
    type: "POST",
    url: "/api/registerUser",
    data: userReg,
    success: function (req) {
      if (req.mensaje == "USUARIO") {
        console.log("USUARIO EQUIVOCADO");
        alert("Usuario ya Existe favor de hacer login con su usuario");
        url = "/login";
        $(location).attr("href", url);
      };
      if (req.mensaje == "AGREGADO") {
        console.log("USUARIO REGISTRADO");
        alert("USUARIO REGISTRADO CORRECTAMENTE FAVOR DE HACER LOGIN");
        $("#log").removeClass("active");
        $("#log").removeClass("show");
        $("#log").attr("aria-selected", "false");
        $("#registro").addClass("active");
        $("#registro").addClass("show");
        $("#registro").attr("aria-selected", "true");
        $("#home").removeClass("show");
        $("#home").removeClass("active");
        $("#profile").addClass("show");
        $("#profile").addClass("active");
      }
    }
  });


  console.log("FUNCION BOTON");

});

