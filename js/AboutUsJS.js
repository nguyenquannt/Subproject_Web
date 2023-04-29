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
// check name
function checkName() {
    const $ = document;
    const str = $.getElementById("ip-name").value;
    const regex = /^[a-zA-Z\s]+$/;

    if (regex.test(str) == true) {
        return 1;
    }
    else {
        alert("Tên Viết không dấu, không chứa số và ký tự đặc biệt !");
        return 0;
    }
}
// check email
function checkEmail() {
    const $ = document;
    const str = $.getElementById("ip-email").value;
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

    if (regex.test(str) == true) {
        return 1;
    }
    else {
        alert("chuỗi bạn đã nhập không đúng định dạng một địa chỉ email !")
        return 0;
    }
}
// check phone number
function checkPhoneNumber() {
    const $ = document;
    const str = $.getElementById("ip-phoneNumber").value;
    const regex = /^0\d{9}$/;

    if (regex.test(str) == true) {
        return 1;
    }
    else {
        alert("SDT bắt đầu bằng số 0 và có tất cả 10 số")
        return 0;
    }
}
// check message
function checkMessage() {
    const $ = document;
    const str = $.getElementById("ip-message").value;
    const regex = /^.{1, 200}$/;

    if (regex.test(str) == true) {
        return 1;
    }
    else {
        alert("Tin nhắn phải khoảng 200 ký tự");
        return 0;
    }
}
function checkTF() {
    let isValid = true;
    if (checkName() == 0 || checkEmail() == 0 || checkPhoneNumber() == 0 || checkMessage == 0) {
        isValid = false;
        return isValid;
    }
    return isValid;
}
function checkRegex() {
    if (!checkTF()) {
        alert("Hãy kiểm tra lại các định dạng nhập !");
    }
    else {
        alert("Cảm ơn bạn đã đóng góp ý kiến cho chúng tôi, Chúc bạn có một ngày tốt lành !");
    }
}

