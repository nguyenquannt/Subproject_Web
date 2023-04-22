// kiểm tra Password
function checkPass() {
    const str = document.getElementById("matKhau").value;
    const regex = /^\w{6,}$/;

    if (regex.test(str) == true) {
        // return 1;
    }
    else {
        alert("Password phải từ 6 ký tự bất kỳ (Không bao gồm ký tự đặc biệt)");
        // return 0;
        result = 0;
    }
}