
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

// grab buttons and add listener to remove instance from list on click
let removeCustomerBtnContaier = document.getElementById("customer-list-group")
let removeCustomerBtns = removeCustomerBtnContaier.getElementsByClassName("customer-list-closeButton")
for (let i = 0; i < removeCustomerBtns.length; i++) {
    removeCustomerBtns[i].addEventListener("click", () => {
        let selected = document.getElementById(`list-group-item-${i - 1}`)
        selected.remove()
    });
}

// Set up datatable
$(document).ready(function () {
    $('#example').DataTable({
        "lengthMenu":[25]
    });
});

// alert customer not found 
//TODO: replace with MODAL
let customerSearchButton = document.getElementById("search-customers-button")
customerSearchButton.addEventListener("click", () => {
    alert("Customer Not Found")
})
