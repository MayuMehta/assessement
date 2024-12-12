// console.log('====================================');
// console.log("Connected");
// console.log('====================================');

fetch('https://cdn.shopify.com/s/files/1/0883/2188/4479/files/apiCartData.json?v=1728384889')
.then(res=>{
    return res.json()
})
.then(data=>{
    console.log(data.items)
    let cartItem=data.items;
    tabedata="";
    cartItem.map(value=>{
        tabedata+=`
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
            </tr>
            <tr>
                <td><img src="${value.image}" width="50%"/>
                    <span class="price">${value.handle}</span></td>
                <td class="price">${value.presentment_price}.00</td>
                <td><span id="quantity">${value.quantity}</span></td>
                <td>${value.presentment_price}.00</td>
            </tr>
        `
        document.getElementById('subtotal').innerHTML="Rs. "+value.presentment_price + ".00";
        document.getElementById('total').innerHTML="Rs. "+value.presentment_price + ".00";
    })
    document.getElementById('table').innerHTML=tabedata;

})
.catch(error=>{
    console.log(error);   
});

