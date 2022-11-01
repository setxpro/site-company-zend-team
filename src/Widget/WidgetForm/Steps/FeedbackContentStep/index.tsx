import React, { FormEvent, useState, useContext } from "react";
import { FeedbackType, feedbackTypes } from "../..";
import CloseButton from "../../../CloseButton";
import { apiwidget } from "../../../lib";
import ScreenshotButton from "../../ScreenshotButton";

import * as C from "./styles";
import { WidgetContext } from "./../../../../contexts/WidgetContext/index";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSended: () => void;
}

const FeedbackContentStep: React.FC<FeedbackContentStepProps> = ({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSended,
}) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [screenshotFake, setScreenshotFake] = useState<string | null>(null);
  const { wrapperWid } = useContext(WidgetContext);

  const [comment, setComment] = useState("");

  const feedbackInfo = feedbackTypes[feedbackType];

  async function handleSubmitFeedback(e: FormEvent) {
    e.preventDefault();
    setScreenshotFake("https://github.com/github.png");
    await apiwidget.post("/support/create", {
      type: feedbackType,
      comment,
      screenshot: screenshotFake,
    });

    console.log(apiwidget);

    setComment("");
    onFeedbackSended();
  }

  return (
    <C.Container>
      <C.Header>
        <C.ButtonGoBack>
          <C.ArrowLeftIcon onClick={onFeedbackRestartRequested} />
        </C.ButtonGoBack>

        <C.ContentHeader>
          <img src={feedbackInfo.image.source} alt={feedbackInfo.image.alt} />
          {feedbackInfo.title}
        </C.ContentHeader>
        <CloseButton onClick={wrapperWid} />
      </C.Header>

      <form onSubmit={handleSubmitFeedback}>
        <textarea
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        ></textarea>
        <footer>
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <C.SendFeedbackButton type="submit" disabled={comment.length === 0}>
            Enviar Feedback
          </C.SendFeedbackButton>
        </footer>
      </form>
    </C.Container>
  );
};

export default FeedbackContentStep;
