
// $("#login").on("click", function (event) {

//   event.preventDefault()
//   console.log("click works");

//   const userInfo = {
//       username: $("#username").val(),
//       email: $("email").val(),
//      password: $("#password").val()

//   }



$(document).ready(function(){
  $('.sidenav').sidenav();
});

$(document).ready(function () {
  $('.carousel').carousel();
});

$('#button name').on('click', function(req, res){
  console.log('');
});

$(document).ready(function() {
  $('select').material_select();
});


$.ajax({
    
  url: "/api/vinyl",
  method: "GET",
}) .then(function(response){
console.log(response)
  for(let i = 0; i < response.length; i++){
      let data = response[i]
      $("#vinylview").append(data.vinyl_name);
      $("#vinylview").append(data.artist);
      $("vinylview").append(data.price)


  }

 console.log(response);

})


                    