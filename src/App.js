import "./App.css";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import Shiba from "./shiba";

function App() {
  const [direction, setDirection] = useState(0);
  return (
    <div className="App">
      <div
        style={{
          width: "100%",
          height: 30,
          position: "absolute",
          top: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          fontSize: 10,
          zIndex: 10,
        }}
      >
        Implemented by "<a href="http://www.kyaroru.com">kyaroru</a>" ~ Rendered
        using GLTF format using "
        <a href="https://github.com/pmndrs/react-three-fiber">
          react-three-fiber
        </a>
        " + "<a href="https://github.com/pmndrs/gltfjsx">gltfjsx</a>"
      </div>
      <Canvas style={{ width: "100%", height: "100%" }}>
        <Suspense fallback={null}>
          <Shiba scale={2} direction={direction} />
        </Suspense>
      </Canvas>
      <div
        onClick={() => setDirection(!direction)}
        style={{
          width: "100%",
          height: 60,
          position: "absolute",
          bottom: 30,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            borderRadius: 10,
            backgroundColor: "#1dcaf5",
            width: 200,
            textAlign: "center",
            height: 40,
            color: "#fff",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            cursor: "grab",
          }}
        >
          Disturb Shiba
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: 30,
          position: "absolute",
          bottom: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          fontSize: 10,
        }}
      >
        This Shiba model is based on "
        <a href="https://sketchfab.com/3d-models/shiba-faef9fe5ace445e7b2989d1c1ece361c">
          Shiba
        </a>
        " by "<a href="https://sketchfab.com/dogerlo">zixisun02</a>" licensed
        under "
        <a href="http://creativecommons.org/licenses/by/4.0/">CC-BY-4.0</a>"
      </div>
    </div>
  );
}

export default App;
