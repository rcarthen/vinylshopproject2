$(document).on('click', "#delete", function (event) {
    // console.log($(this).attr("data"));
    const itemId = $(this).attr("data");
    event.preventDefault();

    $.ajax({
        url: "/api/cart/" + itemId,
        method: "DELETE",

    })
    .then(function(){
renderCart()
    })

})
const renderCart = function () { 
    $("#cartTable").empty()
    $.ajax({
        url: "/api/cart",
        method: "GET"
    }).then(function (data) {
        console.log("Hello", data);
        //id cartTable 
        let subtotal = 0
        for (let i = 0; i < data.length; i++) {
            let html = `<tr>
    <td>${data[i].product}</td>
    <td>${data[i].price}</td>
    <td>${data[i].quantity}</td>
    <td><a class="waves-effect waves-light btn-small delete" id="delete" data=${data[i].id}>Delete</a></td>
    </tr>`

            $("#cartTable").append(html)

            subtotal = subtotal + data[i].price


        }

        $("#price").text(`$ ${subtotal}.00`);
        $().text(`${data.length}`);

    })

}

renderCart();

$(document).on('click', "#checkout", function (event) {
    event.preventDefault();

    $.ajax({
        url: "/api/cart" ,
        method: "DELETE",

    })
    .then(function(){
renderCart()
    })

})