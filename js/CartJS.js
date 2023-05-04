// Lấy danh sách sản phẩm từ localStorage
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

// Hiển thị danh sách sản phẩm trên trang
const cartItemsDiv = document.querySelector("#cart-items");
cartItems.forEach((item) => {

    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
    const existingCartItem = cartItems.find((cartItem) => cartItem.name === item.name);
    if (existingCartItem) {
    } else {
        // Nếu sản phẩm chưa tồn tại, thêm sản phẩm mới vào giỏ hàng
        cartItems.push({
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: 1,
        });
    }
    
    // Tạo phần tử HTML để hiển thị thông tin sản phẩm
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    const cartItemImage = document.createElement("img");
    cartItemImage.src = `images/${item.image}`;
    cartItem.appendChild(cartItemImage);

    const cartItemInfo = document.createElement("div");
    cartItemInfo.classList.add("cart-item-info");

    const cartItemName = document.createElement("div");
    cartItemName.classList.add("cart-item-name");
    cartItemName.innerText = item.name;
    cartItemInfo.appendChild(cartItemName);

    // chức năng tăng giảm số lượng sản phẩm
    const cartItemQuantity = document.createElement("div");
    cartItemQuantity.classList.add("cart-item-quantity");
    const quantityLabel = document.createElement("span");
    quantityLabel.innerText = "Quantity: ";
    cartItemQuantity.appendChild(quantityLabel);
    const quantity = document.createElement("span");
    quantity.innerText = item.quantity;
    cartItemQuantity.appendChild(quantity);

    // Thêm class cho button tăng số lượng sản phẩm
    const minusButton = document.createElement("button");
    minusButton.classList.add("minus-button"); // Thêm class "minus-button"
    minusButton.innerText = "-";
    minusButton.addEventListener("click", () => {
        if (item.quantity > 1) {
            item.quantity--;
            quantity.innerText = item.quantity;
            localStorage.setItem("cart", JSON.stringify(cartItems));
        } else {
            // Xóa sản phẩm khỏi danh sách
            const index = cartItems.findIndex((cartItem) => cartItem.name === item.name);
            cartItems.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cartItems));
            // Xóa phần tử HTML tương ứng trên trang
            cartItem.remove();
        }
    });

    cartItemQuantity.appendChild(minusButton);
    quantity.innerText = item.quantity;
    cartItemQuantity.appendChild(quantity);

    // Thêm class cho button tăng số lượng sản phẩm
    const plusButton = document.createElement("button");
    plusButton.innerText = "+";
    plusButton.classList.add("cart-item-quantity-button");
    plusButton.classList.add("cart-item-quantity-button-plus");
    plusButton.addEventListener("click", () => {
        item.quantity++;
        quantity.innerText = item.quantity;
        localStorage.setItem("cart", JSON.stringify(cartItems));
    });
    cartItemQuantity.appendChild(plusButton);

    cartItemInfo.appendChild(cartItemQuantity);

    const cartItemPrice = document.createElement("div");
    cartItemPrice.classList.add("cart-item-price");
    cartItemPrice.innerText = item.price + "$";
    cartItemInfo.appendChild(cartItemPrice);

    cartItem.appendChild(cartItemInfo);

    // Thêm button đặt hàng
    const checkoutButton = document.createElement("button");
    checkoutButton.setAttribute("class", "checkout-button");
    checkoutButton.innerText = "Order Now";
    checkoutButton.addEventListener("click", () => {
        // Thêm xử lý đặt hàng ở đây
        alert("Đơn hàng của bạn đã được đặt thành công. Chúng tôi sẽ liên hệ với bạn sớm nhất có thể. Trân trọng cảm ơn !")
    });
    cartItem.appendChild(checkoutButton);

    // Thêm sản phẩm vào danh sách
    cartItemsDiv.appendChild(cartItem);
});

// Lưu danh sách sản phẩm mới vào localStorage
localStorage.setItem("cart", JSON.stringify(cartItems));

function clearAll() {
    localStorage.clear();
    location.reload();
}
//head
function notification() {
    alert("Hiện tại không có thông báo nào !");
}
function support() {
    alert("Đang chuyển đến trang Admin !");
    window.location.href = "https://www.facebook.com/NguyenQuan443";
}

// chức năng tìm kiếm sản phẩm 
document.getElementById("buttonS").addEventListener("click", function () {

    var searchValue = document.getElementById("input").value.toLowerCase();
    if (searchValue === '') {
        alert("Vui lòng nhập tên sản phẩm để tìm kiếm.");
        return;
    }
    var productItems = document.querySelectorAll("#cart-items .cart-item");

    var found = false;
    for (var i = 0; i < productItems.length; i++) {
        var productName = productItems[i].querySelector(".cart-item-name").textContent.toLowerCase();
        if (productName.indexOf(searchValue) > -1) {
            productItems[i].classList.add("blink");
            console.log("Tìm thấy sản phẩm");
            found = true;
            setTimeout(function(){
                productItems[i].classList.remove("blink");
            }, 1000);
            break;
        }
    }
    if (!found) {
        alert("Không tìm thấy sản phẩm.");
    }
});
