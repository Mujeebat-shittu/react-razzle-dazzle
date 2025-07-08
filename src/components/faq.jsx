import { useState, useEffect } from "react";
import '../styles/faq.css'

function FAQ () {
    const [openIndexes, setOpenIndexes] = useState([]);

    useEffect(()=> {document.body.style.backgroundColor= 'hsl(0, 0%, 10%)';

        return () => {
            document.body.style.backgroundColor = "";
    };
}, []);

    const faqs = [
        {
            question: "What is React?",
            answer: "React is a JavaScript library used to build user interfaces, especially for single-page applications. It lets developers build reusable UI components."
  },
  {
      question: "What is a component in React?",
      answer: "A component is a reusable piece of UI that can have its own logic and state. Components can be functions or classes."
  },
  {
    question: "What is the difference between state and props?",
    answer: "State is data managed inside a component that can change over time, while props are values passed from a parent component to a child component."
  },
  {
      question: "What is JSX?",
    answer: "JSX stands for JavaScript XML. It allows you to write HTML-like code in JavaScript, which React then compiles into real DOM elements."
},
{
    question: "What does useState do in React?",
    answer: "useState is a React hook that allows a component to hold and update internal state."
  },
  {
    question: "What is a closure in JavaScript?",
    answer: "A closure is a function that remembers variables from its outer scope, even after that outer function has finished executing."
},
  {
      question: "What is the difference between == and === in JavaScript?",
    answer: "== checks for value equality and allows type coercion. === checks for both value and type equality — it's stricter and more reliable."
},
  {
      question: "What is an API?",
    answer: "An API (Application Programming Interface) allows different software systems to communicate. In web development, it's often used to send and receive data from servers."
  },
  {
      question: "What is a function in programming?",
      answer: "A function is a block of code that performs a specific task. It can be reused, takes inputs (parameters), and can return an output."
  },
  {
    question: "What is conditional rendering in React?",
    answer: "Conditional rendering means displaying certain parts of the UI only when specific conditions are met, like showing a message only if the user is logged in."
}
];

const toggleOption = function (index) {
setOpenIndexes(prev => {
    if (prev.includes(index)){
        return prev.filter(i => i !== index);
    }else {
        return [...prev, index];
    }
});
}

    return (
        <>
        <div 
        className="faq-container">    
        {faqs.map ((faq, index) => (
            <div
            className="faq-content"
             key={index}>
                <h3
                style={{
                   color: 'hsl (0, 0%, 50)',
                   padding: '0.5rem'
                }}>{faq.question}</h3>
                    {openIndexes.includes(index) && 
                    <p
                    style={{
                         color: 'hsl(0, 0%, 100%)',
                         fontSize: '14px',
                         padding: '0.57rem'
                    }}>{faq.answer}</p>}
    
                <button 
                onClick={ () => toggleOption (index)}
                style={{
                    borderRadius: '4px',
                    border: 'none',
                    marginTop: '0.8rem',
                    color: 'hsl(215, 18%, 15%)',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                    fontWeight:'600'




                }}>
                    {openIndexes.includes(index) ? 'Hide answer' :'Show answer'}
                 </button>
            </div>

            
        ))}
    
        
    </div>
       </>

    )

}

export default FAQ;

{/* <section>
            <p>What is React?</p>
            {isOpen && <p>React is a JavaScript library for building UIs...</p>}
            <button 
            onClick={toggleOption}>{isOpen ? 'Hide answer' : 'Show answer'}</button>
        </section> */}