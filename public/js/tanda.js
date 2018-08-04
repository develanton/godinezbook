$("#logOut").on("click", function () {
  sessionStorage.setItem('key', " ");
  url = "/login";
        $(location).attr("href", url);


});


$(".unirte").on("click", function () {
  var idTanda={
    idTanda :$(this).parent().attr("data-id"),
    idSesion: parseInt(sessionStorage.getItem("id")), 
    idNombre: sessionStorage.getItem("name") };

console.log (idTanda);

$.ajax({
  type: "POST",
  url: "/api/unirTanda",
  data: idTanda,
  success: function (msg) {

    console.log(msg.mensaje);
    url = "/tanda";
      $(location).attr("href", url);
     
}
});

});


$(".pago").on("click", function () {
  var idTanda={
    idTanda :$(this).parent().attr("idtanda"),
    pago :$(this).parent().attr("casilla"),
    idSesion: parseInt(sessionStorage.getItem("id")), 
    idNombre: sessionStorage.getItem("name") };

console.log (idTanda);

$.ajax({
  type: "POST",
  url: "/api/pago",
  data: idTanda,
  success: function (res) {

    if(res.mensaje=="NO ERES EL ORGANIZADOR"){
    alert(res.mensaje);
  }else if(res.mensaje=="No se puede registrar pago sino están todos los participantes")
  {
      alert(res.mensaje);}
      else{
    url = "/tanda";
    $(location).attr("href", url);}
    // url = "/tanda";
    //   $(location).attr("href", url);
     
}
});

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
    capacidad: 4,
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
       
        url = "/";
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