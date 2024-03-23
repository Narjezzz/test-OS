const menu = document.querySelector("menu");
const icons = document.querySelectorAll(".icons");
// const iconTest = document.querySelector(".test");

const selectionArea = document.createElement("span");

const positionFirst = { X: 0,Y: 0, };
const positionLast ={ X: 0, Y: 0, }

const objTest = {}

const arrayElements = []

const arrayTest = []

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

function qwerty(){
  const selectionAreaRect = selectionArea.getBoundingClientRect();
  // const iconRect = iconTest.getBoundingClientRect();

  for (let index = 0; index < Object.keys(objTest).length; index++) {
    
    const iconRectArray = Object.values(objTest)
    const iconRect = iconRectArray[index]
    // console.log(iconRect[index], "iconRect")
    // console.log(index)
    if (selectionAreaRect.left < iconRect.right && selectionAreaRect.right > iconRect.left && selectionAreaRect.top < iconRect.bottom && selectionAreaRect.bottom > iconRect.top) {
      // iconTest.classList.add('focus');
      // arrayElements[index].classList.add("focus")
      arrayElements[index].classList.add("focus")
      // console.log("11231231321321321321313213")
      // menu.removeEventListener('pointermove', qwerty);
    }
  }
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
}

function handleMouseLeave() {
  resetSelectionArea();
  stopTracking();
}

function startTracking(e) {
  positionFirst.X = e.clientX;
  positionFirst.Y = e.clientY;
  resetSelectionArea();
  menu.appendChild(selectionArea);
  icons.forEach( icon => {
    arrayTest.push(icon.getBoundingClientRect())
    arrayElements.push(icon)
    icon.classList.remove("focus")
  })
  for (let index = 0; index < arrayTest.length; index++) {
    objTest[`icon ${index}`] = arrayTest[index]
    // console.log(objTest, "objtest in for")
  }
  // console.log(objTest, "objTest")
  // console.log(Object.keys(objTest).length, "objTest elngth")
  menu.addEventListener('pointermove', qwerty);
  menu.addEventListener("mousemove", handleMouseMove);
  menu.addEventListener("mouseleave", handleMouseLeave);
  menu.addEventListener("mouseup", stopTracking);
}

function stopTracking() {
  menu.removeChild(selectionArea);
  menu.removeEventListener("mousemove", handleMouseMove);
  menu.removeEventListener("mouseup", stopTracking);
  menu.removeEventListener("mouseleave", handleMouseLeave);
  menu.removeEventListener('pointermove', qwerty);
  arrayTest.length = 0
  arrayElements.length = 0
  // console.log(objTest, "objTest empty")
}
