import "./App.css";
import React from "react";
import BlobDetector from "./components/BlobDetector";
import Webcam from "react-webcam";

export default function App() {
  const imgRef: React.Ref<HTMLImageElement> = React.useRef(null);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Blob Detection</h1>

      <img className="imageSource" alt="input" ref={imgRef} />
      <BlobDetector />
    </div>
  );
}
