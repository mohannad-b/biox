const slides = [...document.querySelectorAll(".slide")];
const navLinks = [...document.querySelectorAll(".slide-nav a")];

const observer = new IntersectionObserver(
  (entries) => {
    const current = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!current) return;

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.hash === `#${current.target.id}`);
    });
  },
  {
    rootMargin: "-25% 0px -60% 0px",
    threshold: [0.2, 0.45, 0.7],
  }
);

slides.forEach((slide) => observer.observe(slide));
