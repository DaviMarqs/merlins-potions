let cart = 0
function addItem(add) {
    if (cart > -1) {
        cart ++
    }
    let newCart = cart
    console.log(newCart)
    document.getElementById("cartItem").innerText = newCart
    console.log("adicionado ao carrinho")
}
