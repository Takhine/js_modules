const button = document.createElement("button");

button.innerText = "Click me";

button.onclick = () => {
  // Dynamic import of image_viewer
  // System is a global variable inside javascript
  // System.import() is a special function, that is part of ES2015 module spec
  // The browser reaches for the server and tries to find the module
  // Asynchronous call, so System.import returns a Promise
  System.import("./image_viewer").then((module) => {
    module.default();
  });
};

document.body.appendChild(button);
