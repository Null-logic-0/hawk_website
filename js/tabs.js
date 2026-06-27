export function initTabs() {
  document.querySelectorAll(".tab").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var p = btn.dataset.p;
      document.querySelectorAll(".tab").forEach(function (t) {
        t.classList.remove("on");
        t.setAttribute("aria-selected", "false");
      });
      document.querySelectorAll(".pane").forEach(function (panel) {
        panel.classList.remove("on");
      });
      btn.classList.add("on");
      btn.setAttribute("aria-selected", "true");
      var pane = document.getElementById("p-" + p);
      if (pane) pane.classList.add("on");
    });
  });
}
