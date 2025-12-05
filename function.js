let menuList = document.getElementById("menuList");
let overlay = document.getElementById("overlay");

function toggleMenu() {
  if (menuList.style.left === "0px") {
    // hide sidebar
    menuList.style.left = "-250px";
    overlay.style.display = "none";
  } else {
    // show sidebar
    menuList.style.left = "0px";
    overlay.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.querySelector('.about-section');

    function handleScroll() {
        const rect = aboutSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if section is visible in viewport
        if(rect.top <= windowHeight * 0.8) { 
            aboutSection.classList.add('visible');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run once on load
});
document.addEventListener("DOMContentLoaded", function() {
    const skillsSection = document.querySelector('.skills-section');

    function handleScroll() {
        const rect = skillsSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if(rect.top <= windowHeight * 0.10) { 
            skillsSection.classList.add('visible');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run once on load
});


document.addEventListener("DOMContentLoaded", function() {
    function animateOnScroll(sectionSelector, triggerPercent = 0.8) {
        const section = document.querySelector(sectionSelector);
        if(!section) return;

        function handleScroll() {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if(rect.top <= windowHeight * triggerPercent) {
                section.classList.add('visible');
            }
        }

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // run once on load
    }

    animateOnScroll('.about-section', 0.8);
    animateOnScroll('.skills-section', 0.1);
});


document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".animate-on-scroll");

    function animateOnScroll() {
        const windowHeight = window.innerHeight;

        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top <= windowHeight * 0.85) { // 85% of viewport
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // trigger once on load
});

