export function initClipboard() {
  var copyBtn = document.getElementById("copy-btn");
  if (copyBtn) {
    function doCopy() {
      var text =
        "git clone https://github.com/Null-logic-0/hawk.git && cd hawk && chmod +x bin/hawk";
      function fallbackCopy() {
        var ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        showCopied();
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(text)
          .then(showCopied)
          .catch(fallbackCopy);
      } else {
        fallbackCopy();
      }
    }
    function showCopied() {
      var msg = document.getElementById("copied-msg");
      msg.style.opacity = "1";
      setTimeout(function () {
        msg.style.opacity = "0";
      }, 1800);
    }
    copyBtn.addEventListener("click", doCopy);
    copyBtn.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        doCopy();
      }
    });
  }
}
