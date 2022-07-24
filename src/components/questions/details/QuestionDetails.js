import { useEffect, useState } from 'react'

import * as questionServices from '../../../services/questionServices'

import dateParser from '../../../utils/dateParser';



import { FormOverlay } from '../../common/FormOverlay'

import styles from './QuestionDetails.module.css'

export const QuestionDetails  = ({
    data,
    onClose,
    func,

}) => {
    const [question, setQuestion] = useState({})
    const [comments, setComments] = useState([])
    const [input, setInput] = useState('');

    useEffect(() => {
        questionServices.getById(data._id)
        .then(result => setQuestion(result))
    },[data._id])

    useEffect(() => {
        if(question._id) {
            questionServices.getAllComments(question._id)
            .then(result => setComments(result))

        }
    }, [question._id])

    const commentSubmitHandler =(e) => {
        e.preventDefault();
        questionServices.createComment({comment: input, author: localStorage.getItem('userId')}, question._id)
        .then(() => {

            setComments(state => [
                ...state,
                {comment: input,
                    author: {
                        username: localStorage.getItem('username')
                    }
                }
            ])
            
            setInput('')
        })
    }

    const commentChangeHandler = (e) => {
        setInput(e.target.value)
    }

    return (
        <FormOverlay onClose={onClose}>

        <div className={styles.container}>

            
            <h2 className={styles.title}>Details</h2>
            <div className={styles.question}>

            <p>Q: {question.question}</p>
            <p className={`${styles.answer} ${question.correctAns === 'ansA' ? styles.correct : ''}`}>A: {question.ansA}</p>
            <p className={`${styles.answer} ${question.correctAns === 'ansB' ? styles.correct : ''}`}>B: {question.ansB}</p>
            <p className={`${styles.answer} ${question.correctAns === 'ansC' ? styles.correct : ''}`}>C: {question.ansC}</p>
            </div>
            <p>Created by: {question.author?.username}</p>
            <p>Created on: {dateParser.toShort(question.createdAt)}</p>
            <p>Last updated on: {dateParser.toShort(question.updatedAt)}</p>
            <p>---------------------------------</p>
            {comments.map(x => (
                <p key={x._id}>{x.comment} from {x.author?.username}</p>
            ))}
            <div>
                <form onSubmit={commentSubmitHandler}>
                    <textarea
                        name="comment"
                        cols="30"
                        rows="10"
                        placeholder='Comment ...'
                        onChange={commentChangeHandler}
                        value={input}

                    />
                    <input type="submit" value="Add" />
                </form>
            </div>

        </div>





        </FormOverlay>
    )
}