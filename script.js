const submit=document.querySelector(".submit");




submit.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission
    
        window.location.href = "login.html"; // Redirect to login.html
    
});
