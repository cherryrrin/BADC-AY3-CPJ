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

window.addEventListener('scroll', updateActiveMakingSection);
updateActiveMakingSection();
