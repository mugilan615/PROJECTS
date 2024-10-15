let productcontainer = document.querySelector(".products");
let search = document.querySelector("#search");
let productlist = productcontainer.querySelectorAll("div");

search.addEventListener("keyup", function(event) {
    var enteredvalue = event.target.value.toUpperCase();

    for (let count = 0; count < productlist.length; count++) {
        let productname = productlist[count].querySelector("p").textContent;

        if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
            productlist[count].style.display = "none";
        } else {
            productlist[count].style.display = "block";
        }
    }
});
