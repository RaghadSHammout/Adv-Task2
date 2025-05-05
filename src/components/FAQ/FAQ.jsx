import React, { useState } from "react";
import "./FAQ.css";
import TopSections from "../TopSections/TopSections";

const faqData = [
    {
        question: "What are the school hours at Little Learners Academy?",
        answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
        question: "Is there a uniform policy for students?",
        answer: "Yes, students are required to wear a uniform throughout the week.",
    },
    {
        question: "What extracurricular activities are available for students?",
        answer:
            "We offer art, music, sports, and language clubs to enrich students' learning experience.",
    },
    {
        question: "How do you handle food allergies and dietary restrictions?",
        answer:
            "We work closely with families to accommodate dietary needs and food allergies.",
    },
    {
        question: "What is the teacher-to-student  Little Learners Academy?",
        answer: "We maintain a low ratio to ensure personalized attention for each student.",
    },
    {
        question: "How do you handle discipline and behavior management?",
        answer:
            "We use positive reinforcement and age-appropriate behavior strategies to guide students.",
    },
    {
        question: "How do I apply for admission to Little Learners Academy?",
        answer: "You can apply through our website or visit the school to fill out an application.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <>
            <TopSections
                text="Solutions For The Doubts"
                title="Frequently Asked Questions"
                subtitle="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
             className="center"
            />
            <div className="faq-container">
                {faqData.map((item, index) => (
                    <div
                        className={`faq-item ${openIndex === index ? "open" : ""}`}
                        key={index}
                    >
                        <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            {item.question}
                            <span className="faq-toggle">{openIndex === index ? "−" : "+"}</span>
                        </div>
                        {openIndex === index && (
                            <div className="faq-answer">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default FAQ;
