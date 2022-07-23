import { useEffect, useState } from 'react';

import { AddCourseForm } from './AddCourseForm';
import { NewItemBtn } from '../../common/NewItemBtn';
import { DetailsButtons } from '../../common/DetailsButtons';

import * as configurationServices from '../../../services/configurationServices';
import { returnResult } from '../functions/returnResult';

import styles from './Courses.module.css';
import dateParser from '../../../utils/dateParser';

export const Courses = () => {
    const [courses, setCourses] = useState([]);
    
    const [formOpen, setFormOpen] = useState(false);
    const [details, setDetails] = useState({ id: null, display: false });
    // const [pagination, setPagination] = useState({count: 0, page: 1})

    // const perPage = 10;

    useEffect(() => {
        configurationServices.getAllCourses()
            .then((result) => setCourses(result));
        // setPagination(state => ({...state, count: courses.length}))
    }, []);

    const addNew = () => {
        setFormOpen(true);
    };

    const onClose = () => {
        setFormOpen(false)
    }

  
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
                        <div className={styles.center}> {x.students}</div>
                    </td>
                    <td>
                        <div className={styles.center}> {dateParser.toShort(x.start)}</div>
                    </td>
                    <td>
                        <div className={styles.center}> {dateParser.toShort(x.end)}</div>
                    </td>
                    {/* <td>{x._id}</td> */}
                </tr>
                {details.id === x._id && details.display && (
                    <tr className={styles.noBorder} key={x._id + 'd'}>
                        <td colSpan={6} className={styles.details}>
                            <div className={styles.right}>
                            <DetailsButtons
                                data={x}
                                returnResult={(course, func) => returnResult(setCourses, course, func)}
                                Form={AddCourseForm}
                                itemType="course"
                            />

                            </div>
                        </td>
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
                            <div className={styles.center}> IntId</div>
                        </th>
                        <th>Title</th>
                        <th>Location</th>
                        <th>
                            <div className={styles.center}>Students qty</div>
                        </th>
                        <th>
                            <div className={styles.center}>Start</div>
                        </th>
                        <th>
                            <div className={styles.center}> End</div>
                        </th>
                    </tr>
                </thead>
                <tbody>{table}</tbody>
            </table>
            {/* {pageLinks(courses.length, perPage).map(x => <button> &nbsp; {x} &nbsp; </button> )} */}
            <NewItemBtn onClick={addNew}>Add Course</NewItemBtn>
            {formOpen && <AddCourseForm onClose={onClose} returnResult={(course, func) => returnResult(setCourses, course, func)} func="add" />}
        </div>
    );
};
