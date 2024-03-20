const myVideo = document.querySelector("#my-video");
const wrapper = document.querySelector(".wrapper");

myVideo.setAttribute("height", this.innerHeight);
myVideo.setAttribute("width", this.innerWidth);

const para = document.createElement("span");
para.style.backgroundColor = "black";
para.style.zIndex = "1000";
para.style.position = "absolute";
para.style.top = "0";

wrapper.addEventListener("mousedown", startTracking);

let param = [0, 0, 0, 0];

function handleMouseMove(e) {
    console.log("X: " + e.clientX + ", Y: " + e.clientY);
    // para.style.left = `${e.clientX}px`
    // para.style.top = `${e.clientY}px`
}

function startTracking(e) {
    console.log("you've hold down mouse1");
    const firstValueX = e.clientX;
    const firstValueY = e.clientY;
    para.style.left = `${firstValueX}px`;
    para.style.top = `${firstValueY}px`;
    param[0] = firstValueX;
    param[1] = firstValueY;
    wrapper.addEventListener("mousemove", handleMouseMove);
    wrapper.addEventListener("mouseup", stopTracking);
}

function stopTracking(e) {
    console.log("you've hold up mouse1");
    const lastValueX = e.clientX;
    const lastValueY = e.clientY;
    param[2] = lastValueX;
    param[3] = lastValueY;
    calcResult(param);
    wrapper.removeEventListener("mousemove", handleMouseMove);
    wrapper.removeEventListener("mouseup", stopTracking);
}

function calcResult(arr) {
    console.log(arr);
    const vectorFirstX = arr[0]
    const vectorFirstY = arr[1]
    const vectorLastX = arr[2];
    const vectorLastY = arr[3];
    let diffX = vectorFirstX - vectorLastX;
    let diffY = vectorFirstY - vectorLastY;

    if (diffX < 0 && diffY < 0) {
        para.style.left = `${vectorFirstX}px`;
        para.style.top = `${vectorFirstY}px`;
        para.style.width = `${Math.abs(diffX)}px`;
        para.style.height = `${Math.abs(diffY)}px`;
    } else if (diffX > 0 && diffY > 0) {
        para.style.left = `${vectorLastX}px`;
        para.style.top = `${vectorLastY}px`;
        para.style.width = `${diffX}px`;
        para.style.height = `${diffY}px`;
    } else if (diffX > 0 && diffY < 0) {
        para.style.left = `${vectorLastX}px`;
        para.style.top = `${vectorFirstY}px`;
        para.style.width = `${diffX}px`;
        para.style.height = `${Math.abs(diffY)}px`;
    } else if (diffX < 0 && diffY > 0) {
        para.style.left = `${vectorFirstX}px`;
        para.style.top = `${vectorLastY}px`;
        para.style.width = `${Math.abs(diffX)}px`;
        para.style.height = `${diffY}px`;
    } else {
        console.log("error");
    }

    wrapper.appendChild(para);

    setTimeout(() => {
        para.style.top = `0px`;
        para.style.left = `0px`;
        para.style.height = `0px`;
        para.style.width = `0px`;
        // setTimeout(()=>{
        //     wrapper.removeChild(para)
        // }, 1000)
    }, 100);
}
