// import "../css/output/output.css";
// import javascriptLogo from "../../javascript.svg";
// import viteLogo from "../../public/vite.svg";
// import { setupCounter } from "./counter.js";

// document.querySelector("#app").innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `;

// setupCounter(document.querySelector("#counter"));
import ConfigureElement from "./helper/classConfigureElement.js";
import {
  resetSelectionAreaTemplate,
  resetContextMenuTemplate,
  modifiedContextMenuTemplate,
} from "./helper/configuredTemplates.js";
import "./selection.js";
import "./videosetter.js";

// const menu = document.querySelector("menu"),
//   wrapper = document.querySelector(".wrapper"),
//   taskbar = document.querySelector(".taskbar"),
//   icons = document.querySelectorAll(".icons"),
//   myVideo = document.querySelector("#my-video");

// need to add contextmenu (right click if i correcly understand)
// and try to add focus event to addEventListener

// btnEl.classList.add("animate", "hide");
// btnEl.classList.remove("animate");
// btnEl.classList.remove("animate", "hide");

// The contextmenu event fires when the user attempts to open a context menu. This event is typically triggered by clicking the right mouse button, or by pressing the context menu key.
