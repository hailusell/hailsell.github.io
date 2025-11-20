// Simple welcome message
alert("Welcome to my first website!");

// Change background color when clicking anywhere
document.addEventListener('click', function() {
    document.body.style.backgroundColor = '#e6f7ff';
    setTimeout(function() {
        document.body.style.backgroundColor = '#f0f0f0';
    }, 500);
});