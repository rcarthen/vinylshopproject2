/// delete ajax call to delete each individual item when i customer clicks on delete button
$(document).on('click', "#delete", function (event) {
    // console.log($(this).attr("data"));
    const itemId = $(this).attr("data");
    event.preventDefault();

    $.ajax({
            url: "/api/cart/" + itemId,
            method: "DELETE",

        })
        .then(function () {
            renderCart()
        })

})

///creating a function to empyty the the cart table <div> in order to clear 
const renderCart = function () {
    $("#cartTable").empty()
    $.ajax({
        url: "/api/cart",
        method: "GET"
    }).then(function (data) {
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

///ajax call to delete/clear all items from the cart once the user clicks on the checkout button.

$(document).on('click', "#checkout", function (event) {
    event.preventDefault();

    $.ajax({
            url: "/api/cart",
            method: "DELETE",

        })
        .then(function () {
            renderCart()
        })

})