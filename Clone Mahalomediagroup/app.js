var rootElement = document.documentElement
var btns = document.getElementsByClassName("li1");
var up = document.getElementById("changes3");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
gototop = () => {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
window.onscroll = function() {
    if (pageYOffset >= 80) {
        document.getElementById('changes3').style.visibility = "visible";
    } else {
        document.getElementById('changes3').style.visibility = "hidden";
    }
};