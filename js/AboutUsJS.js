// chuyển động carousel
$('#myCarousel').carousel({
    interval: false
    // tắt chuyển đổi tự động giữa các slide
});

$('.btn-next').click(function () {
    $('#myCarousel').carousel('next');
});

$('.btn-prev').click(function () {
    $('#myCarousel').carousel('prev');
});


//   regex check
// check phone number
function checkPhoneNumber() {
    const $ = document;
    const str = $.getElementById("ipphonenumber").value;
    const regex = /^0\d{9}$/;

    if (regex.test(str) == true) {
        alert("Chuỗi nhập vào là số điện thoại");
    }
    else {
        alert("chuỗi nhập vào không phải là 1 số điện thoại")
    }
}
// check name
function checkName() {
    const $ = document;
    const str = $.getElementById("ipname").value;
    const regex = /^[a-zA-Z\s]+$/;

    if (regex.test(str) == true) {
        alert("Chuỗi nhập vào theo định dạng tên");
    }
    else {
        alert("chuỗi nhập vào không phải là 1 định dạng tên")
    }
}
// check email
function checkName() {
    const $ = document;
    const str = $.getElementById("ipname").value;
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

    if (regex.test(str) == true) {
        alert("Chuỗi nhập vào theo định dạng tên");
    }
    else {
        alert("chuỗi nhập vào không phải là 1 định dạng tên")
    }
}