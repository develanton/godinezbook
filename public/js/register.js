var userData;
var iduser;
$("#registerButton").on("click", function () {
  console.log("DUDE");
  var userReg = {
    name: $("#firstName").val(),
    last: $("#lastName").val(),
    email: $("#email").val(),
    password: $("#userPass").val(),
    birthday: $("#birthday").val(),
    gender: $("#gender").val()
  };
  $.ajax({
    type: "POST",
    url: "/api/registerUser",
    data: userReg,
    success: function (req) {
      if (req.mensaje == "USUARIO") {
        console.log("USUARIO EQUIVOCADO");
        alert("Usuario ya Existe favor de Reigistrarse con nuevo usuario");
        url = "/login";
        $(location).attr("href", url);
      } else {
        alert("Usuario Registrado Correctamente Favor de hacer Login");
        url = "/login";
        $(location).attr("href", url);
      }

      console.log(msg.mensaje);

    }
  });


  console.log("FUNCION BOTON");

});

