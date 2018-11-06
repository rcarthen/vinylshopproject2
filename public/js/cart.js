
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
    </tr>` 
    
    $("#cartTable").append(html)

    subtotal = subtotal + data[i].price

}

$("#price")

})




