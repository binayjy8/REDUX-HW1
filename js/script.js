const cartList = document.getElementById("cart-list");
const totalPrice = document.getElementById("total-price");

function updateCart() {

    const state = store.getState();

    cartList.innerHTML = "";

    if (state.cartItems.length === 0) {
        cartList.innerHTML = "<li>Your cart is empty.</li>";
    } else {

        state.cartItems.forEach(item => {

            const li = document.createElement("li");

            li.innerHTML = `
                <strong>${item.name}</strong>
                - $${item.price}
                × ${item.quantity}

                <button onclick="removeItem(${item.id})">
                    Remove
                </button>
            `;

            cartList.appendChild(li);

        });

    }

    totalPrice.textContent = `Total: $${state.total}`;

}

function removeItem(id) {

    store.dispatch(removeFromCart(id));

    store.dispatch(calculateTotal());

}

store.subscribe(updateCart);

updateCart();