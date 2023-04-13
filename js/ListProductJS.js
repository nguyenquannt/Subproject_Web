// list1
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
// list2

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