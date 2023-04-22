
// Lấy danh sách sản phẩm từ localStorage
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

// Hiển thị danh sách sản phẩm trên trang
const cartItemsDiv = document.querySelector("#cart-items");

cartItems.forEach((item) => {
    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
    const existingCartItem = cartItems.find((cartItem) => cartItem.name === item.name);

    if (existingCartItem) {
        // Nếu sản phẩm đã tồn tại, tăng số lượng lên 1
        // existingCartItem.quantity++;
        // fix load sản phẩm tăng số lượng
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
    cartItemImage.src = `images/${item.image}`; // đường dẫn hình ảnh
    cartItem.appendChild(cartItemImage);

    const cartItemInfo = document.createElement("div");
    cartItemInfo.classList.add("cart-item-info");

    const cartItemName = document.createElement("div");
    cartItemName.classList.add("cart-item-name");
    cartItemName.innerText = item.name;
    cartItemInfo.appendChild(cartItemName);

    const cartItemQuantity = document.createElement("div");
    cartItemQuantity.classList.add("cart-item-quantity");
    cartItemQuantity.innerText = "Số lượng: " + item.quantity;
    cartItemInfo.appendChild(cartItemQuantity);

    const cartItemPrice = document.createElement("div");
    cartItemPrice.classList.add("cart-item-price");
    cartItemPrice.innerText = item.price + " đ"; // thay bằng giá thực tế
    cartItemInfo.appendChild(cartItemPrice);

    cartItem.appendChild(cartItemInfo);

    // Thêm button đặt hàng
    const checkoutButton = document.createElement("button");
    checkoutButton.setAttribute("class", "checkout-button");
    checkoutButton.innerText = "Đặt hàng";
    checkoutButton.addEventListener("click", () => {
        // Thêm xử lý đặt hàng ở đây
        console.log("Đặt hàng");
    });
    cartItem.appendChild(checkoutButton);

    // Thêm sản phẩm vào danh sách
    cartItemsDiv.appendChild(cartItem);
});

// Lưu danh sách sản phẩm mới vào localStorage
localStorage.setItem("cart", JSON.stringify(cartItems));

        //   localStorage.clear();
        // xóa toàn bộ sản phẩm
