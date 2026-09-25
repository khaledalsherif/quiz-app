import Button from "./Components/Button";

import ContentCard from "./Components/ContentCard";
import Options from "./Components/Options";
function Main({ dispatch, question, answer, index, totalQuestions }) {
  const { questionText, options, correctOptionIndex, explanation } = question;
  const isLastQuestion = index === totalQuestions - 1;
  return (
    <div className="main  grid gap-2 ">
      <ContentCard header={`Question ${index + 1}`} text={questionText} />
      <Options
        options={options}
        dispatch={dispatch}
        answer={answer}
        correctOptionIndex={correctOptionIndex}
      />
      {answer !== null && (
        <>
          {!isLastQuestion ? (
            <Button
              onClick={() => dispatch({ type: "next" })}
              className="border rounded-4xl px-2 py-1 cursor-pointer hover:bg-gray-400"
            >
              Next
            </Button>
          ) : (
            <Button
              onClick={() => dispatch({ type: "finish" })}
              className="border rounded-4xl px-2 py-1 cursor-pointer hover:bg-gray-400"
            >
              Finish
            </Button>
          )}

          <ContentCard header="Explanation" text={explanation} />
        </>
      )}
    </div>
  );
}

export default Main;
