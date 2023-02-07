function moreOption() {
    let rotate = document.getElementById("dot_rotate");
    let more = document.getElementById("more");

    rotate.classList.toggle("dot_rotate_now");
    more.classList.toggle("show");
}

let mobile_bar = document.getElementById("mobile_bar");
let dots = mobile_bar.getElementsByClassName("dot");

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}