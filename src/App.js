import { useState } from "react";
const questions = [
  {
    id: 1,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 2,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 3,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 4,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 5,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 6,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];
export default function App() {
  return (
    <div className="container">
      {questions.map((quest) => (
        <FlashCard q={quest} key={quest.id} />
      ))}
    </div>
  );
}
function FlashCard({ q }) {
  // in this implementation, each FlashCard component has its own independent state because the selectId state is defined locally within each FlashCard component. Let’s break this down:
  // state remembers. its like a memory
  const [selectId, setSelectId] = useState(null);
  return (
    <div
      className={`question ${q.id === selectId ? "background" : ""}`}
      onClick={() => handleClick(q.id)}
    >
      {selectId === q.id ? q.answer : q.question}
    </div>
  );
  function handleClick(id) {
    console.log(id, selectId);
    setSelectId(id !== selectId ? id : null);
  }
}
