import { useState, useEffect } from "react";
import { QuestionContent } from "./question-form/QuestionContent";

export const QuestionForm = (props) => {
    const [question, setQuestion] = useState({});
    console.log(question);

    const changeHandler = (e) => {
        setQuestion((q) => {
            if (e.target.name === "question") {
                q.question = e.target.value;
                return q;
            } else if (e.target.name === "correct") {
                q[e.target.value].isCorrect = true;
                return q;
            } else {
                if (!q[e.target.name]) {
                    q[e.target.name] = {};
                    q[e.target.name].isCorrect = false;
                }
                q[e.target.name].text = e.target.value;
                return q;
            }
        });
        console.log(question);
    };

    const submitHandler = (e) => {
        console.log("Submit");
        e.preventDefault();
        fetch("http://localhost:5000/question", {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(question),
        })
            .then((res) => res.json())
            .then((result) => props.data.reloadTable());
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="w3-twothird">
                <QuestionContent data={{ changeHandler, question }} />
            </div>

            <button className="w3-button w3-show-block">Send</button>
        </form>
    );
};
