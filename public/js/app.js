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
  $('.carousel').carousel();
  $('select').formSelect();
});





//POST ajax call to post items...creating a cart for users to add items

$('#displayrow').on('click', ".addtobag", function (event) {
  event.preventDefault();
  //product quantity price 
  let product = $("#product").text()
  let quantity = $("#quantity").val()
  let price = $("#price").attr("data-price")
  console.log(product, quantity, price)
  $.ajax({
    url: "/api/cart",
    method: "POST",
    data: {
      product: product,
      quantity: quantity,
      price: price
    }
  }).then(function (data) {
      console.log(data);
      window.location.replace('/cart');
    }

  )

});


// GET ajax call to display one vinyl/product at a time before customer add to cart.

$('#displayrow').on('click', ".seeinfo", function (event) {
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


        `<div class="col s5 push-s7" id=cart> <span class="flow-text"> <img class= "responsive-img" src="${image}"></span></div>
       
        <div class="col s7 pull-s5" id=title>
        <h3 id="product">${vinyl_name}</h3>
        <h5>by ${artist}</h5>
        <h4 id="price" data-price=${data.price}>${"$"+ data.price} </h4>
        <div> ${info} </div>
        <span class="flow-text">
        <br/>
<a class="waves-effect waves-light btn-large addtobag"  id="bag">ADD TO BAG</a>
<br/>
<br/>
<div class="input-field col s12">
    <select id="quantity">
      <option value="" disabled selected>Choose your option</option>
      <option selected value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <label>QTY</label>
  </div>
</div>`

      )

    }

    $('select').formSelect();
  })
});


//GET ajax call to retrive all products then appends to the front-end.
$.ajax({

  url: "/api/vinyl",
  method: "GET",
}).then(function (response) {
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
      `<div class="card col s6 m4" id="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator responsive-img" id="vinylimg" src="${image}">
          </div>
          <div class="card-content" class="cardinfo">
            <span class="card-title activator grey-text text-darken-4">${vinyl_name}<i class="material-icons right">more_vert</i></span>
            <p><a href="#"><i class="medium material-icons"></i></a></p>
            <a class="waves-effect waves-teal btn-flat seeinfo" data-id= ${id}>See Info</a>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">${artist}<i class="material-icons right">close</i></span>
            <p id="description">${info}</p>
            <div class="card-action">
              <a class="waves-effect waves-teal btn-flat seeinfo" id="seeinfo" data-id=${id}>See Info</a>
              <div class="card col s10">
                <div class="card-image waves-effect waves-block waves-light ">
                  <img class="activator responsive-img"  id="image" src="${image}">
                </div>
              </div>
            </div>
          </div>
        </div>`

    )

  }

});