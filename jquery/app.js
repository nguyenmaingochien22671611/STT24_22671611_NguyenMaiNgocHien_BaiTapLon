let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let products = [
    {
        "name":" Nike Solo Swoosh",
        "price": 100,
        "image": "../image/1.webp"
    },
    {
        "name":" Nike Dri-FIT Running Division",
        "price": 105,
        "image": "../image/2.webp"
    },
    {
        "name":" Nike Sportswear Premium ",
        "price": 209,
        "image": "../image/3.webp"
    },
    {

        "name":" Jordan Essentials",
        "price": 200,
        "image": "../image/4.webp"
    },
    {
        "name":" Nike Essentials Premium",
        "price": 300,
        "image": "../image/5.webp"
    },
    {
        "name":"Jordan Essentials Premium",
        "price": 200,
        "image": "../image/6.webp"
    },
    {
        "name":" Jordan Essentials",
        "price": 200,
        "image": "../image/7.webp"
    },
    {
        "name":" Jordan Nike v1",
        "price": 400,
        "image": "../image/1.webp"
    },
    {
        "name":" Nike Champion Essentials",
        "price": 205,
        "image": "../image/2.webp"
    },
    {
        "name":" Jordan Essentials v1",
        "price": 250,
        "image": "../image/8.webp"
    },
    {
        "name":" Nike Jordan Sportswear",
        "price": 210,
        "image": "../image/7.webp"
    },
    {
        "name":" Nike Champion Essentials",
        "price": 230,
        "image": "../image/6.webp"
    },
    {
        "name":" Nike Champion Primeum",
        "price": 265,
        "image": "../image/5.webp"
    },
    {
        "name":" Jordan Essentials",
        "price": 205,
        "image": "../image/4.webp"
    },
    {
        "name":" Nike Jordan Sportswear ",
        "price": 262,
        "image": "../image/3.webp"
    },
    {
        "name":" Nike Sportswear Premium ",
        "price": 183,
        "image": "../image/2.webp"
    }

];
let cart = [];

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
    const initApp = () => {
       
        products.forEach((value, key) =>{
            let newDiv = document.createElement('div');
            newDiv.classList.add('item');
            newDiv.innerHTML =  
            `<img src="${value.image}" alt="" id="imgPD">
            <h2>${value.name}</h2>
            <div class="price">$${value.price.toLocaleString()}</div>
            <button class="detail" onclick="showDetail(${key})">Details</button>
            <button class="addCart" onclick="addToCard(${key})">Add To Cart</button>`
            listProductHTML.appendChild(newDiv);
        })
    }


let quantity = document.querySelector('span');
function addToCard(key){
    if(cart[key] == null){
        // copy product form list to list card
        cart[key] = JSON.parse(JSON.stringify(products[key]));
        cart[key].quantity = 1;
        alert("Thêm thành công ")
    }
    else{
        alert("Sản phẩm đã có trong giỏ hàng")
    }
    reloadCard();   
   
}

function reloadCard(){
       
        let count = 0;
        let totalPrice = 0;
        listCartHTML.innerHTML = "";   
        cart.forEach((value, key)=>{
            totalPrice += value.price;
            count = count + value.quantity;
            
            if(value != null){
                let newItem = document.createElement('div');
                newItem.classList.add('item');
                newItem.innerHTML = 
                `
            <div class="image">
                    <img src="${value.image}">
                </div>
                <div class="name">
                ${value.name}
                </div>
                <div class="totalPrice">$${value.price}</div>
                <div class="quantity">
                    <span class="down" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</span>
                    <span>${value.quantity}</span>
                    <span class="up" onclick="changeQuantity(${key}, ${value.quantity + 1})" >+</span>
                </div>
            `;
            ;
                    listCartHTML.appendChild(newItem);
                    
            }
            localStorage.setItem("myCart",JSON.stringify(cart));
           
        })
        document.querySelector('span').innerText = count;
    
    }
    //thay đổi số lượng sản phẩm
    function changeQuantity(key, quantity){
        //nếu trong giỏ hàng sản phẩm có số lượng =0 thì xóa sản phẩm khỏi giỏ hàng
        if(quantity == 0){
            delete cart[key];
        }
         //nếu trong giỏ hàng sản phẩm có số lượng  > 0 thì tiền = (số lượng * đơn giá)
        else{
            cart[key].quantity = quantity;
            cart[key].price = quantity * products[key].price;
        }
        reloadCard();

    }
    //chuyển sang trang chi tiết sản phẩm
    function showDetail(key){
        cart[key] = JSON.parse(JSON.stringify(products[key]));
        localStorage.setItem("detail",JSON.stringify(cart[key]));
        window.location.href = "../html/detail.html"
       
    }
    //chuyển sang trang thanh toán
    function pay(){
    window.location.href = "../html/pay.html";
    }
    initApp();

