let productInput = document.querySelector('.productInput')
let addButton = document.querySelector('.addButton')

let priceInput = document.querySelector('.priceInput')
let quantityInput = document.querySelector('.quantityInput')

let cart = []
if(localStorage.cart){
    cart  = JSON.parse(localStorage.cart)
}


addButton.addEventListener('click',()=> {
    for (let i in cart){
        if (productInput.value === cart[i].Product){
            cart[i].Quantity = parseInt(cart[i].Quantity ) + parseInt(quantityInput.value) 
            localStorage.cart = JSON.stringify(cart)
            location.reload()
            return
        

        }
    }

    let item = {Product:productInput.value, Price:priceInput.value, Quantity: quantityInput.value }
    cart.push(item)

    localStorage.cart = JSON.stringify(cart)
    console.log(localStorage)
    location.reload()

})


function displayCart(){
    let productList =  document.querySelector('.productList')
    for(let i in cart){     
         let item = cart[i]
         let listItem = document.createElement('li')
         listItem.innerHTML = 'Product name: ' + item.Product + ' Product Price: ' + item.Price + ' Product quantity :' + item.Quantity
         productList.appendChild(listItem)
         
    }
}

displayCart()