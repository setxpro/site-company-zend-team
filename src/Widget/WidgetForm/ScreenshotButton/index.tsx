import React, { useState } from "react";
import html2canvas from "html2canvas";

import {
  ButtonContainer,
  ButtonScreenshot,
  CameraIcon,
  TrashIcon,
} from "./styles";
import Loading from "../../Loading";

interface ScreenshotButtonProps {
  onScreenshotTook: (screenshot: string | null) => void;
  screenshot: string | null;
}

const ScreenshotButton: React.FC<ScreenshotButtonProps> = ({
  onScreenshotTook,
  screenshot,
}) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);
  async function handleTakeScreenShot() {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");

    onScreenshotTook(base64image);
    setIsTakingScreenshot(false);

    console.log(base64image);
  }

  if (screenshot) {
    return (
      <ButtonScreenshot
        type="button"
        onClick={() => onScreenshotTook(null)}
        screenshot={screenshot}
      >
        <TrashIcon />
      </ButtonScreenshot>
    );
  }

  return (
    <ButtonContainer type="button" onClick={handleTakeScreenShot}>
      {isTakingScreenshot ? <Loading /> : <CameraIcon />}

      {/* {convertedImage !== "" && <img src={convertedImage} alt="avatar" />} */}
    </ButtonContainer>
  );
};

export default ScreenshotButton;
