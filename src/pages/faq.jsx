import { Link } from "react-router-dom";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Accordion from "../Components/accordion";
import "../asset/styles/faq.css"

function Faq() {
  const [searchTerm, setSearchTerm] = useState("");
  const [active, setActive] = useState(null);

  // Function to handle input changes
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to handle accordion toggles
  const handleToggle = (question) => {
    setActive(active === question ? null : question);
  };

  // Array of questions
  const questions = [
    { q: "question1", a: "Answer 1" },
    { q: "question2", a: "Answer 2" },
    { q: "question3", a: "Answer 3" },
    { q: "question4", a: "Answer 4" },
    { q: "question5", a: "Answer 5" },
  ];

  // Filtered questions based on the search term
  const filteredQuestions = questions.filter((question) =>
    question.q.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center px-[64px] py-[32px] gap-[64px]">
        <div>
          <div className="text-[40px] font-bold">How can we help you ?</div>
          <div className="search-bar ">
            {/* Search Icon */}
            <Icon
              icon="mage:search"
              width="64"
              height="64"
              style={{ color: "grey" }}
            />
            {/* input */}
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {filteredQuestions.map((question, index) => (
            <Accordion
              key={question.q}
              question={question.q}
              active={active === question.q}
              setActive={handleToggle}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Faq;