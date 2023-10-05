import "./App.css";
import React from "react";
import BlobDetector from "./components/BlobDetector";
import Camera from './components/Camera';

export default function App() {
  const imgRef: React.Ref<HTMLImageElement> = React.useRef(null);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <h1>Blob Detection</h1>
      </div>
      <Camera />
    </div>
  );
}
