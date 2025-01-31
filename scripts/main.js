let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World";

const myImage = document.querySelector("img");
myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/ducks.png") {
        myImage.setAttribute("src", "images/CAT.png");
    } else {
        myImage.setAttribute("src", "images/ducks.png")
    }
});


let myButton = document.querySelector("button");

function setUserName() {
    let myName = prompt('Please enter your name: ');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Whats up', ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = `Whats up, ${storedName}`;
}

myButton.addEventListener("click", () => {
    setUserName();
});
