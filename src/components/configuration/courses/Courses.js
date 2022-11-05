import { useContext, useEffect, useState } from 'react';

import { AddCourseForm } from './AddCourseForm';
import { NewItemBtn } from '../../common/NewItemBtn';
import { DetailsButtons } from '../../common/DetailsButtons';

import * as configurationServices from '../../../services/configurationServices';
import { returnResult } from '../functions/returnResult';

import styles from './Courses.module.css';
import dateParser from '../../../utils/dateParser';
import { DataContext } from '../../../contexts/DataContext';

export const Courses = () => {
    const [courses, setCourses] = useState([]);

    const [formOpen, setFormOpen] = useState(false);
    const [details, setDetails] = useState({ id: null, display: false });
    // const [pagination, setPagination] = useState({count: 0, page: 1})

    const {data} = useContext(DataContext)

    // const perPage = 10;

    useEffect(() => {
       setCourses(state => data.course || []);
        // configurationServices.getAllCourses().then((result) => setCourses(result));
        // setPagination(state => ({...state, count: courses.length}))
    }, [data]);

    const addNew = () => {
        setFormOpen(true);
    };

    const onClose = () => {
        setFormOpen(false);
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
    };
    const unselectHandler = (e, rowId) => {
        setDetails((state) => ({
            id: null,
            display: false,
        }));
    };

    return (
        <div>
            <div className={styles.container}>
                {courses.map((x) => (
                    <div className={styles.item} key={x._id} onMouseEnter={(e) => selectHandler(e, x._id)} onMouseLeave={(e) => unselectHandler(e, x._id)}>
                        <div> {x.internalRef}</div>
                        <div>{x.title}</div>
                        <div>
                            <i className="fa-solid fa-map-pin"></i>
                            {x.location}
                        </div>
                        <div>
                            <i className="fa-solid fa-users"></i>
                            {x.students}
                        </div>
                        {details.id === x._id && details.display ? (
                            <DetailsButtons
                                data={x}
                                returnResult={(course, func) => returnResult(setCourses, course, func)}
                                Form={AddCourseForm}
                                itemType="course"
                            />
                        ) : (
                            <div className={styles.dates}>
                                {dateParser.toShort(x.start)} - {dateParser.toShort(x.end)}
                            </div>
                        )}
                    </div>
                ))}
            </div>
                <NewItemBtn onClick={addNew}>Add Course</NewItemBtn>
            {formOpen && <AddCourseForm onClose={onClose} returnResult={(course, func) => returnResult(setCourses, course, func)} func="add" />}
        </div>
    );
};
