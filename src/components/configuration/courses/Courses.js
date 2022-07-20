import { useEffect } from 'react';
import { useState } from 'react';
import { NewItemBtn } from '../../common/NewItemBtn';
import { AddCourseForm } from './AddCourseForm';

import * as configurationServices from '../../../services/configurationServices';
import { DetailsButtons } from '../../common/DetailsButtons';

import styles from './Courses.module.css';
import dateParser from '../../../utils/dateParser';

export const Courses = () => {
    const [formOpen, setFormOpen] = useState(false);
    const [courses, setCourses] = useState([]);
    const [details, setDetails] = useState({ id: null, display: false });
    // const [pagination, setPagination] = useState({count: 0, page: 1})

    // const perPage = 10;

    useEffect(() => {
        configurationServices.getAllCourses().then((result) => setCourses(result));
        // setPagination(state => ({...state, count: courses.length}))
    }, [courses.length]);

    const addNewCourse = () => {
        setFormOpen((state) => !state);
    };

    const returnResult = (course, func) => {
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
        } else if (func === 'delete') {
            if (course) {
                setCourses(state => state.filter(x => x._id !== course._id))
            }
        }
    };

    // const pageLinks = (count, perPage) => {
    //     const links = [];
    //     let i = 1;
    //     while (count > 0) {
    //         links.push(i);
    //         i++;
    //         count -= perPage
    //     }
    //     return links;
    // }

    const selectHandler = (e, rowId) => {
        setDetails((state) => ({
            id: rowId,
            display: !state.display,
        }));

        // console.log(courses);
    };

    let table = courses.map((x) => {

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
                        <div className={styles.center}> {dateParser.toShort(x.start)}</div>
                    </td>
                    <td>
                        {' '}
                        <div className={styles.center}> {dateParser.toShort(x.end)}</div>
                    </td>
                    {/* <td>{x._id}</td> */}
                </tr>
                {details.id === x._id && details.display && (
                    <tr className={styles.noBorder} key={x._id + 'd'}>
                        <td colSpan={6} className={styles.details}>
                            <div className={styles.right}>
                                <DetailsButtons data={x} returnResult={returnResult} />
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
            {/* {pageLinks(courses.length, perPage).map(x => <button> &nbsp; {x} &nbsp; </button> )} */}
            <NewItemBtn onClick={addNewCourse}>Add Course</NewItemBtn>
            {formOpen && <AddCourseForm onClose={addNewCourse} returnResult={returnResult} func="add" />}
        </div>
    );
};
