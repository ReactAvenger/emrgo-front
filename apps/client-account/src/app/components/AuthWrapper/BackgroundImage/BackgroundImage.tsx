import "@google/model-viewer";

import { FC, useEffect, useState } from "react";

import * as Styles from "./BackgroundImage.styles";
import { IBackgroundImageProps } from "./BackgroundImage.types";

export const BackgroundImage: FC<IBackgroundImageProps> = (props: IBackgroundImageProps) => {
  const [reveal, setReveal] = useState(false);
  useEffect(() => {
    setReveal(true);
  }, []);

  return (
    <Styles.BackgroundImage $reveal={reveal}>
      <model-viewer
        alt=""
        auto-rotate
        interaction-prompt-threshold="0"
        src="/images/3d-models/home.gltf"
        ar-status="not-presenting"
      ></model-viewer>
    </Styles.BackgroundImage>
  );
};
