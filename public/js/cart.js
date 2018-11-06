
$.ajax({
    url: "/api/cart",
    method:"GET"
}) .then(function(data){ 
console.log(data);
//id cartTable 
let subtotal= 0
for(let i=0; i<data.length; i++){
    let html= `<tr>
    <td>${data[i].product}</td>
    <td>${data[i].price}</td>
    <td>${data[i].quantity}</td>
    <td><a class="waves-effect waves-light btn-small" id="delete">Delete</a></td>
    </tr>` 
    
    $("#cartTable").append(html)

    subtotal = subtotal + data[i].price
    

}

$("#price").text(`$ ${subtotal}.00`);
$().text(`${data.length}`);

})




