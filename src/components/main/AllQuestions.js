import { useEffect, useState } from "react";

import { QuestionRow } from "./all-questions/QuestionRow";

export const AllQuestions = () => {
    const [question, setQuestion] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/question")
            .then((res) => res.json())
            .then((result) => {
                setQuestion((question) => result);
            });
    }, []);

    return (
        <div className="w3-panel">
            <div className="w3-row-padding" style={{ margin: `0 -16px` }}>
                <div className="w3-container">
                    <h5>Questions</h5>
                    <table className="w3-table w3-striped w3-white">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Question</th>
                                <th>Answer A</th>
                                <th>Answer B</th>
                                <th>Answer C</th>
                            </tr>
                        </thead>
                        <tbody>
                            {question?.map((x, i) => {
                                x.no = i+1;
                                return <QuestionRow key={x._id} data={x} />;
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
