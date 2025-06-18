document.addEventListener('DOMContentLoaded', () => {
  // Password visibility toggle
  const togglePasswordButtons = document.querySelectorAll('.toggle-password');
  togglePasswordButtons.forEach(button => {
    button.addEventListener('click', () => {
      const input = button.previousElementSibling;
      if (input.type === 'password') {
        input.type = 'text';
        button.textContent = 'Hide';
      } else {
        input.type = 'password';
        button.textContent = 'Show';
      }
    });
  });

  // Form validation and submission feedback
  const signUpForm = document.getElementById('signUpForm');
  if (signUpForm) {
    signUpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = signUpForm.signupName.value.trim();
      const email = signUpForm.signupEmail.value.trim();
      const password = signUpForm.signupPassword.value;

      if (name && validateEmail(email) && password.length >= 6) {
        alert(`Thank you for signing up, ${name}!`);
        signUpForm.reset();
      } else {
        alert('Please enter a valid name, email, and a password with at least 6 characters.');
      }
    });
  }

  const signInForm = document.getElementById('signInForm');
  if (signInForm) {
    signInForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = signInForm.signinEmail.value.trim();
      const password = signInForm.signinPassword.value;

      if (validateEmail(email) && password.length >= 6) {
        alert('Welcome back!');
        signInForm.reset();
      } else {
        alert('Please enter a valid email and a password with at least 6 characters.');
      }
    });
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();

      if (name && validateEmail(email) && message) {
        alert(`Thank you for contacting us, ${name}! We will get back to you soon.`);
        contactForm.reset();
      } else {
        alert('Please fill in all fields with valid information.');
      }
    });
  }

  function validateEmail(email) {
    // Simple email regex validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
