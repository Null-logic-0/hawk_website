import { initNavigation } from "./navigation.js";
import { initTerminal } from "./terminal.js";
import { initAnimations } from "./animations.js";
import { initTabs } from "./tabs.js";
import { initClipboard } from "./clipboard.js";
import { initFooter } from "./footer.js";

document.addEventListener("DOMContentLoaded", function(){
  initNavigation();
  initTerminal();
  initAnimations();
  initTabs();
  initClipboard();
  initFooter();
});
