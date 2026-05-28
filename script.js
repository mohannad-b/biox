const slides = [...document.querySelectorAll(".slide")];
const links = [...document.querySelectorAll(".site-nav nav a")];

const observer = new IntersectionObserver(
  (entries) => {
    const current = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!current) return;

    links.forEach((link) => {
      link.classList.toggle("active", link.hash === `#${current.target.id}`);
    });
  },
  { rootMargin: "-30% 0px -55% 0px", threshold: [0.15, 0.4, 0.7] }
);

slides.forEach((slide) => observer.observe(slide));
