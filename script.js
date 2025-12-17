/* =========================
   CALCULATOR FUNCTIONS
========================= */
function appendCalc(value) {
  document.getElementById('calcInput').value += value;
}

function clearCalc() {
  document.getElementById('calcInput').value = '';
  document.getElementById('calcResult').innerText = '';
}

function calculateResult() {
  const input = document.getElementById('calcInput').value;
  try {
    const result = eval(input); // simple eval for demo purposes
    document.getElementById('calcResult').innerText = "Result: " + result;
  } catch {
    document.getElementById('calcResult').innerText = "Error!";
  }
}

/* =========================
   NAVIGATION ACTIVE LINK
========================= */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

/* =========================
   CONTACT FORM VALIDATION
========================= */
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent default submission

    const name = contactForm.elements['name'].value.trim();
    const email = contactForm.elements['email'].value.trim();
    const message = contactForm.elements['message'].value.trim();

    if (name === '' || email === '' || message === '') {
      formMsg.innerText = 'Please fill in all fields!';
      formMsg.style.color = 'red';
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      formMsg.innerText = 'Please enter a valid email!';
      formMsg.style.color = 'red';
      return;
    }

    formMsg.innerText = 'Message sent successfully!';
    formMsg.style.color = '#FF6A00';
    contactForm.reset();
  });
}

/* =========================
   OPTIONAL: SMOOTH SCROLL
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
