import { useEffect } from 'react';
import { useState } from 'react';
import { ExamQuestion } from './ExamQuestion';
import styles from './GeneratedExam.module.css';

export const GeneratedExam = ({ selectedAta, allQuestions }) => {
    let seq = 1;
    const [exam, setExam] = useState([]);

    // console.log(exam);

    useEffect(() => {
        // console.log(selectedAta);
        let atas = selectedAta.sort((a, b) => a.id - b.id).map((x, i) => ({
            ataId: x.id,
            title: x.title,
            sum: x.l1 + x.l2 + x.l3,
            l1: x.l1,
            l2: x.l2,
            l3: x.l3,
            questions: [],
            prev: 0,
        }));
        // atas.forEach((x, i) => (atas[i].prev = atas[i - 1]?.sum || 0 + atas[i - 1]?.prev || 0));
        // console.log(atas);
        // console.log(atas);
        atas.map((x) => {
            let possibleByAta = allQuestions.filter((q) => q.ata._id === x.ataId);
            let possibleByLevel1 = possibleByAta.filter((q) => q.level === 1);
            let possibleByLevel2 = possibleByAta.filter((q) => q.level === 2);
            let possibleByLevel3 = possibleByAta.filter((q) => q.level === 3);
            // console.log(x.l3);
            // console.log(possibleByLevel3.length);
            for (let i = 0; i < x.l1 && i < possibleByLevel1.length; i++) {
                // console.log(i);
                let question = possibleByLevel1[Math.floor(Math.random() * possibleByLevel1.length)];
                if (!x.questions.some((c) => c._id === question._id)) {
                    x.questions.push(question);
                    // setExam(state => [...state, question])
                } else {
                    i--;
                    console.log('Found similar');
                }
            }
            for (let i = 0; i < x.l2 && i < possibleByLevel2.length; i++) {
                // console.log(i);
                let question = possibleByLevel2[Math.floor(Math.random() * possibleByLevel2.length)];
                if (!x.questions.some((c) => c._id === question._id)) {
                    x.questions.push(question);
                    // setExam(state => [...state, question])
                } else {
                    i--;
                    console.log('Found similar');
                }
            }
            for (let i = 0; i < x.l3 && i < possibleByLevel3.length; i++) {
                // console.log(i);
                let question = possibleByLevel3[Math.floor(Math.random() * possibleByLevel3.length)];
                if (!x.questions.some((c) => c._id === question._id)) {
                    x.questions.push(question);
                    // setExam(state => [...state, question])
                } else {
                    i--;
                    console.log('Found similar');
                }
            }
        });
        setExam((state) => atas);
    }, [selectedAta, allQuestions]);

    return (
        <div className={styles.general}>
            <h1>Generated Exam</h1>
            <div>
                {exam.map((x) => (
                    <div key={x.ataId}>
                    <div  className={styles.ataTitle}>
                        <h3>{x.title}</h3>
                    </div>
                        {x.questions.map((s, i) => (
                            <div key={s._id}>
                                <ExamQuestion question={s} start={seq++} all={x.questions.length} />
                            </div>
                        ))}
                        {/* <ExamQuestion /> */}
                        {/* <ExamQuestion /> */}
                    </div>
                ))}
            </div>
        </div>
    );
};
