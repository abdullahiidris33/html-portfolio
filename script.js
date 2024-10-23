// Smooth Scroll for Navbar Links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Validation
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.querySelector('input[placeholder="Your Name"]').value;
    const email = document.querySelector('input[placeholder="Your Email"]').value;
    const message = document.querySelector('textarea[placeholder="Your Message"]').value;
    
    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields!');
    } else {
        alert('Message Sent Successfully!');
        this.reset();  // Clear form after submission
    }
});

// Button Click Effects (Hire Me and View Portfolio)
document.querySelectorAll('.port').forEach(button => {
    button.addEventListener('click', function () {
        alert(`You clicked the ${this.textContent} button`);
    });
});

    
     