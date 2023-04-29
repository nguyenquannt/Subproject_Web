function checkUserName() {
    const str = document.getElementById("user-name").value;
    const regex = /^.{8}$/;
    
    if (regex.test(str) == true) {
        return 1;
    }
    else {
        alert("User name là 8 ký tự bất kỳ");
        return 0;
    }
}

// kiểm tra Password
function checkPass() {
    const str = document.getElementById("password").value;
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\\-=[\]{};':"\\|,.<>\\/?]).{8}$/;

    if (regex.test(str) == true) {
        return 1;
    }
    else {
        alert("Password phải từ 8 ký tự bất kỳ có chứa ít nhất một chữ hoa và một ký tự đặc biệt");
        return 0;
    }
}

function checkTF() {
    let isValid = true;
    if (checkUserName() == 0 || checkPass() == 0) {
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
        alert("Cảm ơn vị vì đã lựa chọn chúng tôi, chúc bạn mua sắm vui vẽ !");
    }
}
