// ==== scripts for making navigation =====

const makingNavItems = document.querySelectorAll('.making-nav-item');
const makingSections = document.querySelectorAll('.making-section');

function updateActiveMakingSection() {
  let currentSection = '';

  makingSections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 200) {
      currentSection = section.id;
    }
  });

  makingNavItems.forEach(item => {
    item.classList.remove('active');
    if (item.dataset.target === currentSection) {
      item.classList.add('active');
    }
  });
}

makingNavItems.forEach(item => {
  item.addEventListener('click', () => {
    const targetId = item.dataset.target;
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ==== scroll to top button =====

const scrollTopBtn = document.querySelector('.scroll-top-making');
const dividingSection = document.getElementById('dividing-section');

function toggleScrollTopButton() {
  const dividingSectionBottom = dividingSection.offsetTop + dividingSection.offsetHeight;

  // Show button after passing both home and dividing sections
  if (window.scrollY > dividingSectionBottom) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
}

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  toggleScrollTopButton();
  updateActiveMakingSection();
});

updateActiveMakingSection();
