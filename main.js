// Burger handler
(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header__nav");
  const menuCloseItem = document.querySelector(".header__nav-close");
  const menuLinks = document.querySelectorAll(".header__link");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("header__nav_active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header__nav_active");
  });
  {
    if (window.innerWidth <= 767) {
      for (let i = 0; i < menuLinks.length; i += 1) {
        menuLinks[i].addEventListener("click", () => {
          menu.classList.remove("header__nav_active");
        });
      }
    }
  }
})();

// animation home-section

window.addEventListener("load", function () {
  const home = document.querySelector(".home");
  home.classList.add("show");

  const header = document.querySelector(".header");
  header.classList.add("show");

  const title = document.querySelector(".home__title");
  const chars = Array.from(title.textContent);

  title.textContent = "";

  chars.forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.visibility = "hidden";
    span.style.transformOrigin = "center";
    title.appendChild(span);
  });

  gsap.from(".home", { opacity: 0, delay: 0.5, x: "100%" });

  gsap.to(title.querySelectorAll("span"), {
    visibility: "visible",
    x: "100%",
    stagger: 0.07,
    duration: 1,
    delay: 2,
    ease: "power2.out",
  });

  gsap.from(".home__subtitle", { opacity: 0, delay: 4, y: 30 });

  gsap.from(".home__button", {
    opacity: 0,
    delay: 5,
    y: 30,
    onComplete: function () {
      const tl = gsap.timeline();

      tl.to(".home__button", {
        rotation: 15,
        duration: 0.3,
        ease: "power2.out",
      })
        .to(".home__button", {
          rotation: -15,
          duration: 0.5,
          ease: "power2.out",
        })
        .to(".home__button", {
          rotation: 0,
          duration: 0.3,
          ease: "power2.out",
        });
    },
  });
});

const homeButton = document.querySelector(".home__button");

homeButton.addEventListener("mouseenter", () => {
  gsap.to(homeButton, {
    scale: 1.15,
    rotation: 360,
    transformOrigin: "center",
    duration: 0.5,
  });
});

homeButton.addEventListener("mouseleave", () => {
  gsap.to(homeButton, {
    scale: 1,
    rotation: 0,
    transformOrigin: "center",
    duration: 0.5,
  });
});

// scroll animation display-section

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.batch(".display-pic", {
  onEnter: (batch) => {
    gsap.from(batch, {
      x: "100%",
      opacity: 0,
      duration: 2,
      stagger: 0.2,
      ease: "power2.out",
      overwrite: "auto",
    });
  },
  onLeaveBack: (batch) => {
    gsap.to(batch, {
      x: "0%",
      opacity: 1,
      duration: 2,
      stagger: 0.2,
      ease: "power2.out",
      overwrite: "auto",
    });
  },
});

ScrollTrigger.batch(".overlay-pic", {
  onEnter: (batch) => {
    gsap.from(batch, {
      x: "100%",
      opacity: 0,
      duration: 2,
      stagger: 0.2,
      ease: "power2.out",
      overwrite: "auto",
    });
  },
  onLeaveBack: (batch) => {
    gsap.to(batch, {
      x: "0%",
      opacity: 1,
      duration: 2,
      stagger: 0.2,
      ease: "power2.out",
      overwrite: "auto",
    });
  },
});

// scroll animation about

ScrollTrigger.batch(".about__wrapper", {
  start: "5% bottom",
  onEnter: (batch) => {
    gsap.from(batch, {
      x: "-100%",
      opacity: 0,
      duration: 2,
      stagger: 0.2,
      ease: "power2.out",
      overwrite: "auto",
    });
  },
  onLeaveBack: (batch) => {
    gsap.to(batch, {
      x: "0%",
      opacity: 1,
      duration: 2,
      stagger: 0.2,
      ease: "power2.out",
      overwrite: "auto",
    });
  },
});
// scroll animation skill-cards

gsap.from(".skill-card", {
  scrollTrigger: {
    trigger: ".skills__title",
    start: "30% center",
    end: "+=300px",
  },
  scale: 0,
  transformOrigin: "top center",
  ease: "none",
  stagger: 0.2,
});

const skills = document.querySelectorAll(".skill-card");

skills.forEach((skill) => {
  skill.addEventListener("mouseenter", () => {
    gsap.to(skill, { filter: "brightness(75%)", duration: 0.5 });
  });
  skill.addEventListener("mouseleave", () => {
    gsap.to(skill, { filter: "none", duration: 0.5 });
  });
});

// scroll animation project__cards

gsap.utils.toArray(".project__card").forEach((card, index) => {
  if (index % 2 === 0) {
    gsap.from(card, {
      scale: 0,
      transformOrigin: "right center",
      ease: "none",
      scrollTrigger: {
        trigger: card,
        start: "30% bottom",
        end: "bottom center",
      },
    });
  } else {
    gsap.from(card, {
      scale: 0,
      transformOrigin: "left center",
      ease: "none",
      scrollTrigger: {
        trigger: card,
        start: "30% bottom",
        end: "bottom center",
      },
    });
  }
});

const projectPics = document.querySelectorAll(".project-picture");

projectPics.forEach((picture) => {
  picture.addEventListener("mouseenter", () => {
    gsap.to(picture, { scale: 1.05, duration: 0.5 });
  });

  picture.addEventListener("mouseleave", () => {
    gsap.to(picture, { scale: 1, duration: 0.5 });
  });
});
