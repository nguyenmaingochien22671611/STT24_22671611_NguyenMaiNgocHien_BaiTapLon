// Lấy ID sản phẩm từ URL
function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Dùng ID để hiển thị thông tin sản phẩm
function displayProductDetails() {
    const productId = getProductIdFromURL();
    
    // Tạo dữ liệu mẫu cho từng sản phẩm (có thể lấy từ server hoặc file JSON)
    const products = [
        { id: '1', name: 'Đàn piano Yamaha U1A', price: '75,000,000đ', features: ['Tính năng tùy chỉnh âm thanh', 'Khử tiếng ồn'] },
        { id: '2', name: 'Đàn Piano Yamaha UX30A', price: '159,500,000đ', features: ['Âm thanh chất lượng cao', 'Thiết kế sang trọng'] },
        { id: '3', name: "Đàn Piano Điện Casio AP-460 BN", price: "13,500,000đ", features: ['Kích thước nhỏ gọn', 'Dễ dàng vận chuyển'] },

        { id: '4', name: 'Đàn Guitar Acoustic Morrison MGW 405CBK', price: '1,800,000đ', features: ['Kích thước nhỏ gọn', 'Dễ dàng vận chuyển'] },
        { id: '5', name: 'Đàn Guitar Acoustic, Guitar thùng - Yamaha F310 - Tobacco Brown Sunburst', price: '5,685,000đ', features: ['Kích thước nhỏ gọn', 'Dễ dàng vận chuyển'] },
        { id: '6', name: 'Đàn guitar Acoustic Yamaha JR2 Natural', price: '3,840,000đ', features: ['Kích thước nhỏ gọn', 'Dễ dàng vận chuyển'] },

        { id: '7', name: 'Bộ Trống Jazz Yamaha RDP 2F5', price: '10,250,000đ', features: ['Kích thước nhỏ gọn', 'Dễ dàng vận chuyển'] },
        { id: '8', name: 'PEARL-RS525SC-C703', price: '5,685,000đ', features: ['Kích thước nhỏ gọn', 'Dễ dàng vận chuyển'] },
        { id: '9', name: 'Bộ trống cơ Yamaha SBP0F4H', price: '15,890,000đ', features: ['Kích thước nhỏ gọn', 'Dễ dàng vận chuyển'] },
    
    ];

    // Tìm sản phẩm theo ID
    const product = products.find(prod => prod.id === productId);

    if (product) {
        // Hiển thị thông tin sản phẩm lên trang
        document.querySelector('.ctn_product_img').innerHTML = `<img src="../img/${product.name}.png" alt="${product.name}">`;
        document.querySelector('.ctn_product_detail_name').textContent = product.name;
        document.querySelector('.ctn_product_detail_price').textContent = product.price;

        const featuresHTML = product.features.map(feature => `<p>- ${feature}</p>`).join('');
        document.querySelector('.ctn_product_detail_key-features div').innerHTML = featuresHTML;
    } else {
        document.querySelector('.ctn_product_detail_name').textContent = "Sản phẩm không tồn tại";
    }
}

// Gọi hàm khi tải trang
window.onload = displayProductDetails;
