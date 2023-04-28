// Chuyển động ảnh banner div1
var images = ["images/gts2-removebg.png", "images/image-9.png"];
var bigTexts = ["LUXURY WATCHES","STYLISH WATCHES"];
var smallTexts = ["High-quality luxury watches with unique designs and advanced features, Innovative smart watches with cutting-edge technology and sleek designs.","Smart watches, multi-features designed towards luxury and elegance, suitable for the vast majority of people are the prerequisites we aim for."];
var currentImage = 0;

function nextImage() {
    currentImage++;
    if (currentImage >= images.length) {
        currentImage = 0;
    }
    document.getElementById("banner-image").src = images[currentImage];
    document.getElementById("big-text").innerHTML = bigTexts[currentImage];
    document.getElementById("small-text").innerHTML = smallTexts[currentImage];
}

function prevImage() {
    currentImage--;
    if (currentImage < 0) {
        currentImage = images.length - 1;
    }
    document.getElementById("banner-image").src = images[currentImage];
    document.getElementById("big-text").innerHTML = bigTexts[currentImage];
    document.getElementById("small-text").innerHTML = smallTexts[currentImage];
}

function readMore() {

}

function contactUs() {

}