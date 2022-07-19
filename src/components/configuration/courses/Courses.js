import { useEffect } from 'react';
import { useState } from 'react';
import { NewItemBtn } from '../../common/NewItemBtn';
import { AddCourseForm } from './AddCourseForm';

import * as configurationServices from '../../../services/configurationServices';
import { DetailsButtons } from '../../common/DetailsButtons';

import styles from './Courses.module.css';

export const Courses = () => {
    const [formOpen, setFormOpen] = useState(false);
    const [courses, setCourses] = useState([]);
    const [details, setDetails] = useState({ id: null, display: false });

    useEffect(() => {
        configurationServices.getAllCourses().then((result) => setCourses(result));
    }, []);

    const addNewCourse = () => {
        setFormOpen((state) => !state);
    };

    const getNewCourse = (course, func) => {
        if (func === 'edit') {
            console.log(func);
            setCourses((state) => {
                return state.map((x) => {
                    if (course._id === x._id) {
                        console.log(x);
                        console.log(course);
                        return course;
                    } else {
                        return x;
                    }
                });
            });
            console.log(courses);
        } else if (func === 'add' || func === 'addSimilar') {
            if (course) {
                setCourses((state) => [...state, course]);
            }
        }
    };

    const selectHandler = (e, rowId) => {
        setDetails((state) => ({
            id: rowId,
            display: !state.display,
        }));

        // console.log(e.target.key);
    };

    let table = courses.map((x) => {
        let start = x.start ? new Date(x.start) : undefined;
        let end = x.end ? new Date(x.end) : undefined;
        let options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        };

        return (
            <>
                <tr key={x._id} onClick={(e) => selectHandler(e, x._id)} className={details.id === x._id && details.display ? styles.active : 'dummy'}>
                    <td>
                        <div className={styles.center}> {x.internalRef} </div>{' '}
                    </td>
                    <td> {x.title} </td>
                    <td>{x.location}</td>
                    <td>
                        {' '}
                        <div className={styles.center}> {x.students}</div>
                    </td>
                    <td>
                        {' '}
                        <div className={styles.center}> {start && start.toLocaleString('en-GB', options)}</div>
                    </td>
                    <td>
                        {' '}
                        <div className={styles.center}> {end && end.toLocaleString('en-GB', options)}</div>
                    </td>
                    {/* <td>{x._id}</td> */}
                </tr>
                {details.id === x._id && details.display && (
                    <tr className={styles.noBorder} key={x._id + 'd'}>
                        <td colSpan={6} className={styles.details}>
                            <div className={styles.right}>
                                <DetailsButtons data={x} getNewCourse={getNewCourse} />
                            </div>
                        </td>
                        {/* <td>{x._id + 'd'}</td> */}
                    </tr>
                )}
            </>
        );
    });

    return (
        <div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>
                            {' '}
                            <div className={styles.center}> IntId</div>
                        </th>
                        <th>Title</th>
                        <th>Location</th>
                        <th>
                            {' '}
                            <div className={styles.center}>Students qty</div>
                        </th>
                        <th>
                            <div className={styles.center}>Start</div>
                        </th>
                        <th>
                            {' '}
                            <div className={styles.center}> End</div>
                        </th>
                    </tr>
                </thead>
                <tbody>{table}</tbody>
            </table>
            <NewItemBtn onClick={addNewCourse}>Add Course</NewItemBtn>
            {formOpen && <AddCourseForm onClose={addNewCourse} getNewCourse={getNewCourse} func="add" />}
        </div>
    );
};
