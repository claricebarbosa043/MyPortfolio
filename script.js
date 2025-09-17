const myName = "Clarice Barbosa";

// Greeting update
function updateGreeting() {
  const hour = new Date().getHours();
  let greeting = "Hi, I'm " + myName;
  if (hour < 12) greeting = "Good Morning! I'm " + myName;
  else if (hour < 18) greeting = "Good Afternoon! I'm " + myName;
  else greeting = "Hi! I'm " + myName;
  document.getElementById('greeting').innerText = greeting;
}

// Alerts
function showMessage() {
  alert("Thank you for visiting my portfolio! Email me at:claricebarbosa043@gmail.com");
}
function showSocial(platform) {
  alert("Follow me on " + platform + " (Clarice Barbosa)" + " !");
}
function viewPhoto(img) {
  alert("Viewing: " + img.alt);
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// On load
window.onload = updateGreeting;
