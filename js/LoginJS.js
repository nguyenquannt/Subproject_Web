function checkUserName() {
    const str = document.getElementById("user-name").value;
    const regex = /^.{8,}$/;
    
    if (regex.test(str) == true) {
        return 1;
    }
    else {
        console.log("User name là 8 ký tự bất kỳ")
        alert("User name là 8 ký tự bất kỳ");
        return 0;
    }
}

// kiểm tra Password
function checkPass() {
    const str = document.getElementById("password").value;
    const regex = /^.{8,}$/;

    if (regex.test(str) == true) {
        return 1;
    }
    else {
        alert("Password phải từ 8 ký tự trở lên, có chứa ít nhất một chữ hoa và một ký tự đặc biệt");
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
    }
    else {
        alert("Cảm ơn vị vì đã lựa chọn chúng tôi, chúc bạn mua sắm vui vẽ !");
        window.location.href = "Index.html";
    }
}
