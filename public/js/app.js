
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

$.ajax({
    
  url: "/api/vinyl",
  method: "GET",
}) .then(function(response){
  for(let i = 0; i < response.length; i++){
      let data = response[i]
      // $("#displayrow").append(data.vinyl_name);
      // $("#displayrow").append(data.artist);
      // $("#displayrow").append(data.price);
      // $("#displayrow").append(data.genre);
      // $("#displayrow").append(data.quantity);
      // $("#displayrow").append(data.image);

      let vinyl_name= data.vinyl_name
      let artist = data.artist
      let genre= data.genre
      let price= data.price
      let quantity= data.quantity
      let image= data.image 
    

      $ ("#displayrow").append( 
      `<div class="card col s4">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" id="image" src="${image}">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">${vinyl_name}<i class="material-icons right">more_vert</i></span>
            <p><a href="#"><i class="medium material-icons"></i></a></p>
            <a class="waves-effect waves-teal btn-flat">ADD TO BAG</a>
          </div>


          
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">${vinyl_name}<i class="material-icons right">close</i></span>
            <p id="description">"Music Description"</p>
            <div class="card-action">
              <a class="waves-effect waves-teal btn-flat">ADD TO BAG</a>
              <div class="card col s10">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" id="image" src="${image}">
                </div>
              </div>
            </div>
          </div>
        </div>`

     )

      }
    
    })
   