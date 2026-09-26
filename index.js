document.addEventListener("mousemove", function (e) {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");

  const pastelColors = [
    "rgba(255,182,193,0.9)", // light pink
    "rgba(255,223,186,0.9)", // peach
    "rgba(221,240,255,0.9)", // baby blue
    "rgba(229,255,204,0.9)", // mint
    "rgba(245,222,255,0.9)", // lavender
  ];

  const color = pastelColors[Math.floor(Math.random() * pastelColors.length)];
  sparkle.style.background = `radial-gradient(circle, ${color} 0%, rgba(255,255,255,0) 70%)`;

  const size = Math.random() * 6 + 6;
  sparkle.style.width = size + "px";
  sparkle.style.height = size + "px";

  // FIXED: use viewport-relative coordinates
  sparkle.style.left = e.clientX + "px";
  sparkle.style.top = e.clientY + "px";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 1000);
});

const modal = document.getElementById("contactModal");
const closeBtn = document.querySelector(".modal__close");

// Open modal
function openContactModal() {
  modal.style.display = "block";
}

// Close modal when clicking X
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// Close modal when clicking outside the box
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// CUSTOM ORDER MODAL
const customModal = document.getElementById("customModal");
const customClose = document.querySelector(".customClose");

// Open custom modal
function openCustomModal() {
  customModal.style.display = "block";
}

// Close custom modal
customClose.onclick = () => {
  customModal.style.display = "none";
};

// Close when clicking outside
window.addEventListener("click", (event) => {
  if (event.target === customModal) {
    customModal.style.display = "none";
  }
});

// Fade-in testimonials when they enter the viewport
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

fadeElements.forEach(el => observer.observe(el));

