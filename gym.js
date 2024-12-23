
// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

document.querySelector('header a').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
});

// Dark mode toggle
const toggleDarkModeButton = document.getElementById('dark-mode-toggle');

toggleDarkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    // Save preference to localStorage
    const isDarkMode = document.body.classList.contains('dark');
    localStorage.setItem('darkMode', isDarkMode);
});

// Apply dark mode on page load based on saved preference
window.addEventListener('DOMContentLoaded', () => {
    const darkModePreference = localStorage.getItem('darkMode');
    if (darkModePreference === 'true') {
        document.body.classList.add('dark');
    }
});

// Form submission
const loginForm = document.getElementById('login-form');
const signUpForm = document.getElementById('sign-up-form');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm.querySelector('input[name="email"]').value;
        const password = loginForm.querySelector('input[name="password"]').value;
        alert(`Login attempted with email: ${email}`);
    });
}

if (signUpForm) {
    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = signUpForm.querySelector('input[name="name"]').value;
        const email = signUpForm.querySelector('input[name="email"]').value;
        const password = signUpForm.querySelector('input[name="password"]').value;
        alert(`Sign-up attempted with name: ${name}, email: ${email}`);
    });
});

