import React, { useState, useEffect } from "react";

// Sample questions JSON - replace or extend with your full question bank
const fullQuestionBank = [
  {
    question: "What is the worst-case time complexity of inserting an element at the end of a dynamic array in C++?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    answer: "O(1)"
  },
  {
    question: "Which data structure uses LIFO (Last-In-First-Out) ordering?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    answer: "Stack"
  },
  {
    question: "In a binary search tree, which traversal yields a sorted order?",
    options: ["In-order", "Pre-order", "Post-order", "Level-order"],
    answer: "In-order"
  },
  {
    question: "Which SQL clause is used to filter records?",
    options: ["SELECT", "WHERE", "ORDER BY", "GROUP BY"],
    answer: "WHERE"
  },
  {
    question: "Which OOP principle allows using the same method name with different implementations?",
    options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
    answer: "Polymorphism"
  },
  {
    question: "What will be printed by: print(2 ** 3) in Python?",
    options: ["6", "9", "8", "5"],
    answer: "8"
  },
  {
    question: "If A is the father of B and C is the mother of B, then C is the ____ of A.",
    options: ["Mother", "Wife", "Sister", "Aunt"],
    answer: "Wife"
  },
  {
    question: "Which sorting algorithm has the best worst-case time complexity?",
    options: ["Bubble Sort", "Merge Sort", "Insertion Sort", "Selection Sort"],
    answer: "Merge Sort"
  },
  {
    question: "Which data structure is best for implementing a priority queue?",
    options: ["Stack", "Binary Heap", "Queue", "Linked List"],
    answer: "Binary Heap"
  },
  {
    question: "In a linked list, what is the time complexity to insert at the beginning?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    answer: "O(1)"
  },
  // Add more questions here as needed, total 50+ preferred for choice
  {
    question: "Which traversal method in Binary Search Trees retrieves the smallest value first?",
    options: ["In-order", "Pre-order", "Post-order", "Level-order"],
    answer: "In-order"
  },
  {
    question: "Which Python keyword is used to define a function?",
    options: ["func", "def", "function", "lambda"],
    answer: "def"
  },
  {
    question: "The average of 5, 10, 15, 20, and 25 is:",
    options: ["15", "18", "20", "17"],
    answer: "15"
  },
  {
    question: "Which data structure uses FIFO (First-In, First-Out)?",
    options: ["Stack", "Queue", "Priority Queue", "Binary Tree"],
    answer: "Queue"
  },
  {
    question: "If 5 workers can complete a job in 12 days, how many days will 3 workers take to complete the same job?",
    options: ["20 days", "15 days", "18 days", "25 days"],
    answer: "20 days"
  },
  {
    question: "Find the missing number: 1, 4, 9, 16, 25, __?",
    options: ["30", "35", "36", "42"],
    answer: "36"
  },
  {
    question: "Which logical gate's output is true only if both inputs are true?",
    options: ["OR", "AND", "XOR", "NAND"],
    answer: "AND"
  }
];

