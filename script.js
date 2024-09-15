// RATING-BTN
var result = document.getElementById("result")
var btn = document.querySelectorAll(".rate")
for (i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        var value = this.textContent
        result.innerHTML = "You selected " + value + " out of 5"
    })
}
// SUBMIT-BTN
var rating = document.querySelector(".rating")
var thankyou = document.querySelector(".thankyou")
var submit = document.querySelector(".submit")
submit.addEventListener('click', function () {
    if(result.innerHTML=="sorry"){
        rating.style.display = "block"
    }
    else{
        rating.style.display = "none"
        thankyou.style.display = "block"
    }
})


