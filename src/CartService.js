var svc = {};

svc.cart = cart;
// cart = [["product": productObject, "amount": 1]...]

function cart() {
	return JSON.parse(localStorage.getItem('cart'));
}

function addToCart(product) {
	var updatedCart = []
	const currentCart = JSON.parse(localStorage.getItem('cart'));
	for (let i=0; i < currentCart.length; i++) {
		if (currentCart[i]["product"].id == product.id) {
			currentCart[i]["amount"]++ 
		}
	}
	localStorage.setItem('cart', JSON.stringify(updatedCart));
}

function removeFromCart(product) {
	var updatedCart = []
	const currentCart = JSON.parse(localStorage.getItem('cart'));
	for (let i=0; i < currentCart.length; i++) {
		if (currentCart[i]["product"].id == product.id) {
			currentCart[i]["amount"]-- 
		}
	}
	localStorage.setItem('cart', JSON.stringify(updatedCart));
}




export default svc;
