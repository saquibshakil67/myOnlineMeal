// Smooth Scroll Navigation
document.querySelectorAll('#navbar ul li a').forEach(anchor =>
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    })
);

// Navbar Toggle for Mobile
const toggleButton = document.createElement('div');
toggleButton.id = 'navbar-toggle';
toggleButton.innerHTML = '&#9776;';
document.getElementById('logo').appendChild(toggleButton);
toggleButton.addEventListener('click', () => document.getElementById('navbar').classList.toggle('active'));

// Form Validation
document.querySelector('form').addEventListener('submit', e => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!name || !emailPattern.test(email) || !phone || !message) {
        alert('Please fill out all fields with valid data.');
        e.preventDefault();
    }
});

// Back-to-Top Button
const backToTopButton = document.createElement('button');
backToTopButton.id = 'back-to-top';
backToTopButton.classList.add('btn');
backToTopButton.innerText = '↑';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    backToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
});

backToTopButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
