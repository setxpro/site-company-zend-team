import React, { useContext } from "react";
import { FeedbackType, feedbackTypes } from "../..";
import CloseButton from "../../../CloseButton";

import * as C from "./styles";
import { WidgetContext } from "./../../../../contexts/WidgetContext/index";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

const FeedbackTypeStep: React.FC<FeedbackTypeStepProps> = ({
  onFeedbackTypeChanged,
}) => {
  const { wrapperWid } = useContext(WidgetContext);

  return (
    <C.Container>
      <header>
        <span>Deixe o seu feedback</span>
        <CloseButton onClick={wrapperWid} />
      </header>

      <C.Content>
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </C.Content>
    </C.Container>
  );
};

export default FeedbackTypeStep;
