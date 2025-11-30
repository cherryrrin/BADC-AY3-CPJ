// place js in here

window.onload = () => {
  let all = document.getElementsByClassName("zoom"),
    lightbox = document.getElementById("lightbox");

  if (all.length > 0) {
    for (let i of all) {
      i.onclick = () => {
        let clone = i.cloneNode();
        clone.className = "";
        lightbox.innerHTML = "";
        lightbox.appendChild(clone);
        lightbox.className = "show";
      };
    }
  }

  lightbox.onclick = () => {
    lightbox.className = "";
  };
};

document.addEventListener("DOMContentLoaded", function () {
  var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

  if ("IntersectionObserver" in window) {
    var lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (video) {
        if (video.isIntersecting) {
          for (var source in video.target.children) {
            var videoSource = video.target.children[source];
            if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
              videoSource.src = videoSource.dataset.src;
            }
          }

          video.target.load();
          video.target.classList.remove("lazy");
          lazyVideoObserver.unobserve(video.target);
        }
      });
    });

    lazyVideos.forEach(function (lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  }
});

function scrollToTop() {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
}

function initHamburgerMenu() {
  /* initialise Hamburger-Menu */
  const hamburger = document.querySelector(".main__nav-ham");
  const navMenu = document.querySelector(".main__nav-list");
  const title = document.querySelector(".main__nav-title");

  hamburger.addEventListener("click", mobileMenu);

  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
}

initHamburgerMenu();

/**
 * Load JSON from HTML like this
 * loadJSON('my-file.json',
 *       function(data) { console.log(data); },
 *       function(xhr) { console.error(xhr); }
 * );
 *
 * @param {*} path
 * @param {*} success
 * @param {*} error
 */
function loadJSON(path, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        if (success) success(JSON.parse(xhr.responseText));
      } else {
        if (error) error(xhr);
      }
    }
  };
  xhr.open("GET", path, true);
  xhr.send();
}

function generateRepoItemsFrom(theData) {
  const items = Object.keys(theData);
  items.forEach((el0) => {
    const in0 = theData[`${el0}`];
    const headline = `${el0.charAt(0).toUpperCase()}${el0.slice(1)}`;
    const id = `repo-${el0}`;
    let result = `<h2>${headline}</h2>`;
    in0.forEach((el) => {
      const push = `<ul class="repo__list"><li class="repo__item"><ul>`;
      const thumbnail = `<li><img src="/assets/images/repo/${el.thumbnail}" /></li>`;
      const l0 = `<br><a href="${el.link}" target="_blank">link</a>`;
      const link = el.link?.length > 0 ? l0 : "";
      const r0 = `${el.title}`;
      const r1 = `${el.reference}`;
      const r2 = `${link}`;
      const reference = `<li><p>${r0}<br>${r1}${r2}</p></li>`;
      const description = `<li><p>${el.description}</p></li>`;
      const pop = `</li></ul></ul>`;
      result += `${push}${thumbnail}${reference}${description}${pop}`;
    });
    document.getElementById(id).innerHTML = result;
  });
}

function logErrorMessage(theError) {
  console.error(theError);
}


document.addEventListener("keydown", function(e) {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
      return;
  const prevBtn = document.getElementById("go-prev");
  const nextBtn = document.getElementById("go-next");
  if (e.key == "ArrowLeft" && prevBtn)
      window.location.assign(prevBtn.href);
  else if (e.key == "ArrowRight" && nextBtn)
      window.location.assign(nextBtn.href);
  else if (e.key == "Escape") {
      const t = document.getElementById("bio-details");
      if (t) {
        t.classList.toggle("expanded"),
        t.classList.toggle("collapsed")
      }
  }
});




// ==== scripts for sidebar indicator =====

const sidebarItems = document.querySelectorAll('.sidebar-item');
const sections = document.querySelectorAll('#contents-section [id^="section"]');

function updateActiveSection() {
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop + 450) {
      currentSection = section.id;
    }
  });

  sidebarItems.forEach(item => {
    item.classList.remove('active');
    if (item.dataset.target === currentSection) {
      item.classList.add('active');
    }
  });
}

sidebarItems.forEach(item => {
  item.addEventListener('click', () => {
    const targetId = item.dataset.target;
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

window.addEventListener('scroll', updateActiveSection);
updateActiveSection();

// ==== interactive background buttons rotation =====

let backgroundButtons = document.querySelectorAll('.background-buttons button');
let buttonArray = Array.from(backgroundButtons);

backgroundButtons.forEach(button => {
  let rotation = 0;

  button.addEventListener('click', () => {
    rotation += 45;
    button.style.transform = `rotate(${rotation}deg)`;

    // Swap position with a random other button
    let randomIndex = Math.floor(Math.random() * buttonArray.length);
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