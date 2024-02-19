document.addEventListener('DOMContentLoaded', function() {
    var btnContainer = document.getElementById('contact-button-container');
    var contactButton = document.createElement('button');
    contactButton.innerText = 'Contact Information';
    contactButton.onclick = function() {
        window.location.href = 'contact.html';
    };
    btnContainer.appendChild(contactButton);
});
