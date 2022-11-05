import { useState } from 'react';

// import { FormOverlay } from '../../common/FormOverlay';
import { TextArea, TextInput } from '../../common/Inputs';
import { Logo } from '../../common/Logo';

import * as questionServices from '../../../services/questionServices';
import * as configurationServices from '../../../services/configurationServices';

import styles from './QuestionForm.module.css';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { DataContext } from '../../../contexts/DataContext';

export const AddQuestionForm = ({ func }) => {
    const navigate = useNavigate();
    const { auth } = useContext(AuthContext);
    const { data, setData } = useContext(DataContext);

    const [ata, setAta] = useState([]);
    const [type, setType] = useState([]);
    const [disabledSave, setDisabledSave] = useState(false);
    const [error, setError] = useState({ ata: '', level: '', type: '', q: '', a: '', b: '', c: '', correct: '', qError: '' });

    let { id } = useParams();

    const [formData, setFormData] = useState({});

    useEffect(() => {
        setAta((state) => data.ata || []);
    }, [data]);

    useEffect(() => {
        setType((state) => data.type || []);
    }, [data]);

    useEffect(() => {
        if (func !== 'new' && id) {
            questionServices.getById(id).then((res) => setFormData((state) => res));
        } else {
            setFormData((state) => ({
                question: '',
                ansA: '',
                ansB: '',
                ansC: '',
                correctAns: '',
                level: '',
                ata: '',
                author: auth._id,
                error: '',
                type: [],
            }));
        }
    }, [id, func, auth._id]);

    useEffect(() => {
        setDisabledSave((state) => Object.values(error).filter((a) => a !== null).length > 0);
    }, [error]);

    useEffect(() => {
        let qError = '';
        let end;
        if (formData.question) {
            end = formData.question[formData.question.length - 1];
        }
        if (end === '.' || end === ':' || end === '?') {
            qError = '';
        } else {
            qError = 'The question shall end with: [.] or [:] or [?]';
        }
        setError((state) => ({
            ...state,
            ata: formData.ata === '0' || formData.ata === '' ? 'Select ata' : null,
            level: Number(formData.level) > 3 || Number(formData.level) < 1 ? 'Select correct level' : null,
            type: formData.type?.length === 0 ? 'Select at least one type' : null,
            q: formData.question?.length === 0 ? 'Enter the question' : null,
            a: formData.ansA?.length === 0 ? 'Enter the answer' : null,
            b: formData.ansB?.length === 0 ? 'Enter the answer' : null,
            c: formData.ansC?.length === 0 ? 'Enter the answer' : null,
            correct: formData.correctAns === '' ? 'Select the correct answer' : null,
            qError: !!qError ? qError : null,
        }));
    }, [formData]);

    const disabled = false;

    const getFormData = (field, value) => {
        setFormData((state) => {
            return {
                ...state,
                [field]: value,
            };
        });
    };
    // console.log(error);

    let selectedTypes = [];
    const getSelectedOptionsType = (e) => {
        let options = Array.from(e.target.options);
        options.forEach((x) => {
            if (x.selected) {
                selectedTypes.push(x.value);
            }
        });
        // console.log(selectedTypes);
        setFormData((state) => {
            return {
                ...state,
                type: selectedTypes,
            };
        });
        // console.log(values);
    };

    const saveQuestion = async () => {
        console.log('Button clicked');
        setFormData((state) => ({
            ...state,
            level: Number(state.level),
        }));
        let question;
        try {
            // Parse to number for proper database storage
            if (func === 'edit') {
                question = await questionServices.edit(formData);
                // returnResult({ ...formData, _id: data._id }, 'edit');
                // returnResult({ ...question, _id: data._id }, 'edit');
                setData((state) => ({
                    ...state,
                    questions: [...data.questions.map((x) => (x._id === question._id ? question : x))],
                }));
                // navigate('/questions');
            } else if (func === 'new' || func === 'similar') {
                if (formData._id) {
                    delete formData._id;
                }
                question = await questionServices.create({ ...formData, author: auth._id });
                setFormData(state => ({
                    ...state,
                    question: '',
                    ansA: '',
                    ansB: '',
                    ansC: '',
                    correctAns: '',
                }))
                setData((state) => ({
                    ...state,
                    questions: [...data.questions, question],
                }));
            }
            // onClose();
        } catch (error) {
            setError(state => ({
                ...state,
                dbError: error,
            }))
            throw new Error(error);
        }
    };

    const saveQuestionAndClose = () => { 
        saveQuestion();
        navigate('/questions');
        
    }

    return (
        <div className={styles.form}>
            <Logo />

            <h2 className={styles.centered}>{func[0].toUpperCase() + func.slice(1)} question</h2>

            <div className={`${styles.grid} ${styles['grid-column-3']}`}>
                <div>
                    <label htmlFor="ata" className={styles.label}>
                        ATA
                        <select
                            htmlFor="ata"
                            name="ata"
                            className={styles.select}
                            value={formData.ata?._id}
                            onChange={(e) => getFormData('ata', e.target.value)}
                        >
                            {[{ _id: 0, ata: '', title: 'Select ATA ...' }, ...ata]
                                .sort((a, b) => a.ata.localeCompare(b.ata))
                                .map((x) => (
                                    <option key={x._id} value={x._id}>
                                        {x.ata} {x.title}
                                    </option>
                                ))}
                        </select>
                    </label>
                    <p className={styles.validationError}>{error.ata}</p>
                </div>
                <div>
                    <TextInput name="level" type="number" getValues={getFormData} inValue={formData.level} disabled={disabled} minMax={[1, 3]}>
                        Level
                    </TextInput>
                    <p className={styles.validationError}>{error.level}</p>
                </div>
                <div>
                    <label htmlFor="type" className={styles.label}>
                        Aircraft Type
                        <select
                            htmlFor="type"
                            name="type"
                            className={styles.select}
                            // value={formData.type?._id}
                            value={formData.type}
                            onChange={(e) => getSelectedOptionsType(e)}
                            multiple
                        >
                            {type.map((x) => (
                                <option key={x._id} value={x._id} className={styles.selected}>
                                    {x.short}
                                </option>
                            ))}
                        </select>
                    </label>
                    <p className={styles.validationError}>{error.type}</p>
                </div>
            </div>
            <TextArea name="question" getValues={getFormData} inValue={formData.question} disabled={disabled}>
                Question
            </TextArea>
            <p className={styles.validationError}>{[error.q, error.qError].filter((e) => !!e).join('; ')}</p>

            <div className={styles.answers}>
                <div className={`${styles.grid} ${styles['grid-column-80']}`}>
                    <div>
                        <TextArea name="ansA" getValues={getFormData} inValue={formData.ansA} disabled={disabled}>
                            AnsA
                        </TextArea>
                        <p className={styles.validationError}>{error.a}</p>
                    </div>
                    <div>
                        <label htmlFor="correctAns">
                            <input
                                className={styles.inputRadio}
                                type="radio"
                                name="correctAns"
                                checked={formData.correctAns === 'ansA'}
                                value={formData.correctAns}
                                onChange={(e) => getFormData('correctAns', 'ansA')}
                            />
                        </label>
                    </div>
                    <div>
                        <TextArea name="ansB" getValues={getFormData} inValue={formData.ansB} disabled={disabled}>
                            AnsB
                        </TextArea>
                        <p className={styles.validationError}>{error.b}</p>
                    </div>
                    <div>
                        <label htmlFor="correctAns">
                            <input
                                className={styles.inputRadio}
                                type="radio"
                                name="correctAns"
                                checked={formData.correctAns === 'ansB'}
                                value={formData.correctAns}
                                onChange={(e) => getFormData('correctAns', 'ansB')}
                            />
                        </label>
                    </div>
                    <div>
                        <TextArea name="ansC" getValues={getFormData} inValue={formData.ansC} disabled={disabled}>
                            AnsC
                        </TextArea>
                        <p className={styles.validationError}>{error.c}</p>
                    </div>
                    <div>
                        <label htmlFor="correctAns">
                            <input
                                className={styles.inputRadio}
                                type="radio"
                                name="correctAns"
                                checked={formData.correctAns === 'ansC'}
                                value={formData.correctAns}
                                onChange={(e) => getFormData('correctAns', 'ansC')}
                            />
                        </label>
                    </div>
                    <p className={styles.validationError}>{error.correct}</p>
                </div>
            </div>

            <div className={styles['form-submit']}>
                <div className={styles.error}>{error.dbError && <span>Error: {error.dbError}</span>}</div>

                {!disabledSave && (
                    <button to="/questions" className={styles.saveBtn} onClick={saveQuestion}>
                        {func[0].toUpperCase() + func.slice(1) + ' and stay'}
                    </button>
                )}
                {!disabledSave && (
                    <button to="/questions" className={styles.saveBtnClose} onClick={saveQuestionAndClose}>
                        {func[0].toUpperCase() + func.slice(1) + ' and close'}
                    </button>
                )}
                <Link to="/questions" className={styles.cancelBtn}>
                    Cancel
                </Link>
            </div>
        </div>
    );
};
