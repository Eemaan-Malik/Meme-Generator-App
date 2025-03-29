import React from "react";
import Header from "./Header";
import Meme from "./Meme";
import image from "./troll-face.png"

export default function App() {
  return (
    <div>
      <Header 
      image = {image}
      alt = "meme image" />
      <Meme />
      
    </div>
  );
}
