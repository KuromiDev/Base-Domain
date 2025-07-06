function Redirect() {
    window.open("https://mail.google.com/mail/u/0/?view=cm&fs=1&to=enquiry@alicedevelopments.com&su=Enquiry Regarding Alice Developments", "_blank");
    }

document.querySelector('#ProjectOne').addEventListener('click', function(e) {
    e.preventDefault();
    setTimeout(function() {
        window.location.href = 'projectOne.html';
    }, 250); 
}, false);

document.querySelector('#ProjectTwo').addEventListener('click', function(e) {
    e.preventDefault();
    setTimeout(function() {
        window.location.href = 'projectTwo.html';
    }, 250); 
}, false);

document.querySelector('#ProjectThree').addEventListener('click', function(e) {
    e.preventDefault();
    setTimeout(function() {
        window.location.href = 'projectThree.html';
    }, 250); 
}, false);

function RedirectHome() {
    window.location.href = "index.html";
}

function RedirectGithub() {
    window.open("https://www.github.com/Kuromidev", "_blank");
    }