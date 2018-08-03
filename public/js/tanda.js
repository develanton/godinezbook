$("#logOut").on("click", function () {
  sessionStorage.setItem('key', " ");
  url = "/login";
        $(location).attr("href", url);


});





$("#sendTanda").on("click", function () {
  console.log($("#nombreTanda").val());
  console.log($( "#participantes option:selected" ).text());
  console.log($( "#monto option:selected" ).text());
  console.log(sessionStorage.getItem("id"));
  var status;
  var tanda = {
    organizadorId: sessionStorage.getItem("id"),
    organizadorNombre: sessionStorage.getItem("name"),
    nombre: $("#nombreTanda").val(),
    capacidad: parseInt($( "#participantes option:selected" ).text()),
    monto: parseInt($( "#monto option:selected" ).text()),
    inscritos: 0,
    llena: "NO",
    activa:"ABIERTA",
    finalizada: "NO"
    
  };
  $.ajax({
    type: "POST",
    url: "/api/addTanda",
    data: tanda,
    success: function (msg) {

      console.log(msg.mensaje);
      url = "/tanda";
        $(location).attr("href", url);
       
  }
  });
});



//DA EL PERMISO AL ACCESO A LA PAGINA
var userid;
var username;
$(document).ready(function() {
    
  var accesDeny="";
  var key ={
    session: sessionStorage.getItem("key")
  }; 
  $.ajax({
    type: "POST",
    url: "/api/check",
    data: key,
    success: function (msg) {
      accesDeny=msg.message;
      if(accesDeny=="Denegado"){
       
        url = "/login";
          $(location).attr("href", url);
      }
      console.log(msg.message);
      userid=msg.authData.user.id;
      username=msg.authData.user.username;
      $("#nombreUS").text(sessionStorage.getItem("name"));
  }
  });
});
//SE TERMINA EL VERIFICADOR DE ACCESO A LA PAGINA