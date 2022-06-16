// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.




// Get the container element
let customerBtnContainer = document.getElementById("customer-list-group");

// Get all buttons with class="btn" inside the container
let customerBtns = customerBtnContainer.getElementsByClassName("list-group-item");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < customerBtns.length; i++) {
    customerBtns[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        if (current.length === 0) {
            this.className += " active";
        }
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}



let removeCustomerBtnContaier = document.getElementById("customer-list-group")
let removeCustomerBtns = removeCustomerBtnContaier.getElementsByClassName("customer-list-closeButton")


for (let i = 0; i < removeCustomerBtns.length; i++) {
    removeCustomerBtns[i].addEventListener("click", () => {
        //if (this.className.includes("active")){return}
        let selected = document.getElementById(`list-group-item-${i - 1}`)
        selected.remove()
    });
}
$(document).ready(function () {
    $('#example').DataTable({
        "lengthMenu":[25]
    });
});

let customerSearchButton = document.getElementById("search-customers-button")

customerSearchButton.addEventListener("click", () => {
    alert("Customer Not Found")
})
