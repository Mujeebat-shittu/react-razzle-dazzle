import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import { ChevronRightIcon } from "lucide-react";
import { Home } from "lucide-react";

function FAQ() {
  const [openIndexes, setOpenIndexes] = useState([]);

  useEffect(() => {
    document.body.style.backgroundColor = "hsl(0, 0%, 10%)";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const faqs = [
    {
      question: "What is React?",
      answer:
        "React is a JavaScript library used to build user interfaces, especially for single-page applications. It lets developers build reusable UI components.",
    },
    {
      question: "What is a component in React?",
      answer:
        "A component is a reusable piece of UI that can have its own logic and state. Components can be functions or classes.",
    },
    {
      question: "What is the difference between state and props?",
      answer:
        "State is data managed inside a component that can change over time, while props are values passed from a parent component to a child component.",
    },
    {
      question: "What is JSX?",
      answer:
        "JSX stands for JavaScript XML. It allows you to write HTML-like code in JavaScript, which React then compiles into real DOM elements.",
    },
    {
      question: "What does useState do in React?",
      answer:
        "useState is a React hook that allows a component to hold and update internal state.",
    },
    {
      question: "What is a closure in JavaScript?",
      answer:
        "A closure is a function that remembers variables from its outer scope, even after that outer function has finished executing.",
    },
    {
      question: "What is the difference between == and === in JavaScript?",
      answer:
        "== checks for value equality and allows type coercion. === checks for both value and type equality — it's stricter and more reliable.",
    },
    {
      question: "What is an API?",
      answer:
        "An API (Application Programming Interface) allows different software systems to communicate. In web development, it's often used to send and receive data from servers.",
    },
    {
      question: "What is a function in programming?",
      answer:
        "A function is a block of code that performs a specific task. It can be reused, takes inputs (parameters), and can return an output.",
    },
    {
      question: "What is conditional rendering in React?",
      answer:
        "Conditional rendering means displaying certain parts of the UI only when specific conditions are met, like showing a message only if the user is logged in.",
    },
  ];

  const toggleOption = function (index) {
    setOpenIndexes((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const navigate = useNavigate();
  const handlenext = function () {
    navigate("/modeToggle");
  };

  const handleback = function () {
    navigate("/counter");
  };

  const handlehome = function () {
    navigate("/");
  };

  return (
    <>
      <div className="py-3.5 px-12 my-4 mx-auto ">
        {faqs.map((faq, index) => (
          <div className="p-4" key={index}>
            <h3 className="p-2]">{faq.question}</h3>
            {openIndexes.includes(index) && (
              <p className="text-[hsl(0,0%,100%)] text-xl p-[0.57rem]">
                {faq.answer}
              </p>
            )}

            <button
              onClick={() => toggleOption(index)}
              className="rounded-sm border-none mt-[0.8rem] text-[hsl(0,0%,70%)] cursor-pointer font-semibold] bg-[hsl(0,0%,40%)] px-4 py-2"
            >
              {openIndexes.includes(index) ? "Hide answer" : "Show answer"}
            </button>
          </div>
        ))}
      </div>

      <div className="gap-8 flex items-center justify-center mt-2 p-4">
        <ChevronLeftIcon
          size={30}
          strokeWidth={4}
          onClick={handleback}
          className=" cursor-pointer bg-[hsl(0,0%,40%)] hover:bg-[hsl(0,0%,20%)] px-1"
        />

        <Home
          size={30}
          strokeWidth={4}
          onClick={handlehome}
          className="cursor-pointer bg-[hsl(0,0%,40%)] hover:bg-[hsl(0,0%,20%)] px-1"
        />

        <ChevronRightIcon
          size={30}
          strokeWidth={4}
          onClick={handlenext}
          className=" cursor-pointer bg-[hsl(0,0%,40%)] hover:bg-[hsl(0,0%,20%)] px-1"
        />
      </div>
    </>
  );
}

export default FAQ;

{
  /* <section>
            <p>What is React?</p>
            {isOpen && <p>React is a JavaScript library for building UIs...</p>}
            <button 
            onClick={toggleOption}>{isOpen ? 'Hide answer' : 'Show answer'}</button>
        </section> */
}
