import { useEffect, useReducer } from "react";
import Main from "./Main";
import SideBar from "./SideBar";
import Loading from "./Components/Loading";
import Error from "./Components/Error";
import Welcome from "./Welcome";
import Header from "./Header";
import Finish from "./Finish";

const initialState = {
  status: "loading",
  quizTitle: "",
  totalQuestions: 0,
  questions: {},
  answer: null,
  index: 0,
  totalScore: 0,
  fullScore: 0,
  error: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "receivedData":
      return {
        ...state,
        ...action.payload,
        status: "ready",
        fullScore: action.payload.totalQuestions * 10,
      };

    case "start":
      return {
        ...state,
        status: "progress",
      };
    case "answerSelected": {
      const currentQuestion = state.questions[state.index];
      const isCorrect = action.payload === currentQuestion.correctOptionIndex;
      return {
        ...state,
        answer: action.payload,
        totalScore: isCorrect ? state.totalScore + 10 : state.totalScore,
      };
    }
    case "next":
      return {
        ...state,
        answer: null,
        index: state.index + 1,
      };
    case "recordNewScore":
      return {
        ...state,
        totalScore: state.totalScore + action.payload,
      };
    case "finish":
      return {
        ...state,
        status: "finish",
        answer: null,
        index: 0,
      };
    case "restart":
      return {
        ...state,
        answer: null,
        index: 0,
        totalScore: 0,
        status: "ready",
      };
    case "error":
      return {
        ...state,
        status: "error",
        error: action.payload,
      };
    default:
      return {
        ...state,
        status: "error",
        error: "Unknown Error",
      };
  }
}
export default function App() {
  const [
    {
      status,
      quizTitle,
      totalQuestions,
      totalScore,
      fullScore,
      questions,
      index,
      answer,
      error,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(function () {
    const apiUrl =
      import.meta.env.VITE_JSON_API || "http://localhost:4000/data";
    const apiKey = import.meta.env.VITE_JSON_API_KEY;

    const headers = apiKey ? { "X-Access-Key": apiKey } : {};

    fetch(apiUrl, { headers })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data from server");
        return res.json();
      })
      .then((data) => {
        console.log("data=> ", data.record.quizes);
        dispatch({ type: "receivedData", payload: data.record.quizes });
      })
      .catch((err) => dispatch({ type: "error", payload: err.message }));
  }, []);
  console.log({
    status,
    quizTitle,
    totalQuestions,
    totalScore,
    fullScore,
    questions,
    index,
    answer,
    error,
  });
  return (
    <div className="app bg-gray-300 min-h-screen p-4">
      <Header>{quizTitle || "Exam Page"}</Header>
      {status === "loading" && <Loading />}
      {status === "ready" && status !== "error" && (
        <Welcome dispatch={dispatch} />
      )}
      {status === "progress" && status !== "error" && (
        <div className="w-full max-w-4xl mx-auto">
          <div className="main-side grid grid-cols-1 md:grid-cols-6 items-start gap-5">
            <div className="main col-span-1 md:col-span-4">
              <Main
                dispatch={dispatch}
                question={questions[index]}
                answer={answer}
                index={index}
                totalQuestions={totalQuestions}
              />
            </div>
            <div className="side col-span-1 md:col-span-2">
              <SideBar totalQuestions={totalQuestions} index={index} />
            </div>
          </div>
        </div>
      )}
      {status === "finish" && status !== "error" && (
        <Finish
          dispatch={dispatch}
          fullScore={fullScore}
          totalScore={totalScore}
        />
      )}
      {status === "error" && <Error details={error.message} />}
    </div>
  );
}
