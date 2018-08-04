$("#logOut").on("click", function () {
  sessionStorage.setItem('key', " ");
  url = "/login";
        $(location).attr("href", url);


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