// button next - prev list1
const $ = document;
const productList = $.getElementById("product-list");
const prevBtn = $.getElementById("prev-btn");
const nextBtn = $.getElementById("next-btn");
let currentPosition = 0;

prevBtn.addEventListener("click", () => {
    currentPosition--;
    if (currentPosition < 0) {
        currentPosition = productList.children.length - 1;
    }
    updateProductList();
});

nextBtn.addEventListener("click", () => {
    currentPosition++;
    if (currentPosition >= productList.children.length) {
        currentPosition = 0;
    }
    updateProductList();
});

function updateProductList() {
    for (let i = 0; i < productList.children.length; i++) {
        const product = productList.children[i];
        if ((i >= currentPosition && i < currentPosition + 4) || (i >= 0 && i < (currentPosition + 4) % productList.children.length)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    }
}
updateProductList();

// button next - prev list2
const $$ = document;
const productList2 = $$.getElementById("product-list2");
const prevBtn2 = $$.getElementById("prev-btn2");
const nextBtn2 = $$.getElementById("next-btn2");
let currentPosition2 = 0;

prevBtn2.addEventListener("click", () => {
    currentPosition2--;
    if (currentPosition2 < 0) {
        currentPosition2 = productList2.children.length - 1;
    }
    updateProductList2();
});

nextBtn2.addEventListener("click", () => {
    currentPosition2++;
    if (currentPosition2 >= productList2.children.length) {
        currentPosition2 = 0;
    }
    updateProductList2();
});

function updateProductList2() {
    for (let j = 0; j < productList2.children.length; j++) {
        const product = productList2.children[j];
        if ((j >= currentPosition2 && j < currentPosition2 + 4) || (j >= 0 && j < (currentPosition2 + 4) % productList2.children.length)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    }
}
updateProductList2();

// Add to cart
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
const cartCount = document.querySelector('#cart-count');
let count = cartItems.length ? cartItems.length : 0; // Kiểm tra giá trị của cartItems.length trước khi gán cho biến count
let imageCount = 1;

addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const productName = button.parentNode.querySelector('.name-pd').textContent;
        const productPrice = parseInt(button.parentNode.querySelector('.money-product').textContent);
        // const productImage = `image-${imageCount}.png`; // tên ảnh sản phẩm
        const productImage = button.dataset.image;
        imageCount++;

        let foundItem = false;
        cartItems.forEach((item) => {
            if (item.name === productName) {
                item.quantity++;
                foundItem = true;
            }
        });

        if (!foundItem) {
            cartItems.push({
                name: productName,
                price: productPrice,
                image: productImage,
                quantity: 1,
            });
        }

        localStorage.setItem('cart', JSON.stringify(cartItems));

        // Cập nhật số lượng sản phẩm trên biểu tượng giỏ hàng
        let count = 0;
        cartItems.forEach((item) => {
            count += item.quantity;
        });
        cartCount.innerText = count;

        // Hiển thị sản phẩm trong giỏ hàng
        const cartItemsList = document.querySelector('#cart-items');
        cartItemsList.innerHTML = '';
        cartItems.forEach((item) => {
            const listItem = document.createElement('li');
            const productImage = document.createElement('img');
            const productName = document.createElement('h3');
            const productPrice = document.createElement('p');
            const productQuantity = document.createElement('p');

            productImage.src = item.image;
            productName.innerText = item.name;
            productPrice.innerText = `Price: $${item.price}`;
            productQuantity.innerText = `Quantity: ${item.quantity}`;

            listItem.appendChild(productImage);
            listItem.appendChild(productName);
            listItem.appendChild(productPrice);
            listItem.appendChild(productQuantity);
            cartItemsList.appendChild(listItem);
        });
    });
});

// Print box text details products

var pd2 = document.getElementById("pd2");
var pd2Overlay = pd2.querySelector(".pd2-overlay");

pd2.addEventListener("mouseenter", function() {
    pd2Overlay.style.display = "block";
});

pd2.addEventListener("mouseleave", function() {
    pd2Overlay.style.display = "none";
});

// regex chek email
function checkEmail() {
    const str = document.getElementById("ip-email").value;
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (regex.test(str) == true) {
        return 1;
    }
    else {
        alert("chuỗi bạn đã nhập không đúng định dạng một địa chỉ email !")
        return 0;
    }
}
function checkTF() {
    let isValid = true;
    if (checkEmail() == 0) {
        isValid = false;
        return isValid;
    }
    return isValid;
}
function checkRegex() {
    if (!checkTF()) {
    }
    else {
        alert("Cảm ơn bạn đã đóng góp ý kiến cho chúng tôi, Chúc bạn có một ngày tốt lành !");
    }
}
