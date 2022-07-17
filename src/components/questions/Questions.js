import { useState, useEffect } from 'react';

import { Title } from '../common/Title';
import { AddQuestionBtn } from './AddQuestionBtn';
import { AllQuestions } from './AllQuestions';
import { QuestionForm } from './QuestionForm';
import styles from './Questions.module.css';

export const Questions = () => {

    const [addState, setAddState] = useState(false)
    const [newQuestion, setNewQuestion] = useState({})

    const getIsOpen = () => {
        console.log(addState);
        setAddState(state => !state)
    }

    useEffect(()=> {
        console.log(addState);
    }, [addState])

    const addRow = (question) => {
        setNewQuestion(state => question)
    }

    return (
        // <main className="main">
        <section className={styles.card}>
            <div>
                <Title icon='fa-solid fa-circle-question'>Questions</Title>

                <AllQuestions newQuestion={newQuestion}/>
                <br />

                <AddQuestionBtn getIsOpen={getIsOpen}/>

                {addState && <QuestionForm getIsOpen={getIsOpen} addRow={addRow}/>}


            </div>
        </section>
        // </main>
    );
};
/*   <Boxes />
import { Feeds } from "./main/Feeds"
import { Boxes } from "./main/Boxes";
import { Stats } from "./main/Stats";
import { Users } from "./main/Users";
import { Comments } from "./main/Comments";
           <Feeds />
           <hr />
           <Stats />
           <hr />

            <div className="w3-container">
                <h5>Countries</h5>
                <table className="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white">
                    <tbody>
                        <tr>
                            <td>United States</td>
                            <td>65%</td>
                        </tr>
                        <tr>
                            <td>UK</td>
                            <td>15.7%</td>
                        </tr>
                        <tr>
                            <td>Russia</td>
                            <td>5.6%</td>
                        </tr>
                        <tr>
                            <td>Spain</td>
                            <td>2.1%</td>
                        </tr>
                        <tr>
                            <td>India</td>
                            <td>1.9%</td>
                        </tr>
                        <tr>
                            <td>France</td>
                            <td>1.5%</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <button className="w3-button w3-dark-grey">
                    More Countries &nbsp;<i className="fa fa-arrow-right"></i>
                </button>
            </div>
            <hr />
            <Users />
            <hr />

            <Comments />
            <br /> */
