const products = [
    {
        id: 1,
        name: "Product A",
        price: 10
    },
    {
        id: 2,
        name: "Product B",
        price: 20
    },
    {
        id: 3,
        name: "Product C",
        price: 15
    }
];

const productList = document.getElementById("product-list");

function renderProducts() {

    productList.innerHTML = "";

    products.forEach(product => {

        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${product.name}</strong>
            - $${product.price}

            <button onclick="addProduct(${product.id})">
                Add To Cart
            </button>
        `;

        productList.appendChild(li);

    });

}

function addProduct(id) {

    const product = products.find(
        product => product.id === id
    );

    store.dispatch(addToCart(product));

    store.dispatch(calculateTotal());

}

renderProducts();