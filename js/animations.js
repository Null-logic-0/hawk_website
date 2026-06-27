export function initAnimations() {
  var obs = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) e.target.classList.add("vis");
      });
    },
    { threshold: 0.1 },
  );
  document.querySelectorAll(".fu").forEach(function (el) {
    obs.observe(el);
  });
}
