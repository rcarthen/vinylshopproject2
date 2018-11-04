// $("#login").on("click", function (event) {

//   event.preventDefault()
//   console.log("click works");

//   const userInfo = {
//       username: $("#username").val(),
//       email: $("email").val(),
//      password: $("#password").val()

//   }



$(document).ready(function () {
  $('.sidenav').sidenav();
});

$(document).ready(function () {
  $('.carousel').carousel();
});



$('#displayrow').on('click', ".addtobag", function (event) {
  event.preventDefault();
  console.log("I've been clicked");
  let vinylId = $(this).data("id");
  console.log(vinylId)

  $.ajax({
    url: `/api/vinyl/${vinylId}`,
    method: 'GET'
  }).then(function (response) {
    console.log(response)
    $('#displayrow').empty()
    for (let i = 0; i < response.length; i++) {
      let data = response[i]
      let vinyl_name = data.vinyl_name
      let artist = data.artist
      let genre = data.genre
      let price = data.price
      let quantity = data.quantity
      let image = data.image
      let info = data.info
      let id = data.id
      $("#displayrow").append(
        ` 
        <div class="col m6"> 
        <img src="${image}">
        </div>
<div class="col m6"> <h3>${vinyl_name}</h3>
<h5>by ${artist}</h5>
<h4>${"$"+ data.price} </h4>
<div> ${info} </div>


<a class="waves-effect waves-light btn-large" id=bag>ADD TO BAG</a>`

      )

    }

  })
});

$.ajax({

  url: "/api/vinyl",
  method: "GET",
}).then(function (response) {
  $('#displayrow').empty()
  for (let i = 0; i < response.length; i++) {
    let data = response[i]
    // $("#displayrow").append(data.vinyl_name);
    // $("#displayrow").append(data.artist);
    // $("#displayrow").append(data.price);
    // $("#displayrow").append(data.genre);
    // $("#displayrow").append(data.quantity);
    // $("#displayrow").append(data.image);

    let vinyl_name = data.vinyl_name
    let artist = data.artist
    let genre = data.genre
    let price = data.price
    let quantity = data.quantity
    let image = data.image
    let info = data.info
    let id = data.id


    $("#displayrow").append(
      `<div class="card col s4">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="${image}">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">${vinyl_name}<i class="material-icons right">more_vert</i></span>
            <p><a href="#"><i class="medium material-icons"></i></a></p>
            <a class="waves-effect waves-teal btn-flat addtobag" data-id= ${id}>ADD TO BAG</a>
          </div>


          
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">${vinyl_name}<i class="material-icons right">close</i></span>
            <p id="description">${info}</p>
            <div class="card-action">
              <a class="waves-effect waves-teal btn-flat addtobag" data-id=${id}>ADD TO BAG</a>
              <div class="card col s10">
                <div class="card-image waves-effect waves-block waves-light ">
                  <img class="activator" id="image" src="${image}">
                </div>
              </div>
            </div>
          </div>
        </div>`





    )

  }

})