var modal = document.getElementById("feedbackModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("modal-form__close")[0];


btn.onclick = function() {
    modal.style.display = "block";
    document.body.classList.add("modal-open"); 
}


span.onclick = function() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open"); 
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove("modal-open"); 
    }
}


document.getElementById("feedbackForm").onsubmit = function(event) {
    event.preventDefault();
    modal.style.display = "none";
    document.body.classList.remove("modal-open"); 
};

console.log('Open loaded');