document.addEventListener("DOMContentLoaded", () => {
  const momentos = document.querySelectorAll(".momento");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  momentos.forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.1}s`;
    observer.observe(el);
  });
});

document.querySelectorAll(".heart-container").forEach((el) => {
  el.addEventListener("click", (e) => {
    el.classList.toggle("active");
  });
});
