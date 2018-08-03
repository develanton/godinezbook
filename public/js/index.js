//DA EL PERMISO AL ACCESO A LA PAGINA
var userid;
var username;
$(document).ready(function () {
  var accesDeny = "";
  var key = {
    session: sessionStorage.getItem("key")
  };
  $.ajax({
    type: "POST",
    url: "/api/check",
    data: key,
    success: function (msg) {
      accesDeny = msg.message;
      if (accesDeny != "Denegado") {
        url = "/wall";
        $(location).attr("href", url);
      }
      console.log(msg.message);
      userid = msg.authData.user.id;
      username = msg.authData.user.username;
    }
  });
});
//SE TERMINA EL VERIFICADOR DE ACCESO A LA PAGINA


var userData;
var iduser;
$("#loginbutton").on("click", function () {
  // sessionStorage.setItem('key', "nada");
  userData = {
    email: $("#emailUsuario").val(),
    password: $("#userPass").val()
  };
  console.log(userData);
  $.post("/api/login", userData, function (res) {
    // console.log("ENTRO!");

    console.log(res.mensaje);
    if (res.mensaje == "USUARIO") {
      console.log("USUARIO EQUIVOCADO");
      alert("Usuario no Existe favor de Reigistrarse");
      url = "/login";
      $(location).attr("href", url);
    } else {
      sessionStorage.setItem('key', res.token);
      sessionStorage.setItem('name', res.name);
      sessionStorage.setItem('id', res.id);

      console.log("token en front " + res.token);
      console.log("nombre en front " + res.name);

    }
  }).then(function () {

    $.ajax({
      url: '/api/posts',
      type: 'post',
      headers: {
        Authorization: sessionStorage.getItem('key'),   //If your header name has spaces or any other char not appropriate

      },
      dataType: 'json',
      success: function (data) {
        console.log(data.authData.user.id);
        url = "/wall";
        $(location).attr("href", url);
      }

    })
  });


});

$("#registerbutton").on("click", function () {
  console.log("BOTON REGISTRO");

});

