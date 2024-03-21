const menu = document.querySelector("menu");

const selectionArea = document.createElement("span");

const position = {
  firstX: 0,
  firstY: 0,
  lastX: 0,
  lastY: 0,
};

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
  position.lastX = e.clientX;
  position.lastY = e.clientY;
  selectionArea.style.left = `${Math.min(position.firstX, position.lastX)}px`;
  selectionArea.style.top = `${Math.min(position.firstY, position.lastY)}px`;
  selectionArea.style.height = `${Math.abs(position.firstY - position.lastY)}px`;
  selectionArea.style.width = `${Math.abs(position.firstX - position.lastX)}px`;
}

function handleMouseLeave() {
  resetSelectionArea();
  stopTracking();
}

function startTracking(e) {
  position.firstX = e.clientX;
  position.firstY = e.clientY;
  resetSelectionArea();
  menu.appendChild(selectionArea);
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
