function animatePageLoad() {
  const tl = gsap.timeline();

  tl.from("nav h1, nav i, nav h3, nav button", {
    duration: 0.5,
    delay: 0.5,
    y: -100,
    opacity: 0,
    stagger: 0.15,
  });
  tl.from(".hero-text h2", {
    duration: 0.5,
    x: -200,
    opacity: 0,
  }, "-=0.3");
  tl.from(".hero-text p", {
    duration: 0.4,
    x: -100,
    opacity: 0,
  });
  tl.from(".hero-text button", {
    duration: 0.4,
    opacity: 0,
  });
}

// Scroll-based animations
function animateOnScroll() {
  gsap.from(".hero-image img", {
    duration: 0.5,
    delay: 2.3,
    opacity: 0,
    scrollTrigger: {
      trigger: ".hero-image",
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".app-icons div", {
    duration: 1,
    opacity: 0,
    y: -100,
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".app-icons",
      start: "top 78%",
      end: "bottom 78%",
      toggleActions: "play none none none",
        scrub: true,
    },
  });

  gsap.from(".services1 h3, .services1 p", {
    duration: 0.5,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".services1",
      start: "top 85%",
      end: "bottom 85%",
      toggleActions: "play none none none",
        scrub: true,
    },
  });

  gsap.from(".first .left", {
    duration: 0.5,
    opacity: 0,
    x: -200,
    scrollTrigger: {
      trigger: ".first",
      start: "top 80%",
      toggleActions: "play none none none",
        scrub: true,
    },
  });

  gsap.from(".first .right", {
    duration: 0.5,
    opacity: 0,
    x: 200,
    scrollTrigger: {
      trigger: ".first",
      start: "top 80%",
      toggleActions: "play none none none",
      scrub: true,
    },
  });

  gsap.from(".second .left", {
    duration: 0.5,
    opacity: 0,
    x: -200,
    scrollTrigger: {
      trigger: ".second",
      start: "top 80%",
      toggleActions: "play none none none",
        scrub: true,
    },
  });

  gsap.from(".second .right", {
    duration: 0.5,
    opacity: 0,
    x: 200,
    scrollTrigger: {
      trigger: ".second",
      start: "top 80%",
      toggleActions: "play none none none",
        scrub: true,
    },
  });

  gsap.from(".case-study h3, .case-study p", {
    duration: 0.5,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".case-study",
      start: "top 82%",
      end: "bottom 82%",
      toggleActions: "play none none none",
        scrub: true,
    },
  });

  gsap.from(".footer", {
    duration: 0.5,
    opacity: 0,
    scrollTrigger: {
      trigger: ".footer",
      start: "top 75%",
      end: "bottom 85%",
      toggleActions: "play none none none",
        scrub: true,    
    },
  });
}

// Click-based animations
function onClickAnimations() {
    let menu = document.querySelector(".menu-icon");
    let close = document.querySelector(".close-icon");
    let menuTimeline = null;

    menu.addEventListener("click", () => {
        // Reset styles so .from works every time
        gsap.set(".menu h3, .menu button, .menu i", { opacity: 1, y: 0 });

        menuTimeline = gsap.timeline();
        menuTimeline.set(".menu", { display: "flex" });
        menuTimeline.fromTo(".menu", 
            { opacity: 0 }, 
            { duration: 0.5, opacity: 1 }
        );
        menuTimeline.from(".menu h3, .menu button, .menu i", {
            duration: 0.5,
            opacity: 0,
            y: 100,
            stagger: 0.2
        }, "-=0.3");
    });

    close.addEventListener("click", () => {
        if (menuTimeline) {
            menuTimeline.reverse();
            menuTimeline.eventCallback("onReverseComplete", () => {
                gsap.set(".menu", { display: "none" });
            });
        }
    });
}

// Init all animations
function initAnimations() {
  animatePageLoad();
  animateOnScroll();
  onClickAnimations();
}

initAnimations();