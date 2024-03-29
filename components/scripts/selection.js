import ConfigureElement from "./helper/classConfigureElement.js";
import {
  resetSelectionAreaTemplate,
  resetContextMenuTemplate,
  modifiedContextMenuTemplate,
} from "./helper/configuredTemplates.js";

const desktop = document.querySelector("main"),
  nodeListOfIcons = document.querySelectorAll(".icons"),
  selectionArea = document.createElement("span"),
  contextMenu = document.createElement("span"),
  positionFirst = { X: 0, Y: 0 },
  positionLast = { X: 0, Y: 0 },
  selectedIcons = new Set();

window.addEventListener("contextmenu", (e) => e.preventDefault());
desktop.addEventListener("contextmenu", handleContextMenu);
desktop.addEventListener("mousedown", startTracking);

function startTracking(e) {
  positionFirst.X = e.clientX;
  positionFirst.Y = e.clientY;

  resetSelectionAreaTemplate.convertTo(selectionArea);
  resetContextMenuTemplate.convertTo(contextMenu);

  desktop.appendChild(selectionArea);
  desktop.appendChild(contextMenu);
  desktop.removeChild(contextMenu);

  nodeListOfIcons.forEach((currentIcon) => {
    currentIcon.classList.remove("focus");
  });

  desktop.addEventListener("mousemove", handleMouseMove);
  desktop.addEventListener("mouseleave", handleMouseLeave);
  desktop.addEventListener("mouseup", stopTracking);
}

function stopTracking() {
  desktop.removeChild(selectionArea);
  desktop.removeEventListener("mousemove", handleMouseMove);
  desktop.removeEventListener("mouseup", stopTracking);
  desktop.removeEventListener("mouseleave", handleMouseLeave);
}

function handleMouseLeave() {
  nodeListOfIcons.forEach((currentIcon) => {
    currentIcon.classList.remove("focus");
  });
  resetSelectionAreaTemplate.convertTo(selectionArea);
  stopTracking();
}

function handleMouseMove(e) {
  // mb add selectionArea.addEventListener("somekey", cb)
  // mb add window target (dunno how but that is idea) || Window.screen || Window.getSelection()
  positionLast.X = e.clientX;
  positionLast.Y = e.clientY;
  selectionArea.style.left = `${Math.min(positionFirst.X, positionLast.X)}px`;
  selectionArea.style.top = `${Math.min(positionFirst.Y, positionLast.Y)}px`;
  selectionArea.style.height = `${Math.abs(positionFirst.Y - positionLast.Y)}px`;
  selectionArea.style.width = `${Math.abs(positionFirst.X - positionLast.X)}px`;

  const selectionAreaRect = selectionArea.getBoundingClientRect();

  nodeListOfIcons.forEach((currentIcon) => {
    const iconRect = currentIcon.getBoundingClientRect();

    if (
      selectionAreaRect.left < iconRect.right &&
      selectionAreaRect.right > iconRect.left &&
      selectionAreaRect.top < iconRect.bottom &&
      selectionAreaRect.bottom > iconRect.top
    ) {
      selectedIcons.add(currentIcon);
      currentIcon.classList.add("focus");
    } else {
      selectedIcons.forEach((currentIcon) => {
        const iconRect = currentIcon.getBoundingClientRect();
        if (
          !(
            selectionAreaRect.left < iconRect.right &&
            selectionAreaRect.right > iconRect.left &&
            selectionAreaRect.top < iconRect.bottom &&
            selectionAreaRect.bottom > iconRect.top
          )
        ) {
          currentIcon.classList.remove("focus");
        }
      });
    }
  });
}

function handleContextMenu() {
  modifiedContextMenuTemplate.add("left", `${positionFirst.X}px`);
  modifiedContextMenuTemplate.add("top", `${positionFirst.Y}px`);
  modifiedContextMenuTemplate.convertTo(contextMenu);
  desktop.appendChild(contextMenu);
  contextMenu.classList.add("contextMenu");
  stopTracking();
}
