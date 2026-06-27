import { escHtml } from "./utils.js";

export function initTerminal() {
  var termEl = document.getElementById("hero-term");
  var seq = [
    { t: "$ hawk deploy production\n", type: "cmd", char: true },
    { t: "\n", delay: 180 },
    { t: "  ✔ Building release...\n", cls: "p-ok", delay: 650 },
    { t: "  ✔ Uploading assets...\n", cls: "p-ok", delay: 550 },
    { t: "  ✔ Running migrations...\n", cls: "p-ok", delay: 580 },
    { t: "  ✔ Health check passed\n", cls: "p-ok", delay: 520 },
    { t: "\n", delay: 300 },
    { t: "  🚀 Deployment successful!\n", cls: "p-ok", bold: true, delay: 260 },
    { t: "  https://app.example.com", cls: "turl", delay: 280 },
  ];

  function runTerm() {
    termEl.innerHTML = "";
    var i = 0;
    var totalDelay = 0;

    function addCursor() {
      var existing = termEl.querySelector(".cursor");
      if (existing) existing.remove();
      var c = document.createElement("span");
      c.className = "cursor";
      termEl.appendChild(c);
    }

    function typeChar(text, span, idx, done) {
      if (idx >= text.length) {
        done();
        return;
      }
      var ch = text[idx];
      span.textContent += ch;
      setTimeout(
        function () {
          typeChar(text, span, idx + 1, done);
        },
        42 + Math.random() * 22,
      );
    }

    function processLine(item) {
      if (item.type === "cmd") {
        var promptSpan = document.createElement("span");
        promptSpan.className = "tc";
        promptSpan.textContent = "$ ";
        termEl.appendChild(promptSpan);
        addCursor();
        var cmdSpan = document.createElement("span");
        termEl.appendChild(cmdSpan);
        var cursor = termEl.querySelector(".cursor");
        cmdSpan.after(cursor);
        typeChar("hawk deploy production", cmdSpan, 0, function () {
          var br = document.createElement("br");
          var c = termEl.querySelector(".cursor");
          if (c) c.remove();
          termEl.appendChild(br);
          nextLine();
        });
      } else {
        var span = document.createElement("span");
        if (item.cls) span.className = item.cls;
        if (item.bold) span.style.fontWeight = "600";
        var raw = item.t;
        if (raw.endsWith("\n")) {
          span.textContent = raw.slice(0, -1);
          termEl.appendChild(span);
          termEl.appendChild(document.createElement("br"));
        } else {
          span.textContent = raw;
          termEl.appendChild(span);
        }
        nextLine();
      }
      termEl.scrollTop = termEl.scrollHeight;
    }

    function nextLine() {
      i++;
      if (i >= seq.length) {
        addCursor();
        setTimeout(function () {
          termEl.innerHTML = "";
          i = 0;
          setTimeout(runTerm, 400);
        }, 3800);
        return;
      }
      var item = seq[i];
      setTimeout(function () {
        processLine(item);
      }, item.delay || 0);
    }

    processLine(seq[0]);
  }
  runTerm();
}
