import React, { useEffect, useState } from "react";
import { getPercentage, lerp } from "../../Utilities/Math";
import TitleHeader from "../TitleHeader/TitleHeader";
import { Container, H1 } from "./HeaderCanvas.styles";
import useWebGL from "./useWebGL";
import { FPS30, FPS60 } from "./useWebGL";


const minHeightSettings = {
  screenWidth: 1920,
  height: 1080
}
const maxHeightSettings = {
  screenWidth: 700,
  height: 200
}

const HeaderCanvas = () => {
  const [height, setHeight] = useState(400)

  const [canvas, resizeCanvas] = useWebGL({
    initWidth: window.innerWidth,
    initHeight: window.innerHeight,
    updateInterval: FPS30,
  })

  function onResizeWindow() {
    const heightScalar = getPercentage(
      minHeightSettings.screenWidth,
      maxHeightSettings.screenWidth,
      window.innerWidth
    )

    const newHeight = lerp(
      minHeightSettings.height,
      maxHeightSettings.height,
      heightScalar
    )

    setHeight(window.innerHeight)
    resizeCanvas(newHeight)
  }

  useEffect(() => {
    onResizeWindow();
    window.addEventListener('resize', onResizeWindow);
    window.addEventListener('orientationchange', onResizeWindow);
  })

  return (
    <Container height={height + "px"}>
      {canvas}
      {/* <TitleHeader text={"Some Resources"} /> */}
    </Container>
  );
};

export default HeaderCanvas;