function shuffleArray(arr) {
  // Fisher–Yates shuffle
  let array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function App() {
  const quizSizes = [10, 20, 30, 40, 50];
  const [stage, setStage] = useState("home"); // 'home' | 'quiz' | 'result'
  const [quizSize, setQuizSize] = useState(10);
  const [questions, setQuestions] = useState([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  // Start quiz with selected size
  const startQuiz = (size) => {
    // Pick random 'size' questions
    const selectedQuestions = shuffleArray(fullQuestionBank).slice(0, size);
    setQuizSize(size);
    setQuestions(selectedQuestions);
    setCurrentQIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowAnswer(false);
    setStage("quiz");
  };

  const currentQuestion = questions[currentQIndex];

  const handleOptionClick = (option) => {
    if (showAnswer) return; // prevent changing after submit

    setSelectedOption(option);
    setShowAnswer(true);
    if (option === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    if (currentQIndex + 1 < quizSize) {
      setCurrentQIndex(currentQIndex + 1);
    } else {
      setStage("result");
    }
  };

  const goHome = () => {
    setStage("home");
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }
        body {
          font-family: Arial, sans-serif;
          background-color: #f0f2f5;
          margin: 0; padding: 0;
          display: flex; justify-content: center; align-items: flex-start;
          min-height: 100vh;
          padding: 20px;
        }
        .app-container {
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
          padding: 20px;
          max-width: 600px;
          width: 100%;
        }
        h1 {
          text-align: center;
          margin-bottom: 20px;
        }
        .button-group {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
          margin-bottom: 20px;
        }
        button {
          font-size: 16px;
          padding: 10px 25px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          background-color: #007bff;
          color: white;
          transition: background-color 0.3s ease;
          user-select: none;
        }
        button:hover:not(:disabled) {
          background-color: #0056b3;
        }
        button:disabled {
          cursor: not-allowed;
          opacity: 0.6;
        }
        .scoreboard {
          position: fixed;
          top: 20px;
          right: 20px;
          background: #222;
          color: #0f0;
          font-weight: bold;
          font-size: 18px;
          padding: 8px 15px;
          border-radius: 5px;
          user-select: none;
          z-index: 100;
        }
        .question-container {
          margin-bottom: 20px;
          font-weight: bold;
          font-size: 18px;
        }
        .options-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
          color: black;
        }
        .option-btn {
          padding: 12px 15px;
          font-size: 16px;
          border-radius: 5px;
          border: 2px solid transparent;
          cursor: pointer;
          color: black;
          text-align: left;
          transition: background-color 0.4s ease, border-color 0.4s ease;
          user-select: none;
          background-color: #f9f9f9;
        }
        .option-btn:hover:not(:disabled) {
          background-color: #e6f0ff;
        }
        .option-btn.correct {
          background-color: #d4edda !important;
          border-color: #28a745 !important;
          color: #155724;
          cursor: default;
        }
        .option-btn.incorrect {
          background-color: #f8d7da !important;
          border-color: #dc3545 !important;
          color: #721c24;
          cursor: default;
        }
        .submit-btn {
          margin-top: 20px;
          background-color: #28a745;
          font-weight: bold;
        }
        .submit-btn:disabled {
          background-color: #94d3a2;
          cursor: not-allowed;
        }
        .next-btn {
          margin-top: 20px;
          background-color: #17a2b8;
        }
        .home-btn {
          display: block;
          margin: 30px auto 0 auto;
          background-color: #6c757d;
        }
      `}</style>

      <div className="app-container" role="main" aria-live="polite" aria-atomic="true">
        <h1>Lumen Quiz App</h1>

        {stage === "home" && (
          <>
            <p style={{ textAlign: "center", marginBottom: "25px" }}>
              Select the number of quiz questions:
            </p>
            <div className="button-group" role="group" aria-label="Select quiz size">
              {quizSizes.map((size) => (
                <button key={size} onClick={() => startQuiz(size)}>
                  Quiz for {size} Questions
                </button>
              ))}
            </div>
          </>
        )}

        {stage === "quiz" && currentQuestion && (
          <>
            <div className="scoreboard" aria-label={`Score: ${score} out of ${quizSize}`}>
              Score: {score} / {quizSize}
            </div>

            <div className="question-container" aria-live="polite" tabIndex={-1}>
              Question {currentQIndex + 1} of {quizSize}:
              <br />
              {currentQuestion.question}
            </div>

            <div className="options-container" role="list" aria-label="Answer options">
              {currentQuestion.options.map((option, idx) => {
                let className = "option-btn";
                if (showAnswer) {
                  if (option === currentQuestion.answer) {
                    className += " correct";
                  } else if (option === selectedOption) {
                    className += " incorrect";
                  }
                }
                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(option)}
                    className={className}
                    disabled={showAnswer}
                    role="listitem"
                    aria-pressed={selectedOption === option}
                    aria-disabled={showAnswer}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {showAnswer ? (
              <button className="next-btn" onClick={nextQuestion} autoFocus>
                {currentQIndex + 1 === quizSize ? "See Results" : "Next Question"}
              </button>
            ) : (
              <p style={{ marginTop: 20, fontStyle: "italic" }}>
                Please select an option to submit your answer
              </p>
            )}
          </>
        )}

        {stage === "result" && (
          <>
            <div style={{ textAlign: "center", fontSize: 22, fontWeight: "bold" }}>
              Quiz complete! <br />
              Your score: {score} / {quizSize}
            </div>
            <button className="home-btn" onClick={goHome} autoFocus>
              Go to Home
            </button>
          </>
        )}
      </div>
    </>
  );
}
