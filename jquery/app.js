// Khai báo biến toàn cục
let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');

// Danh sách sản phẩm
let products = [
    
];

// Khởi tạo giỏ hàng từ localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Hàm khởi tạo ứng dụng
function initApp() {
    renderProductList();
    renderCart();
    updateCartCount();
}

// Hiển thị danh sách sản phẩm
function renderProductList() {
    products.forEach((product, index) => {
        const productHTML = `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <button class="add-to-cart" data-id="${index}" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
            </div>
        `;
        listProductHTML.innerHTML += productHTML;
    });

    // Gắn sự kiện cho nút "Add to Cart"
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const product = {
                id: button.dataset.id,
                name: button.dataset.name,
                price: parseFloat(button.dataset.price)
            };
            addToCart(product);
        });
    });
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Sản phẩm đã được thêm vào giỏ hàng!");
    renderCart();
    updateCartCount();
}

// Hiển thị giỏ hàng
function renderCart() {
    listCartHTML.innerHTML = '';
    cart.forEach(item => {
        const cartItemHTML = `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>Quantity: ${item.quantity}</span>
                <span>Price: $${item.price}</span>
            </div>
        `;
        listCartHTML.innerHTML += cartItemHTML;
    });
}

// Cập nhật số lượng sản phẩm trong biểu tượng giỏ hàng
function updateCartCount() {
    iconCartSpan.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Mở/Đóng giỏ hàng
iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

// Chuyển sang trang thanh toán
function pay() {
    window.location.href = "../html/pay.html";
}

// Gọi hàm khởi tạo ứng dụng
initApp();

// Hiển thị giỏ hàng với nút xóa
function renderCart() {
    listCartHTML.innerHTML = '';
    cart.forEach((item, index) => {
        const cartItemHTML = `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>Quantity: ${item.quantity}</span>
                <span>Price: $${item.price}</span>
                <button class="remove-from-cart" data-id="${item.id}">Xóa</button>
            </div>
        `;
        listCartHTML.innerHTML += cartItemHTML;
    });

    // Gắn sự kiện cho nút "Xóa"
    document.querySelectorAll('.remove-from-cart').forEach(button => {
        button.addEventListener('click', () => {
            removeFromCart(button.dataset.id);
        });
    });
}

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
    updateCartCount();
    alert("Sản phẩm đã được xóa khỏi giỏ hàng!");
}

// Lấy giá trị tổng giá và các phần tử cần thiết từ DOM
let totalPrice = 0;
let total = document.getElementById("total");
let datHang = document.getElementById("btnDatHang");
let tienMat = document.getElementById("httt-1");
let chuyenKhoan = document.getElementById("httt-2");
let input = document.querySelectorAll(".avc");
let tenKH = document.getElementById("kh_ten");
let emailKH = document.getElementById("kh_email");

// Lấy thông tin người dùng từ localStorage và hiển thị
let user = JSON.parse(localStorage.getItem("user"));
tenKH.value = user.username;
emailKH.value = user.email;

window.onload = function() {
    // Lấy giỏ hàng từ localStorage và hiển thị
    let cart = JSON.parse(localStorage.getItem("myCart"));
    cart.forEach((value) => {
        if(value != null) {
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.innerHTML = `
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 class="my-0">${value.name}</h6>
                        <small class="text-muted">Số lượng: ${value.quantity}</small>
                    </div>
                    <span class="text-muted">${value.price},000 VND</span>
                </li>
            `;
            document.querySelector(".listCart").appendChild(newItem);
        }
    });
    total.innerText = localStorage.getItem("totalPrice") + `,000 VND`;
}

// Ngân hàng và tài khoản cho chuyển khoản
let myBank = {
    BANK_ID: "ICB",
    ACCOUNT_NO: "105874911011"
};

// Xử lý khi nhấn nút "Đặt Hàng"
datHang.addEventListener("click", () => {
    // Kiểm tra thông tin khách hàng
    for (var i = 0; i < input.length; i++) {if (input[i].value.trim() === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return; // Dừng nếu có thông tin thiếu
    }
}

// Kiểm tra phương thức thanh toán
if (!tienMat.checked && !chuyenKhoan.checked) {
    alert("Vui lòng lựa chọn hình thức thanh toán!");
    return;
}

// Xử lý thanh toán tiền mặt
if (tienMat.checked && !chuyenKhoan.checked) {
    alert("Thanh toán thành công!");
    localStorage.removeItem("myCart"); // Xóa giỏ hàng khỏi localStorage
    localStorage.removeItem("totalPrice"); // Xóa tổng giá khỏi localStorage
    window.location.href = "../index.html"; // Chuyển về trang chủ
}

// Xử lý thanh toán qua chuyển khoản
else if (!tienMat.checked && chuyenKhoan.checked) {
    totalPrice = localStorage.getItem("totalPrice");
    alert("Vui lòng thanh toán qua QR CODE để hoàn tất đặt hàng!");

    // Tạo URL cho mã QR
    let qrcode = 
        'https://img.vietqr.io/image/' + myBank.BANK_ID + '-'+ myBank.ACCOUNT_NO + 
        '-compact2.png?amount=' + totalPrice + '000' + '&addInfo=thanh toan cho nikeShop';

    // Mở mã QR trong tab mới
    let win = window.open(qrcode, "_blank");
    win.focus();

    // Sau khi chuyển khoản thành công
    localStorage.removeItem("myCart"); // Xóa giỏ hàng khỏi localStorage
    localStorage.removeItem("totalPrice"); // Xóa tổng giá khỏi localStorage
    window.location.href = "../index.html"; // Chuyển về trang chủ
}
});