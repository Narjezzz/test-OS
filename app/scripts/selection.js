const menu = document.querySelector("menu");
const nodeListOfIcons = document.querySelectorAll(".icons");

const selectionArea = document.createElement("span");

const positionFirst = { X: 0, Y: 0 };
const positionLast = { X: 0, Y: 0 };

const selectedIcons = new Set();

menu.addEventListener("mousedown", startTracking);

function resetSelectionArea() {
  selectionArea.style.backgroundColor = "rgba(0,0,0,0.3)";
  selectionArea.style.border = "1px solid black";
  selectionArea.style.zIndex = "1000";
  selectionArea.style.position = "absolute";
  selectionArea.style.left = "0px";
  selectionArea.style.top = "0px";
  selectionArea.style.height = "0px";
  selectionArea.style.width = "0px";
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

function handleMouseLeave() {
  nodeListOfIcons.forEach((currentIcon) => {
    currentIcon.classList.remove("focus");
  });
  resetSelectionArea();
  stopTracking();
}

function startTracking(e) {
  positionFirst.X = e.clientX;
  positionFirst.Y = e.clientY;
  resetSelectionArea();
  menu.appendChild(selectionArea);
  nodeListOfIcons.forEach((currentIcon) => {
    currentIcon.classList.remove("focus");
  });
  menu.addEventListener("mousemove", handleMouseMove);
  menu.addEventListener("mouseleave", handleMouseLeave);
  menu.addEventListener("mouseup", stopTracking);
}

function stopTracking() {
  menu.removeChild(selectionArea);
  menu.removeEventListener("mousemove", handleMouseMove);
  menu.removeEventListener("mouseup", stopTracking);
  menu.removeEventListener("mouseleave", handleMouseLeave);
}
