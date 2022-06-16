//Variables, Arrays and Objects. DOM manipulation

let items = [
    {
        name: "Ironhack T",
        price: 10,
        image: "img/1.jpg"
    },
    {
        name: "Ironhack Hoodie",
        price: 15,
        image: "img/2.jpeg"
    },
    {
        name: "Ironhack Sticker",
        price: 2,
        image: "img/3.jpg"
    },
    {
        name: "Ironhack Mug",
        price: 8,
        image: "img/4.jpg"
    },
]

let cart = [];


//Creamos la variable list para
let list = document.querySelector("#items");

//Recorremos el array items y lo pintamos en el HTML con los valores de cda objeto dentro del array
for (let i = 0; i < items.length; i++){
    list.innerHTML += `<li>
        <div>Name: ${items[i].name}</div>
        <div>Price: ${items[i].price}</div>
        <div><img src="${items[i].image}"/></div>
        <input type = "number" placeholder = "quantity" onchange = 'inputChange(${i}, "${items[i].name}", "${items[i].price}", "${items[i].image}")'/>
        <button>Buy item</button>
    </li>`
}

function showCart(){
    //Creamos la variable cartItems para los elementos que entrarán en el carro
    let cartItems = document.querySelector("#cart");
    let grandTotal = 0;
    cartItems.innerHTML = "";
    for (i = 0; i < cart.length; i++){
        grandTotal += cart[i].price * cart[i].quantity;
        cartItems.innerHTML += `<li>
            <div>Name: ${cart[i].name}</div>
            <div>Quantity: ${cart[i].quantity}</div>
            <div><img src="${cart[i].image}"/></div>
        </li>`
    }

    document.querySelector("#grandTotal").innerHTML = '$' +grandTotal;
}

function inputChange(i, name, price, image){
    console.log("I would like to buy the", i, "item named, ", name, "that costs $", price);
    let listItem = document.querySelectorAll("li")[i];
    let input = listItem.querySelector("input");
    let button = listItem.querySelector("button");

    button.onclick = function(){
        cart.push({
            quantity: input.value,
            name: name,
            price: price,
            image: image
        });
        console.log(cart);
        showCart();
    }    
}

//document.querySelector("#two").style.backgroundColor = "blue";