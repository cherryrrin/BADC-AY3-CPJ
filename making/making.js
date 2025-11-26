// ==== scripts for making sidebar navigation =====

const sidebarMakingItems = document.querySelectorAll('.sidebar-making-item');
const makingSections = document.querySelectorAll('.making-section');

function updateActiveMakingSection() {
  let currentSection = '';

  makingSections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 200) {
      currentSection = section.id;
    }
  });

  sidebarMakingItems.forEach(item => {
    item.classList.remove('active');
    if (item.dataset.target === currentSection) {
      item.classList.add('active');
    }
  });
}

sidebarMakingItems.forEach(item => {
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
