import { useEffect, useState } from 'react';

import { QuestionRow } from './all-questions/QuestionRow';
import * as questionServices from '../../../services/questionServices';

export const AllQuestions = ({ newQuestion }) => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        questionServices.getAll().then((result) => {
            setQuestions((state) => result);
            console.log(result);
        });
    }, []);

    console.log(questions);

    useEffect(() => {
        if (newQuestion.hasOwnProperty('question')) {
            setQuestions((state) => [...state, newQuestion]);
            console.log(newQuestion);
        }
    }, [newQuestion]);

    return (
        <div className="w3-container">
            {/* <h2>Questions</h2> */}
            <table className="w3-table w3-striped w3-white w3-hoverable w3-bordered-all">
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
                    {questions.map((x, i) => {
                        x.no = i + 1;
                        return <QuestionRow key={x._id} data={x} />;
                    })}
                </tbody>
            </table>
        </div>
    );
};
