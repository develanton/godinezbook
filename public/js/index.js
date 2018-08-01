var userData;
var iduser;
$("#loginbutton").on("click", function () {
  // sessionStorage.setItem('key', "nada");
  userData = {
    nombre: $("#nombreUsuario").val(),
    password: $("#userPass").val()
  };
  console.log(userData);
  $.post("/api/login", userData, function (res) {
    // console.log("ENTRO!");

    console.log(res.mensaje);
    if(res.mensaje=="USUARIO"){
      console.log("USUARIO EQUIVOCADO");
      alert("Usuario no Existe favor de Reigistrarse");
      url = "/register";
        $(location).attr("href", url); 


    } else {
    sessionStorage.setItem('key', res.token);
    console.log("token en front " + res.token);
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

