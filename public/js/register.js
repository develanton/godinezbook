var userData;
var iduser;

$("#registerButton").on("click", function () {
  console.log("DUDE");
  var userReg = {
<<<<<<< HEAD
    name: $("#firstName").val(),
    last: $("#lastName").val(),
    email: $("#email").val(),
    password: $("#userPass").val(),
    birthday: $("#birthday").val(),
    gender: $("#gender").val()
=======
    nombre: $("#nombreUsuarioR").val(),
    apellido: $("#apellidoUsuario").val(),
    email: $("#emailU").val(),
    password: $("#userPassR").val(),
    nacimiento: $("#nacimiento").val()
>>>>>>> abes
  };

  $.ajax({
    type: "POST",
    url: "/api/registerUser",
    data: userReg,
    success: function (req) {
      if (req.mensaje == "USUARIO") {
        console.log("USUARIO EQUIVOCADO");
<<<<<<< HEAD
        alert("Usuario ya Existe favor de Reigistrarse con nuevo usuario");
        url = "/login";
        $(location).attr("href", url);
      } else {
        alert("Usuario Registrado Correctamente Favor de hacer Login");
        url = "/login";
        $(location).attr("href", url);
      }

      console.log(msg.mensaje);

=======
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
>>>>>>> abes
    }
  });


  console.log("FUNCION BOTON");

});

