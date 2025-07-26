document.addEventListener('DOMContentLoaded', () => {
    // --- Hamburger Menu Functionality ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Optional: Toggle a class on hamburger icon to change it to 'X'
        hamburger.querySelector('i').classList.toggle('fa-bars');
        hamburger.querySelector('i').classList.toggle('fa-times');
    });

    // Close hamburger menu when a navigation link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            // Reset hamburger icon to bars
            hamburger.querySelector('i').classList.remove('fa-times');
            hamburger.querySelector('i').classList.add('fa-bars');
        });
    });

    // Close hamburger menu if clicked outside (optional)
    document.addEventListener('click', (event) => {
        if (!navLinks.contains(event.target) && !hamburger.contains(event.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.querySelector('i').classList.remove('fa-times');
            hamburger.querySelector('i').classList.add('fa-bars');
        }
    });


    // --- Smooth Scrolling for Navigation Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default jump behavior

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Get the height of the sticky header to offset the scroll position
                const headerOffset = document.getElementById('myNavbar').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - headerOffset - 20; // Add some extra padding

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Contact Form Submission (Frontend-only, no actual send) ---
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent default form submission

            // In a real application, you would send this data to a backend server.
            // For this HTML/CSS/JS only version, we just simulate success.

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Simple validation
            if (name === '' || email === '' || message === '') {
                formMessage.textContent = 'Please fill in all fields.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
                return;
            }

            // Simulate a successful submission
            formMessage.textContent = 'Thank you for your message, Mukesh Kumar will get back to you soon!';
            formMessage.className = 'form-message success';
            formMessage.style.display = 'block';

            // Clear the form fields after a short delay
            setTimeout(() => {
                contactForm.reset();
                formMessage.style.display = 'none'; // Hide message after a while
            }, 3000);
        });
    }

    // --- Dynamically set current year in footer ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});