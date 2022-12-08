// import small from "../assets/small.jpeg";
import "../styles/image_viewer.css";

const src = "https://picsum.photos/400/400";

export default () => {
  const image = document.createElement("img");
  image.src = src;

  document.body.appendChild(image);
};
