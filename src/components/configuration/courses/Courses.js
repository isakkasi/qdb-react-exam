import { useEffect } from 'react';
import { useState } from 'react';
import { NewItemBtn } from '../../common/NewItemBtn';
import { AddCourseForm } from './AddCourseForm';

import * as configurationServices from '../../../services/configurationServices';
import { DetailsButtons } from '../../common/DetailsButtons';

// import styles from './Courses.module.css'

export const Courses = () => {
    const [formOpen, setFormOpen] = useState(false);
    const [courses, setCourses] = useState([]);
    const [details, setDetails] = useState({id: null, display: false});

    useEffect(() => {
        configurationServices.getAllCourses().then((result) => setCourses(result));
    }, []);

    const addNewCourse = () => {
        setFormOpen((state) => !state);
    };

    const getNewCourse = (course) => {
        if (course) {
            setCourses((state) => [...state, course]);
        }
    };

    const selectHandler = (e, rowId) => {
        setDetails((state) => ({
            id: rowId,
            display: !state.display,
    }));

        console.log(e.target.key);
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

            <tr key={x._id} onClick={(e) => selectHandler(e, x._id)}>
                <td> {x.internalRef} </td>
                <td> {x.title} </td>
                <td>{x.location}</td>
                <td>{x.students}</td>
                <td>{start && start.toLocaleString('en-GB', options)}</td>
                <td>{end && end.toLocaleString('en-GB', options)}</td>
            </tr>
            {details.id === x._id && details.display &&
            <tr>
            <td></td>
                <td colSpan={3} className='w3-right'>
                <DetailsButtons />
                </td>

            </tr>}
            </>
        );
    });

    return (
        <div>
            <table className="w3-table">
                <thead>
                    <tr>
                        <th>IntId</th>
                        <th>Title</th>
                        <th>Location</th>
                        <th>Students qty</th>
                        <th>Start</th>
                        <th>End</th>
                    </tr>
                </thead>
                <tbody>{table}</tbody>
            </table>
            <NewItemBtn onClick={addNewCourse}>Add Course</NewItemBtn>
            {formOpen && <AddCourseForm onClose={addNewCourse} getNewCourse={getNewCourse} />}
        </div>
    );
};
