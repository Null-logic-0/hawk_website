export function initNavigation() {
  window.addEventListener(
    "scroll",
    function () {
      var nav = document.querySelector("nav");
      if (window.scrollY > 20) {
        nav.style.background = "rgba(15,12,24,.88)";
      } else {
        nav.style.background = "rgba(15,12,24,.72)";
      }
    },
    { passive: true },
  );
}
