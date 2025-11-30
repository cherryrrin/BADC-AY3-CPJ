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

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

if (scrollToTopBtn) {
  function updateScrollTopButton() {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  }

  // Check on page load
  updateScrollTopButton();

  // Check on scroll
  window.addEventListener('scroll', () => {
    updateScrollTopButton();
    updateActiveMakingSection();
  });

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ==== interactive background buttons rotation =====

let backgroundButtons = document.querySelectorAll('.background-buttons button');
let buttonArray = Array.from(backgroundButtons);

backgroundButtons.forEach(button => {
  let rotation = 0;

  button.addEventListener('click', () => {
    rotation += 45;
    button.style.transform = `rotate(${rotation}deg)`;

    // Swap position with a random other button
    const randomIndex = Math.floor(Math.random() * buttonArray.length);
    let randomButton = buttonArray[randomIndex];

    // Make sure we don't swap with itself
    while (randomButton === button) {
      randomIndex = Math.floor(Math.random() * buttonArray.length);
      randomButton = buttonArray[randomIndex];
    }

    // Get current positions
    const currentTop = button.style.top;
    const currentLeft = button.style.left;
    const currentRight = button.style.right;
    const currentBottom = button.style.bottom;
    const currentWidth = button.style.width;
    const currentHeight = button.style.height;

    const randomTop = randomButton.style.top;
    const randomLeft = randomButton.style.left;
    const randomRight = randomButton.style.right;
    const randomBottom = randomButton.style.bottom;
    const randomWidth = randomButton.style.width;
    const randomHeight = randomButton.style.height;

    // Swap positions
    button.style.top = randomTop;
    button.style.left = randomLeft;
    button.style.right = randomRight;
    button.style.bottom = randomBottom;
    button.style.width = randomWidth;
    button.style.height = randomHeight;

    randomButton.style.top = currentTop;
    randomButton.style.left = currentLeft;
    randomButton.style.right = currentRight;
    randomButton.style.bottom = currentBottom;
    randomButton.style.width = currentWidth;
    randomButton.style.height = currentHeight;
  });
});

// ==== elastic button interaction =====

const btn = document.querySelector('.button-1');
if (btn) {
  const stayInReleasedState = true;

  btn.addEventListener('mousedown', () => {
    // If in released state and should stay, clicking clears the released state
    if (stayInReleasedState && btn.getAttribute('data-state') === 'released') {
      btn.style.animation = 'none';
      btn.removeAttribute('data-state');
      return;
    }
    btn.style.animation = 'elastic-pressed 100ms forwards';
    btn.setAttribute('data-state', 'pressed');
  });

  btn.addEventListener('mouseup', () => {
    btn.style.transition = 'all 100ms ease-out 0ms';
    btn.setAttribute('data-state', 'released');
  });

  btn.addEventListener('mouseleave', () => {
    if (!stayInReleasedState) {
      btn.removeAttribute('data-state');
    }
  });
}

// ==== overlay buttons interaction (canvas only) =====

let canvasButtons = document.querySelectorAll('.overlay-buttons button');
let canvasButtonArray = Array.from(canvasButtons);

canvasButtons.forEach(button => {
  let rotation = 0;

  button.addEventListener('click', () => {
    rotation += 45;
    button.style.transform = `rotate(${rotation}deg)`;

    // Swap position with a random other button
    let randomIndex = Math.floor(Math.random() * canvasButtonArray.length);
    let randomButton = canvasButtonArray[randomIndex];

    // Make sure we don't swap with itself
    while (randomButton === button) {
      randomIndex = Math.floor(Math.random() * canvasButtonArray.length);
      randomButton = canvasButtonArray[randomIndex];
    }

    // Get current positions
    const currentTop = button.style.top;
    const currentLeft = button.style.left;
    const currentRight = button.style.right;
    const currentBottom = button.style.bottom;
    const currentWidth = button.style.width;
    const currentHeight = button.style.height;

    const randomTop = randomButton.style.top;
    const randomLeft = randomButton.style.left;
    const randomRight = randomButton.style.right;
    const randomBottom = randomButton.style.bottom;
    const randomWidth = randomButton.style.width;
    const randomHeight = randomButton.style.height;

    // Swap positions
    button.style.top = randomTop;
    button.style.left = randomLeft;
    button.style.right = randomRight;
    button.style.bottom = randomBottom;
    button.style.width = randomWidth;
    button.style.height = randomHeight;

    randomButton.style.top = currentTop;
    randomButton.style.left = currentLeft;
    randomButton.style.right = currentRight;
    randomButton.style.bottom = currentBottom;
    randomButton.style.width = currentWidth;
    randomButton.style.height = currentHeight;
  });
});
