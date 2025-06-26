function Redirect() {
    window.open("https://mail.google.com/mail/u/0/?view=cm&fs=1&to=enquiry@alicedevelopments.com&su=Enquiry Regarding Alice Developments", "_blank");
    }

document.querySelector('#ProjectOne').addEventListener('click', function(e) {
    e.preventDefault();
    setTimeout(function() {
        window.location.href = 'projectOne.html';
    }, 250); 
}, false);